# Deploy notes for `mattssoftware.com`

## Where the site lives

Two hosting targets, kept in lockstep by `.github/workflows/deploy.yml`:

1. **Shared hub VPS — `149.248.47.151`** ← _the production target_
   - Served by Caddy from `/opt/mattssoftware-site`
   - Same box runs `attack.fm`, `prettycardboard.com`, `libre.academy`,
     `ghostmarkdown.com`, and more under their own vhosts. Our rsync is
     scoped to `/opt/mattssoftware-site/` — never rsync `--delete` above
     that directory, or you'll wipe another product's site root.
   - Caddy config in `/etc/caddy/Caddyfile`; our vhost block starts at
     the `mattssoftware.com, www.mattssoftware.com { ... }` section.
   - Logs: `journalctl -u caddy -f` (grep `mattssoftware` to filter)
   - Root creds live locally in `~/Development/Apps/AttackFM/.env`
     (`AFM_DEPLOY_PASS=...`). The GitHub Actions deploy reads them from
     the `VPS_SSH_PASSWORD` repo secret — they must stay in sync.

2. **GitHub Pages mirror** — `https://infamousvague.github.io/mattssoftware/`
   - Belt-and-suspenders backup. If the VPS is down, the Pages mirror is
     still up.
   - Uploaded by the same workflow's `actions/deploy-pages` step.

The `Deploy Website` workflow runs on push, nightly cron (04:17 UTC),
`repository_dispatch` from the upstream Fishbones repo, and manual
dispatch. It does this:

```
checkout marketing → checkout Fishbones → checkout @mattmattmattmatt/base
  → npm ci marketing → npm ci Fishbones
  → npm run sync:fishbones (builds Fishbones web variant + stages it
    into public/fishbones/learn/)
  → npm run build (Vite builds dist/)
  → upload to GitHub Pages
  → rsync dist/ → root@149.248.47.151:/opt/mattssoftware-site/
```

A typical end-to-end deploy takes ~3-4 minutes.

## DNS cutover (OLD box → hub)

The migration from the old Vultr box (`149.28.120.197`) to the shared hub
(`149.248.47.151`) needs DNS updates in Gandi:

```
mattssoftware.com.       A   149.28.120.197    ← OLD (decommission)
www.mattssoftware.com.   A   —                 ← missing; add one
```

Target state:

```
mattssoftware.com.       A   149.248.47.151    ✓
www.mattssoftware.com.   A   149.248.47.151    ✓
```

Steps:

1. Log into [Gandi](https://gandi.net) → `mattssoftware.com` → DNS records.
2. **Update the apex `A` record**: `mattssoftware.com.` → `149.248.47.151`.
3. **Add the `www` `A` record**: `www.mattssoftware.com.` → `149.248.47.151`.
4. (Optional) Drop the TTL to 300s an hour before the change so propagation
   completes within minutes; restore to 3600s+ after.
5. Wait 5-30 minutes. Caddy on the hub will auto-ACME the Let's Encrypt
   cert as soon as the HTTP-01 challenge reaches the right box — no
   manual intervention needed. (Confirm with
   `journalctl -u caddy -g mattssoftware` on the hub if curious.)
6. Verify from outside:
   ```
   dig +short A mattssoftware.com         # expect 149.248.47.151
   curl -I https://mattssoftware.com/     # expect 200, Server: Caddy
   curl -I https://mattssoftware.com/ghostwire/hero.png  # expect 200
   ```
7. Once the hub is confirmed serving, decommission `149.28.120.197`
   (Vultr console → Destroy server). Also drop any leftover
   `/var/www/mattssoftware` + stale vhost from that box if it stays
   around for anything else.

Pre-cutover testing without touching DNS:

```
# Hit the hub directly with the right Host header
curl --resolve mattssoftware.com:80:149.248.47.151 http://mattssoftware.com/
# → 308 Permanent Redirect, Server: Caddy  (vhost is wired)
```

## VPS access

Same credentials pattern as the rest of the hub's products:

```
VPS_HOST=149.248.47.151
VPS_USER=root
VPS_PORT=22
VPS_PASSWORD=<see ~/Development/Apps/AttackFM/.env  →  AFM_DEPLOY_PASS>
```

The deploy workflow reads it from a repo secret:

```
gh secret set VPS_SSH_PASSWORD --repo InfamousVague/mattssoftware --body '<password>'
```

If the hub's root password rotates, update the local `.env`, the repo
secret, and the other product deploys that share the box.

## Caddy block

```caddy
mattssoftware.com, www.mattssoftware.com {
    root * /opt/mattssoftware-site
    encode zstd gzip
    try_files {path} /index.html
    file_server
}
```

The `try_files` fallback serves `index.html` for any unmatched path so
the client-side React Router handles `/blip`, `/ghostwire`, `/libre`,
etc. without a server-side 404. No embedded sub-apps live under this
root today — Libre graduated to its own `libre.academy` host — so the
block stays simple.

## Local dev / manual deploy

```bash
# Just the marketing site
npm run dev

# Full deploy bundle (with the Fishbones embed) without touching CI
npm run build:embed     # runs sync:fishbones + npm run build
npx serve dist          # preview at http://localhost:3000

# Push manually to the hub (e.g. a hot fix while the workflow is broken).
# Reads the password straight from the AttackFM .env so the credential
# never shows up in shell history.
PW=$(grep '^AFM_DEPLOY_PASS=' ~/Development/Apps/AttackFM/.env | sed 's/^AFM_DEPLOY_PASS=//; s/^"//; s/"$//')
SSHPASS="$PW" sshpass -e rsync -a --delete \
  -e "ssh -o StrictHostKeyChecking=no" \
  dist/ root@149.248.47.151:/opt/mattssoftware-site/
```
