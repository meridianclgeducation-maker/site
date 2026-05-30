import { CalendarCheck, CheckCircle2, PhoneCall } from "lucide-react";
import { ContactCta } from "../components/ContactCta";
import { EnquiryForm } from "../components/EnquiryForm";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { admissionSteps, college } from "../lib/content";

export function Admissions() {
  return (
    <>
      <PageHero
        eyebrow={`Admissions ${college.admissionsYear}`}
        title="Admissions are open for diploma programs"
        text="Full-time and part-time course options are available. Contact the admissions team for course availability, eligibility, and timing."
      >
        <div className="rounded-md border border-meridian-line bg-white p-6 shadow-soft">
          <CalendarCheck className="h-8 w-8 text-meridian-primary" aria-hidden="true" />
          <p className="mt-4 font-display text-3xl font-bold text-meridian-ink">
            {college.admissionsYear}
          </p>
          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
            Call +91 {college.phone} for course availability and admission guidance.
          </p>
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How admission works"
              title="Clear steps for choosing the right course"
              text="The admissions process is designed to help students understand options clearly and select a suitable stream."
            />
            <div className="mt-10 grid gap-5">
              {admissionSteps.map((step, index) => (
                <article key={step.title} className="rounded-md border border-meridian-line bg-white p-6 shadow-soft">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-meridian-primary to-meridian-secondary font-display text-lg font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-meridian-ink">{step.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="border-y border-meridian-line bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Course modes", "Full-time and part-time courses are offered."],
            ["Learning focus", "Courses are designed to develop practical and communication skills."],
            ["Career support", "Students receive guidance on career direction and available opportunities."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-md bg-meridian-mist p-6">
              <CheckCircle2 className="h-6 w-6 text-meridian-success" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-bold text-meridian-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-md bg-meridian-ink p-6 text-white shadow-soft sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase text-white/56">Direct support</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Speak with the admissions team</h2>
          </div>
          <a
            href={`tel:+91${college.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-meridian-ink transition hover:bg-blue-50"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Call +91 {college.phone}
          </a>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
