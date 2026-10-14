import { Clock, Download, FileText, Languages } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cvs } from "@/content/cvs";
import type { Dictionary, Locale } from "@/lib/i18n";

function formatDate(iso: string | undefined, locale: Locale): string | null {
  if (!iso) return null;
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

export function CVDownload({ dict }: { dict: Dictionary }) {
  // Infer current locale from dict identity by checking updatedAt format pref;
  // simpler: pass locale via second prop if needed. For now use pt-BR as default
  // since dict labels are already translated.
  const locale: Locale = dict.meta.htmlLang.startsWith("en") ? "en" : "pt";

  return (
    <Section
      id="cv"
      eyebrow={dict.cv.eyebrow}
      title={dict.cv.title}
      description={dict.cv.description}
    >
      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {cvs.map((cv) => {
          const updated = formatDate(cv.updatedAt, locale);
          const label =
            cv.id === "pt" ? dict.cv.labels.pt : dict.cv.labels.en;
          const language =
            cv.id === "pt" ? dict.cv.languageNames.pt : dict.cv.languageNames.en;
          return (
            <Card
              key={cv.id}
              className={
                cv.available
                  ? "group relative overflow-hidden transition-colors hover:border-primary/60"
                  : "relative overflow-hidden opacity-70"
              }
            >
              {cv.available && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              )}
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <FileText className="h-5 w-5" />
                  </span>
                  {cv.available ? (
                    <Badge variant="default">{dict.cv.available}</Badge>
                  ) : (
                    <Badge variant="muted">{dict.cv.comingSoon}</Badge>
                  )}
                </div>

                <div>
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <Languages className="h-3.5 w-3.5" />
                    {language}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{label}</h3>
                </div>

                {updated && cv.available && (
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {dict.cv.updatedAt} {updated}
                  </p>
                )}

                {cv.available && cv.file ? (
                  <div className="flex flex-wrap gap-2">
                    <Button asChild>
                      <a href={cv.file} download>
                        <Download className="h-4 w-4" />
                        {dict.cv.download}
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={cv.file} target="_blank" rel="noreferrer noopener">
                        {dict.cv.view}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <Button disabled variant="outline">
                    <Download className="h-4 w-4" />
                    {dict.cv.comingSoonButton}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
