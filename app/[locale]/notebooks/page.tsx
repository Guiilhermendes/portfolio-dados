import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { notebooks } from "@/content/notebooks";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.notebooks.listTitle,
    description: dict.notebooks.listDescription,
  };
}

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

export default async function NotebooksListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <div className="container py-16">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href={`/${l}/#notebooks`}>
          <ArrowLeft className="h-4 w-4" />
          {dict.notebooks.back}
        </Link>
      </Button>

      <header className="mb-10 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {dict.notebooks.eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          {dict.notebooks.listTitle}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {dict.notebooks.listDescription}
        </p>
      </header>

      {notebooks.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card/40 p-10 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            {dict.notebooks.listEmpty}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notebooks.map((nb) => (
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
                  href={`/${l}/notebooks/${nb.slug}`}
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
                  {nb.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-[10px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(nb.date, l)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
