"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export function Contact({ dict }: { dict: Dictionary }) {
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        throw new Error(json.error ?? dict.contact.form.errorToast);
      }
      toast.success(dict.contact.form.successToast);
      reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : dict.contact.form.errorToast
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      id="contato"
      eyebrow={dict.contact.eyebrow}
      title={dict.contact.title}
      description={dict.contact.description}
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="hidden" aria-hidden>
                <Label htmlFor="website">{dict.contact.form.honeypotLabel}</Label>
                <Input
                  id="website"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contact.form.name}</Label>
                  <Input
                    id="name"
                    placeholder={dict.contact.form.namePlaceholder}
                    autoComplete="name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{dict.contact.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={dict.contact.form.emailPlaceholder}
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{dict.contact.form.subject}</Label>
                <Input
                  id="subject"
                  placeholder={dict.contact.form.subjectPlaceholder}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{dict.contact.form.message}</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder={dict.contact.form.messagePlaceholder}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {dict.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {dict.contact.form.send}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <ContactLink
            href={`mailto:${site.email}`}
            icon={Mail}
            label={dict.contact.channels.email}
            value={site.email}
          />
          <ContactLink
            href={site.linkedin}
            icon={Linkedin}
            label={dict.contact.channels.linkedin}
            value="/in/guilhermemnds"
            external
          />
          <ContactLink
            href={site.github}
            icon={Github}
            label={dict.contact.channels.github}
            value={`/${site.githubUser}`}
            external
          />
          <div className="rounded-xl border border-dashed border-border bg-card/40 p-5 text-sm text-muted-foreground">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {dict.contact.sidebar.locationLabel}
            </p>
            <p className="mt-1">{site.location}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-primary">
              {dict.contact.sidebar.availabilityLabel}
            </p>
            <p className="mt-1">{dict.contact.sidebar.availabilityText}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/60"
    >
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </a>
  );
}
