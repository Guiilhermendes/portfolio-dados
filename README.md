# Data Engineering Portfolio — Guilherme Mendes

Personal portfolio focused on Data Engineering, built with [Next.js 16](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS + shadcn/ui, deployed on Vercel. Available in Portuguese and English.

Full Stack portfolio: <https://guilhermendes-app-pied.vercel.app/>

## Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: Tailwind CSS + shadcn/ui + `lucide-react` + `react-icons`
- **i18n**: Route-based (`/pt`, `/en`) with language toggle
- **Forms**: `react-hook-form` + `zod`
- **Email**: [Resend](https://resend.com)
- **Analytics**: `@vercel/analytics`
- **Deploy**: Vercel

## Running locally

```bash
# install dependencies
npm install

# dev server
npm run dev
# http://localhost:3000

# production build
npm run build && npm run start
```

### Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (production) | [Resend](https://resend.com/api-keys) API key for the contact form. |
| `CONTACT_TO_EMAIL` | yes | Destination email for form submissions (default: `guilhermemendeds@gmail.com`). |
| `CONTACT_FROM_EMAIL` | no | Verified sender in Resend. Falls back to `onboarding@resend.dev` in dev. |
| `NEXT_PUBLIC_GITHUB_USER` | no | GitHub username used to list projects. Default: `Guiilhermendes`. |

## Internationalization (PT / EN)

The site runs under locale-prefixed routes:

- `/` → redirects to `/pt` (default locale)
- `/pt` → Portuguese version
- `/en` → English version
- `/[locale]/notebooks`
- `/[locale]/notebooks/[slug]`

All UI strings live in a single dictionary at [`content/i18n.ts`](./content/i18n.ts). To add a new string, add the key to **both** `pt` and `en` — TypeScript will enforce the shape.

The language toggle in the navbar preserves the current path when switching locales (`/en/notebooks/foo` → `/pt/notebooks/foo`).

## How to add a new Databricks notebook

1. In Databricks, open the notebook → **File → Export → HTML**.
2. Save the file to `public/notebooks/<slug>.html` (e.g. `public/notebooks/financial-etl.html`).
3. Register the notebook in [`content/notebooks.ts`](./content/notebooks.ts):

```ts
{
  slug: "financial-etl",
  title: "ETL for a financial decision engine",
  description: "PySpark pipeline that ingests decision events and writes to S3 partitioned by date.",
  tags: ["PySpark", "Databricks", "ETL"],
  htmlPath: "/notebooks/financial-etl.html",
  date: "2026-10-14",
  platform: "Databricks",
  // sourceUrl: "https://community.cloud.databricks.com/...", // optional
}
```

4. The notebook shows up automatically at `/[locale]/#notebooks` and at `/[locale]/notebooks/<slug>`.

> Jupyter? Use **File → Download as → HTML**. Same structure.

## How to add a certificate

1. Save the PDF to `public/certificates/<slug>.pdf`.
2. Register it in [`content/certificates.ts`](./content/certificates.ts):

```ts
{
  id: "my-cert",
  title: {
    pt: "Título em português",
    en: "Title in English",
  },
  description: {
    pt: "Descrição curta.",
    en: "Short description.",
  },
  issuer: "Udemy",
  date: "2026-10-29",
  hours: "7.5h",
  tags: ["Databricks"],
  pdfPath: "/certificates/my-cert.pdf",
  credentialUrl: "https://ude.my/UC-...", // optional
  credentialId: "UC-...", // optional
}
```

3. The certificate appears automatically in the **Certificates** section (`/#certificados`).

## How the resume (CV) section works

Resume metadata lives in [`content/cvs.ts`](./content/cvs.ts). Both PT and EN are included:

```ts
{
  id: "pt",
  language: "Português",
  label: "CV em Português (ATS-friendly)",
  file: "/cv/CV_Guilherme_Mendes_PT.pdf",
  available: true,
}
```

To replace a PDF, drop the new file in `public/cv/` with the same filename and update `updatedAt`.

The Hero section's "Download resume" button is locale-aware: on `/pt` it serves the Portuguese PDF, on `/en` the English one.

## How GitHub projects are listed

Projects are fetched automatically from the public GitHub API and filtered by the heuristics in [`lib/github.ts`](./lib/github.ts):

- Languages considered "data": `Python`, `Jupyter Notebook`, `SQL`, `Scala`, `R`, `HCL`.
- Topics considered "data": `data`, `data-engineering`, `etl`, `spark`, `pyspark`, `databricks`, `aws`, `glue`, `athena`, etc.

To get a repository featured: add relevant topics on GitHub (e.g. `data-engineering`, `pyspark`). Next.js ISR cache revalidates every hour.

If no "data" repos are found, falls back to the most recently updated public repos.

## Deploying to Vercel

1. Push the project to a Git repository.
2. In Vercel, import the repository.
3. Configure environment variables under **Project Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional, use a verified domain in production)
4. Deploy.

### Resend in production

To send from a domain of your own (e.g. `contact@your-domain.com`), verify the domain at [resend.com/domains](https://resend.com/domains) and set `CONTACT_FROM_EMAIL="Portfolio <contact@your-domain.com>"`.

## Project structure

```
app/
  api/contact/route.ts          # Resend endpoint
  [locale]/
    layout.tsx                  # Navbar + Footer (locale-aware)
    page.tsx                    # Home (all sections)
    notebooks/
      page.tsx                  # Full list
      [slug]/page.tsx           # Renders exported HTML in sandboxed iframe
  layout.tsx                    # Root <html>/<body>, providers
  page.tsx                      # Redirects / → /pt
  opengraph-image.tsx           # Dynamic OG image
  sitemap.ts
  robots.ts
components/
  sections/                     # Hero, About, TechStack, Experience, Projects, Notebooks, CVDownload, Contact
  ui/                           # shadcn/ui primitives
  navbar.tsx, footer.tsx
  theme-provider.tsx, theme-toggle.tsx
  language-toggle.tsx
content/
  i18n.ts                       # Full PT/EN dictionary
  cvs.ts                        # Resume variants (PT/EN)
  notebooks.ts                  # Notebook metadata
lib/
  github.ts                     # GitHub repo fetch + filter
  contact-schema.ts             # Zod schema for the contact form
  i18n.ts                       # Locale types + dictionary getter
  site.ts                       # Site-wide constants
public/
  cv/                           # Resume PDFs
  notebooks/                    # Exported HTML notebooks (Databricks / Jupyter)
```
