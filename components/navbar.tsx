"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Database, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: `/${locale}#sobre`, label: dict.nav.about },
    { href: `/${locale}#stack`, label: dict.nav.stack },
    { href: `/${locale}#experiencia`, label: dict.nav.experience },
    { href: `/${locale}#projetos`, label: dict.nav.projects },
    { href: `/${locale}#notebooks`, label: dict.nav.notebooks },
    { href: `/${locale}#certificados`, label: dict.nav.certificates },
    { href: `/${locale}#cv`, label: dict.nav.cv },
    { href: `/${locale}#contato`, label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent backdrop-blur transition-colors",
        scrolled && "border-border bg-background/80"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <Database className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            / data
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle currentLocale={locale} variant="compact" />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a
              href={site.fullStackPortfolio}
              target="_blank"
              rel="noreferrer noopener"
            >
              {dict.nav.fullStackCta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={dict.nav.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.fullStackPortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-primary hover:bg-secondary"
            >
              {dict.footer.viewFullStack}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
