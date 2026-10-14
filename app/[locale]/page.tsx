import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Notebooks } from "@/components/sections/notebooks";
import { CVDownload } from "@/components/sections/cv-download";
import { Contact } from "@/components/sections/contact";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        "pt-BR": `${site.url}/pt`,
        en: `${site.url}/en`,
        "x-default": `${site.url}/pt`,
      },
    },
    openGraph: {
      locale: dict.meta.locale,
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      url: `${site.url}/${locale}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <Hero locale={l} dict={dict} />
      <About dict={dict} />
      <TechStack dict={dict} />
      <Experience dict={dict} />
      <Projects dict={dict} locale={l} />
      <Notebooks dict={dict} locale={l} />
      <CVDownload dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
