import { site } from "@/lib/site";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
};

const DATA_LANGUAGES = new Set([
  "python",
  "jupyter notebook",
  "sql",
  "scala",
  "r",
  "hcl",
]);

const DATA_TOPICS = [
  "data",
  "data-engineering",
  "etl",
  "spark",
  "pyspark",
  "databricks",
  "aws",
  "glue",
  "athena",
  "lakehouse",
  "data-pipeline",
  "analytics",
  "ml",
  "machine-learning",
  "notebook",
  "pandas",
];

/**
 * Busca repositórios públicos do usuário no GitHub.
 * Usa cache ISR do Next (revalida a cada 1h) para evitar rate-limit.
 */
export async function fetchRepos(
  user: string = site.githubUser
): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      console.error("[github] fetchRepos failed", res.status, await res.text());
      return [];
    }
    return (await res.json()) as GitHubRepo[];
  } catch (err) {
    console.error("[github] fetchRepos error", err);
    return [];
  }
}

/**
 * Filtra apenas projetos relacionados a dados (por linguagem ou topics)
 * e ordena por atualização recente.
 */
export function filterDataRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos
    .filter((r) => !r.fork && !r.archived && !r.private)
    .filter((r) => {
      const lang = (r.language ?? "").toLowerCase();
      const hasDataLang = DATA_LANGUAGES.has(lang);
      const hasDataTopic =
        Array.isArray(r.topics) &&
        r.topics.some((t) => DATA_TOPICS.includes(t.toLowerCase()));
      return hasDataLang || hasDataTopic;
    })
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );
}

/**
 * Fallback: se nenhum repo "de dados" for encontrado, retorna os mais
 * recentes para o site não ficar vazio.
 */
export function pickDisplayRepos(repos: GitHubRepo[], limit = 6): GitHubRepo[] {
  const data = filterDataRepos(repos);
  if (data.length > 0) return data.slice(0, limit);
  return repos
    .filter((r) => !r.fork && !r.archived && !r.private)
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .slice(0, limit);
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  SQL: "#E38C00",
  Scala: "#C22D40",
  HCL: "#844FBA",
  Shell: "#89E051",
  Java: "#B07219",
};

export function languageColor(lang: string | null): string {
  if (!lang) return "#6b7280";
  return LANG_COLORS[lang] ?? "#6b7280";
}
