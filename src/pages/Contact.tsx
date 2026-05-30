import { Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { PageHero } from "../components/PageHero";
import { college } from "../lib/content";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Meridian College of Education"
        text="Reach the college for admission details, course options, timing, and visit guidance."
      >
        <div className="rounded-md border border-meridian-line bg-white p-5 shadow-soft">
          <img
            src="/images/meridian-logo.jpeg"
            alt="Meridian College of Education logo"
            className="aspect-[16/10] w-full object-contain"
          />
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-5">
            <ContactItem
              icon={Phone}
              label="Phone"
              title={`+91 ${college.phone}`}
              href={`tel:+91${college.phone}`}
            />
            <ContactItem
              icon={Mail}
              label="Email"
              title={college.email}
              href={`mailto:${college.email}`}
            />
            <ContactItem
              icon={MapPin}
              label="Address"
              title={college.address}
            />
            <div className="rounded-md bg-gradient-to-r from-meridian-primary to-meridian-secondary p-1 shadow-glow">
              <div className="rounded-md bg-white p-6">
                <p className="font-mono text-xs font-bold uppercase text-meridian-primary">
                  Admissions {college.admissionsYear}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-meridian-ink">
                  {college.tagline}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{college.philosophy}</p>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  title,
  href,
}: {
  icon: typeof Phone;
  label: string;
  title: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-md border border-meridian-line bg-white p-6 shadow-soft transition hover:border-meridian-primary/30">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-meridian-mist text-meridian-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs font-bold uppercase text-slate-500">{label}</p>
        <p className="mt-2 break-words text-sm font-bold leading-6 text-meridian-ink">{title}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
