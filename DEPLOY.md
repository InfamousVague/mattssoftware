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

## DNS

Current (2026-10-02, cutover complete):

```
mattssoftware.com.       A   149.248.47.151    ✓ (apex only — no www)
```

The old Vultr box (`149.28.120.197`) is still powered on but no longer
part of this site. It can be decommissioned at your leisure (Vultr
console → Destroy server). Once destroyed, you may also want to clean
up any `api.mattssoftware.com` / `tap.mattssoftware.com` records in
Gandi that still point to it, if their respective products have moved.

**No `www` subdomain** — deliberate. The vhost on the hub serves the
apex only; a stray `www.` lookup will NXDOMAIN, which is intended. If
you ever want to add it: create a `www` A record in Gandi pointing at
`149.248.47.151`, then edit the hub's Caddyfile vhost line from
`mattssoftware.com {` to `mattssoftware.com, www.mattssoftware.com {`
and `caddy reload`.

### Pre-cutover smoke test (useful next time around a cutover)

```
# Hit the hub directly with the right Host header, before DNS flips
curl --resolve mattssoftware.com:443:149.248.47.151 https://mattssoftware.com/
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
mattssoftware.com {
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
