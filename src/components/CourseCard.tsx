import {
  ChefHat,
  Flame,
  HeartPulse,
  Hotel,
  Languages,
  Monitor,
  Plane,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import { type CourseCategory, type CourseIcon } from "../lib/content";
import { AppLink } from "../lib/navigation";
import { cn } from "../lib/utils";

const icons: Record<CourseIcon, LucideIcon> = {
  hotel: Hotel,
  aviation: Plane,
  fire: Flame,
  health: HeartPulse,
  beauty: Scissors,
  computer: Monitor,
  language: Languages,
  chef: ChefHat,
};

const accentClasses = {
  primary: {
    shell: "border-meridian-primary/15",
    icon: "bg-meridian-violet text-meridian-primary border-meridian-primary/15",
    marker: "bg-meridian-primary",
    line: "from-meridian-primary to-meridian-secondary",
  },
  success: {
    shell: "border-meridian-success/15",
    icon: "bg-emerald-50 text-meridian-success border-meridian-success/15",
    marker: "bg-meridian-success",
    line: "from-meridian-success to-emerald-300",
  },
  warning: {
    shell: "border-meridian-warning/20",
    icon: "bg-amber-50 text-meridian-warning border-meridian-warning/20",
    marker: "bg-meridian-warning",
    line: "from-meridian-warning to-amber-300",
  },
  danger: {
    shell: "border-meridian-danger/15",
    icon: "bg-red-50 text-meridian-danger border-meridian-danger/15",
    marker: "bg-meridian-danger",
    line: "from-meridian-danger to-rose-300",
  },
};

export function CourseCard({ course, compact = false }: { course: CourseCategory; compact?: boolean }) {
  const Icon = icons[course.icon];
  const accent = accentClasses[course.accent];

  return (
    <article className={cn("group overflow-hidden rounded-md border bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift", accent.shell)}>
      <div className={cn("h-1 bg-gradient-to-r", accent.line)} />
      <div className="p-5">
      <div className="flex items-start gap-4">
        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-md border", accent.icon)}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-balance font-display text-xl font-bold leading-snug text-meridian-ink">{course.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{course.summary}</p>
        </div>
      </div>

      {!compact ? (
        <ul className="mt-5 grid gap-3 text-sm text-slate-700">
          {course.programs.map((program) => (
            <li key={program} className="flex gap-3 leading-6">
              <span className={cn("mt-2 h-2 w-2 shrink-0 rounded-full", accent.marker)} />
              <span>{program}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {compact ? (
        <p className="mt-5 font-mono text-xs font-bold uppercase text-slate-500">
          {course.programs.length} programs
        </p>
      ) : (
        <AppLink
          to="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-meridian-ink transition hover:border-meridian-primary/40 hover:text-meridian-primary"
        >
          Ask about this course
        </AppLink>
      )}
      </div>
    </article>
  );
}
