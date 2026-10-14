# Portfólio de Engenharia de Dados — Guilherme Mendes

Portfólio pessoal focado em Engenharia de Dados, construído em [Next.js 16](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS + shadcn/ui, com deploy no Vercel.

Portfólio Full Stack: <https://guilhermendes-app-pied.vercel.app/>

## Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: Tailwind CSS + shadcn/ui + `lucide-react` + `react-icons`
- **Formulários**: `react-hook-form` + `zod`
- **E-mail**: [Resend](https://resend.com)
- **Analytics**: `@vercel/analytics`
- **Deploy**: Vercel

## Rodando localmente

```bash
# instalar
npm install

# dev
npm run dev
# http://localhost:3000

# build de produção
npm run build && npm run start
```

### Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

| Variável | Obrigatório | Descrição |
| --- | --- | --- |
| `RESEND_API_KEY` | sim (produção) | Chave da API do [Resend](https://resend.com/api-keys) para o formulário de contato. |
| `CONTACT_TO_EMAIL` | sim | Para onde o formulário envia (padrão: `guilhermemendeds@gmail.com`). |
| `CONTACT_FROM_EMAIL` | não | Remetente verificado no Resend. Em dev usa `onboarding@resend.dev`. |
| `NEXT_PUBLIC_GITHUB_USER` | não | Usuário do GitHub a listar nos projetos. Padrão: `Guiilhermendes`. |

## Como adicionar um novo notebook do Databricks

1. No Databricks, abra o notebook e vá em **File → Export → HTML**.
2. Salve o arquivo em `public/notebooks/<slug>.html` (ex.: `public/notebooks/etl-financeiro.html`).
3. Registre o notebook em [`content/notebooks.ts`](./content/notebooks.ts):

```ts
{
  slug: "etl-financeiro",
  title: "ETL para motor de decisão financeira",
  description: "Pipeline PySpark que ingere eventos e grava no S3 particionado.",
  tags: ["PySpark", "Databricks", "ETL"],
  htmlPath: "/notebooks/etl-financeiro.html",
  date: "2026-10-14",
  platform: "Databricks",
  // sourceUrl: "https://community.cloud.databricks.com/...", // opcional
}
```

4. O notebook aparece automaticamente em `/#notebooks` e em `/notebooks/<slug>`.

> Dica: para Jupyter, use **File → Download as → HTML**. Mesma estrutura.

## Como adicionar o CV em inglês

1. Coloque o PDF em `public/cv/CV_Guilherme_Mendes_EN.pdf`.
2. Em [`content/cvs.ts`](./content/cvs.ts), ajuste o item `en`:

```ts
{
  id: "en",
  language: "English",
  label: "CV in English",
  file: "/cv/CV_Guilherme_Mendes_EN.pdf",
  available: true,
  updatedAt: "2026-11-01",
}
```

## Como adicionar/filtrar projetos do GitHub

Os projetos são buscados automaticamente da API pública do GitHub e filtrados pela heurística em [`lib/github.ts`](./lib/github.ts):

- Linguagens consideradas "de dados": `Python`, `Jupyter Notebook`, `SQL`, `Scala`, `R`, `HCL`.
- Topics considerados "de dados": `data`, `data-engineering`, `etl`, `spark`, `pyspark`, `databricks`, `aws`, `glue`, `athena`, etc.

Para que um repositório apareça: adicione topics relevantes no GitHub (ex: `data-engineering`, `pyspark`). O cache ISR do Next revalida a cada 1 hora.

## Deploy no Vercel

1. Faça push do projeto para um repositório Git.
2. No Vercel, importe o repositório.
3. Configure as variáveis de ambiente em **Project Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (opcional, use um domínio verificado em produção)
4. Deploy.

### Dica Resend em produção

Para enviar com um remetente do seu domínio (ex.: `contato@guilhermemendes.dev`), verifique o domínio em [resend.com/domains](https://resend.com/domains) e defina `CONTACT_FROM_EMAIL="Portfolio <contato@guilhermemendes.dev>"`.

## Estrutura

```
app/
  api/contact/route.ts   # Endpoint Resend
  notebooks/
    page.tsx             # Lista completa
    [slug]/page.tsx      # Renderiza HTML exportado em iframe
  layout.tsx
  page.tsx               # Home (todas as seções)
  opengraph-image.tsx    # OG image dinâmica
  sitemap.ts
  robots.ts
components/
  sections/              # Hero, About, TechStack, Experience, Projects, Notebooks, CVDownload, Contact
  ui/                    # Componentes shadcn/ui
  navbar.tsx, footer.tsx, theme-provider.tsx, theme-toggle.tsx
content/
  cvs.ts                 # Metadados dos CVs (PT/EN)
  notebooks.ts           # Metadados dos notebooks
lib/
  github.ts              # Fetch + filtro dos repos
  contact-schema.ts      # Validação zod
  site.ts                # Constantes do site
public/
  cv/                    # PDFs dos currículos
  notebooks/             # HTMLs exportados do Databricks/Jupyter
```
