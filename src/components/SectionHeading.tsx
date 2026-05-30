import { type ReactNode } from "react";
import { cn } from "../lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-bold uppercase text-meridian-primary">
          {eyebrow}
        </p>
      ) : null}
      <div className={cn("mb-5 h-1 w-14 rounded-sm brand-gradient", align === "center" && "mx-auto")} />
      <h2 className="text-balance font-display text-3xl font-bold leading-tight text-meridian-ink sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
