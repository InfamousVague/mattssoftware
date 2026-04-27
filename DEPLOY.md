# Deploy notes for `mattssoftware.com`

## Where the site lives

Two hosting targets, kept in lockstep by `.github/workflows/deploy.yml`:

1. **Vultr VPS — `149.28.120.197`** ← _the production target_
   - Served by Caddy from `/var/www/mattssoftware`
   - Same box that runs `tap.mattssoftware.com` (port 8443) and `api.mattssoftware.com` (port 9443)
   - Caddy config in `/etc/caddy/Caddyfile` (also versioned in this README under [Caddy block](#caddy-block))
   - Logs: `journalctl -u caddy -f`

2. **GitHub Pages mirror** — `https://infamousvague.github.io/mattssoftware/`
   - Belt-and-suspenders backup. If the VPS is down, the Pages mirror is still up.
   - Uploaded by the same workflow's `actions/deploy-pages` step.

The `Deploy Website` workflow runs on push, nightly cron (04:17 UTC), `repository_dispatch` from the upstream Fishbones repo, and manual dispatch. It does this:

```
checkout marketing → checkout Fishbones → checkout @mattmattmattmatt/base
  → npm ci marketing → npm ci Fishbones
  → npm run sync:fishbones (builds Fishbones web variant + stages it
    into public/fishbones/learn/)
  → npm run build (Vite builds dist/)
  → upload to GitHub Pages
  → rsync dist/ → root@149.28.120.197:/var/www/mattssoftware/
```

A typical end-to-end deploy takes ~3-4 minutes.

## DNS — where it currently points vs where it should

```
mattssoftware.com.       A   216.128.151.199    ← OLD (decommission)
www.mattssoftware.com.   A   217.70.184.50      ← Gandi parking page
api.mattssoftware.com.   A   149.28.120.197     ✓
tap.mattssoftware.com.   A   149.28.120.197     ✓
```

To cut `mattssoftware.com` over to the new VPS:

1. Log into [Gandi](https://gandi.net) → `mattssoftware.com` → DNS records.
2. **Update the apex `A` record**: `mattssoftware.com.` → `149.28.120.197`.
3. **Update the `www` `A` record**: `www.mattssoftware.com.` → `149.28.120.197`.
4. (Optional) Drop the TTL to 300s an hour before the change so propagation completes within minutes; restore to 3600s+ after.
5. Wait 5-30 minutes. Caddy will detect the new IP, complete the ACME challenge automatically, and issue a Let's Encrypt cert.
6. Verify:
   ```
   curl -I https://mattssoftware.com/                            # 200, Server: Caddy
   curl -I https://mattssoftware.com/fishbones/learn/            # 200, served from /var/www/mattssoftware/fishbones/learn/index.html
   curl -I https://mattssoftware.com/fishbones/learn/vendor/svelte-runtime.js  # 200
   ```
7. Once you've confirmed the new VPS is serving correctly, decommission `216.128.151.199` (Vultr console → Destroy server).

Pre-cutover testing without touching DNS:

```
# Resolves to 149.28.120.197 — useful for QA before flipping
curl http://mattssoftware-test.149.28.120.197.nip.io/
curl http://mattssoftware-test.149.28.120.197.nip.io/fishbones/learn/
```

## VPS access

Same root password as the kata API + tap relay deploys:

```
VPS_HOST=149.28.120.197
VPS_USER=root
VPS_PORT=22
VPS_PASSWORD=<see Apps/tap/.env or Apps/kata/api/.env>
```

The deploy workflow reads it from a repo secret:

```
gh secret set VPS_SSH_PASSWORD --repo InfamousVague/mattssoftware --body '<password>'
```

## Caddy block

```caddy
mattssoftware.com, www.mattssoftware.com {
    root * /var/www/mattssoftware
    encode zstd gzip

    # Embedded Fishbones web app — kata's dist-web/ landed here. Real
    # asset/vendor/starter-courses files served directly; deep paths
    # fall back to the embed's own index.html so kata's React Router
    # handles them without dropping through to the marketing SPA.
    @fbLearn path /fishbones/learn /fishbones/learn/*
    handle @fbLearn {
        try_files {path} /fishbones/learn/index.html
        file_server
    }

    # Marketing SPA — everything else falls back to /index.html so
    # React Router handles /tap, /fishbones, /blip, etc.
    handle {
        try_files {path} /index.html
        file_server
    }
}
```

There's also an HTTP-only `mattssoftware-test.149.28.120.197.nip.io` block for pre-cutover testing — drop it after DNS settles.

## Local dev / manual deploy

```bash
# Just the marketing site
npm run dev

# Full deploy bundle (with the Fishbones embed) without touching CI
npm run build:embed     # runs sync:fishbones + npm run build
npx serve dist          # preview at http://localhost:3000

# Push manually to the VPS (e.g. a hot fix while the workflow is broken)
SSHPASS='<password>' sshpass -e rsync -a --delete \
  -e "ssh -o StrictHostKeyChecking=no" \
  dist/ root@149.28.120.197:/var/www/mattssoftware/
```
