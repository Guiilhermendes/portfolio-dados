import Link from "next/link";
import { ArrowUpRight, BookOpen, Calendar } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { notebooks } from "@/content/notebooks";
import type { Dictionary, Locale } from "@/lib/i18n";

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Date(iso).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function Notebooks({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const list = notebooks.slice(0, 6);
  return (
    <Section
      id="notebooks"
      eyebrow={dict.notebooks.eyebrow}
      title={dict.notebooks.title}
      description={dict.notebooks.description}
    >
      {list.length === 0 ? (
        <EmptyState dict={dict} />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((nb) => (
              <Card
                key={nb.slug}
                className="group flex h-full flex-col transition-colors hover:border-primary/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    {nb.platform && (
                      <Badge variant="muted" className="font-mono text-[10px]">
                        {nb.platform}
                      </Badge>
                    )}
                  </div>
                  <Link
                    href={`/${locale}/notebooks/${nb.slug}`}
                    className="mt-3 block text-lg font-semibold leading-tight transition-colors group-hover:text-primary"
                  >
                    {nb.title}
                  </Link>
                </CardHeader>
                <CardContent className="mt-auto space-y-3 pt-0">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {nb.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {nb.tags.slice(0, 4).map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="font-mono text-[10px]"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(nb.date, locale)}
                    </span>
                    <Link
                      href={`/${locale}/notebooks/${nb.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {dict.notebooks.openButton}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {notebooks.length > 6 && (
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/notebooks`}>
                  {dict.notebooks.viewAll} ({notebooks.length})
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </>
      )}
    </Section>
  );
}

function EmptyState({ dict }: { dict: Dictionary }) {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
      <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
      <p className="mt-3 text-sm text-muted-foreground">{dict.notebooks.empty}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {dict.notebooks.emptyHint}{" "}
        <code className="rounded bg-muted px-1.5 py-0.5">public/notebooks/</code>{" "}
        {dict.notebooks.emptyHint2}{" "}
        <code className="rounded bg-muted px-1.5 py-0.5">
          content/notebooks.ts
        </code>
      </p>
    </div>
  );
}
