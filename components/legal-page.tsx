import Link from "next/link";
import { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updatedAt?: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  updatedAt = "August 24, 2026",
  children,
}: LegalPageProps) {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <article className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-10">
          <Link
            href="/"
            className="mb-8 inline-flex text-sm font-medium text-primary transition-colors hover:underline"
          >
            ← Back to Codisim
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updatedAt}</p>
          <div className="mt-10 space-y-8 text-base leading-7 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:sm:text-2xl [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </article>
    </section>
  );
}
