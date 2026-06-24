import { Mail, Phone } from "lucide-react";
import { college } from "../lib/content";
import { AppLink } from "../lib/navigation";

export function ContactCta() {
  return (
    <section className="border-y border-white/10 bg-meridian-ink px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-mono text-xs font-bold uppercase text-white/56">Admissions {college.admissionsYear}</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
            Ready to choose a career-focused course?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
            Speak with Meridian College of Professional Studies for course availability, timings, and admission guidance.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={`tel:+91${college.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-meridian-ink transition hover:bg-blue-50"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +91 {college.phone}
          </a>
          <a
            href={`mailto:${college.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email admissions
          </a>
          <AppLink
            to="/admissions"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-meridian-primary to-meridian-secondary px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:opacity-90"
          >
            View admissions
          </AppLink>
        </div>
      </div>
    </section>
  );
}
