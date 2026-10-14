import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-border bg-background/40">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {dict.meta.role}
          </p>
          <p className="text-sm text-foreground">
            {site.shortName} · {site.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label={dict.contact.channels.email}
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.shortName}. {dict.footer.builtWith}{" "}
          <Link
            href={site.fullStackPortfolio}
            target="_blank"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {dict.footer.viewFullStack}
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
