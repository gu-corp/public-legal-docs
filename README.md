# public-legal-docs

Public legal & policy documents for **G.U. Group** products (Lunascape,
G.U. Wallet, and others). Built with [Nextra](https://nextra.site) (Next.js) and
deployed on Vercel. Product sites link out to the documents hosted here so legal
copy can be updated independently of any product release.

## Scope

- **Public-facing** legal/policy documents only (Privacy Policy, Terms of
  Service, Cookie Policy, …). **Do not** put internal or confidential company
  documents in this repository — it is published publicly.

## Authoring model

- **Source of truth:** the Markdown/MDX files under `content/`.
- **Authoritative languages:** English (`content/en`) and Japanese
  (`content/ja`). If other languages are added they are reference-only — the
  **English version is authoritative** (stated in the site banner and footer).
- **Versioning:** each document's front-matter carries `version`,
  `effectiveDate` and `lastUpdated`. Historical versions are recoverable from
  git history; cut a git tag for each effective-dated release.
- **Review:** every change goes through a pull request. `CODEOWNERS` requires
  the legal owner to approve changes under `content/`.

> The document bodies are currently **DRAFT templates** and must be replaced
> with legal-approved copy before this site is treated as published.

## Development

```bash
npm install
npm run dev     # http://localhost:3000  (redirects to /en)
npm run build   # static export of all locale routes
```

## Deployment

Deployed on **Vercel** (auto-detects Next.js). Push to `main` → production;
pull requests → preview deployments. Intended custom domain: e.g.
`legal.gu.net` (TBD).

## Dependency note

`zod` is pinned to **4.1.12** (exact). `nextra-theme-docs@4.6.1` declares
`zod@^4.1.12`, but zod ≥ 4.4 changed object validation so that the theme's
`<Layout>` (which strips `children` before parsing its props against a schema
that lists `children`) throws `expected nonoptional, received undefined`. Keep
zod pinned until Nextra/theme are upgraded to a version verified against newer
zod.
