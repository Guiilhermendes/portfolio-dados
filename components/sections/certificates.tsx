import {
  Award,
  Calendar,
  Clock,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/content/certificates";
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

export function Certificates({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <Section
      id="certificados"
      eyebrow={dict.certificates.eyebrow}
      title={dict.certificates.title}
      description={dict.certificates.description}
    >
      {certificates.length === 0 ? (
        <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
          <Award className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            {dict.certificates.empty}
          </p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group relative overflow-hidden transition-colors hover:border-primary/50"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <Badge variant="secondary" className="font-mono text-[10px]">
                    {cert.issuer}
                  </Badge>
                </div>

                <div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-lg font-semibold leading-snug transition-colors group-hover:text-primary"
                  >
                    {cert.title[locale]}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {cert.description[locale]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(cert.date, locale)}
                  </span>
                  {cert.hours && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {cert.hours}
                    </span>
                  )}
                  {cert.instructor && (
                    <span className="font-mono">
                      {dict.certificates.instructor}: {cert.instructor}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-[10px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {cert.credentialId && (
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {dict.certificates.credentialId}: {cert.credentialId}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild size="sm">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {dict.certificates.viewOnline}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
