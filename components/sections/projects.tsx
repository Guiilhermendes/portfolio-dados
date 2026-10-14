import { ArrowUpRight, GitFork, Star } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  fetchRepos,
  languageColor,
  pickDisplayRepos,
  type GitHubRepo,
} from "@/lib/github";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

function formatDate(iso: string, locale: Locale): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export async function Projects({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const repos = await fetchRepos();
  const list = pickDisplayRepos(repos, 6);

  return (
    <Section
      id="projetos"
      eyebrow={dict.projects.eyebrow}
      title={dict.projects.title}
      description={dict.projects.description}
    >
      {list.length === 0 ? (
        <EmptyState dict={dict} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((repo) => (
            <RepoCard key={repo.id} repo={repo} locale={locale} />
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <a href={site.github} target="_blank" rel="noreferrer noopener">
            {dict.projects.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </Section>
  );
}

function RepoCard({ repo, locale }: { repo: GitHubRepo; locale: Locale }) {
  return (
    <Card className="group flex h-full flex-col transition-colors hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-base font-medium text-foreground transition-colors group-hover:text-primary"
          >
            {repo.name}
          </a>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        {repo.description && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {repo.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="mt-auto space-y-3 pt-0">
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 4).map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="font-mono text-[10px]"
              >
                {t}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: languageColor(repo.language) }}
                />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              {repo.forks_count}
            </span>
          </div>
          <span className="font-mono">{formatDate(repo.pushed_at, locale)}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({ dict }: { dict: Dictionary }) {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
      <p className="text-sm text-muted-foreground">
        {dict.projects.empty}{" "}
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary underline-offset-4 hover:underline"
        >
          github.com/{site.githubUser}
        </a>
        .
      </p>
    </div>
  );
}
