# public-legal-docs

Public legal & policy documents for **G.U. Group** products (Lunascape,
G.U. Wallet, and others). Built with [Docusaurus](https://docusaurus.io) and
deployed on Vercel. The design matches
[gu-group-website](https://www.gu-group.com) (shared brand CSS, logo, footer).
Product sites link out to the documents hosted here so legal copy can be updated
independently of any product release.

## Scope

- **Public-facing** legal/policy documents only. **Do not** put internal or
  confidential company documents in this repository — it is published publicly.

## Authoring model

- **Source of truth:** the Markdown files under `docs/` (English) and
  `i18n/ja/docusaurus-plugin-content-docs/current/` (Japanese).
- **Authoritative languages:** English and Japanese. Other languages, if added,
  are reference-only — the **English version is authoritative**.
- **Documents:** Privacy Policy, Terms of Service, and Cookie Policy (en + ja).
  The Privacy Policy is carried over from gu-group-website; Terms and Cookie
  Policy are standard baseline drafts. All three should be confirmed by the
  legal owner before being relied upon.
- **Versioning:** git history and tags preserve every past revision.
- **Review:** every change goes through a pull request. `CODEOWNERS` requires
  the legal owner to approve changes.

## Development

```bash
npm install
npm start          # dev server (English)
npm start -- --locale ja
npm run build      # static build of en + ja into build/
npm run serve      # preview the production build
```

## Deployment

Deployed on **Vercel** (see `vercel.json` — framework `docusaurus-2`, output
`build/`). Push to `main` → production; pull requests → preview deployments.
Production domain: <https://terms.gu-group.com> (CNAME → `cname.vercel-dns.com`
in the `gu-group.com` Route 53 zone). Production is public; preview deployments
are protected by Vercel Authentication.

## Design / dependency notes

- Brand CSS is copied from `gu-group-website/src/css/custom.css`; logo and
  favicon are copied from its `static/img/`. Keep them in sync when the group
  brand changes.
- `webpack` is pinned to **5.104.1** via `overrides`: webpack ≥ 5.108 ships a
  stricter `ProgressPlugin` schema that Docusaurus 3.9.2 does not satisfy
  (build fails with a ProgressPlugin `ValidationError`). This matches the
  version gu-group-website builds against.
