import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-meridian-line bg-white">
      <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="inline-flex rounded-sm border border-meridian-primary/15 bg-meridian-violet px-3 py-2 font-mono text-xs font-bold uppercase text-meridian-primary">
          {eyebrow}
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-center">
          <div>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight text-meridian-ink sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
          </div>
          {children ? <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
