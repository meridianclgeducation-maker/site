import { Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { PageHero } from "../components/PageHero";
import { college } from "../lib/content";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Meridian College of Professional Studies"
        text="Reach the college for admission details, course options, timing, and visit guidance."
      >
        <div className="rounded-md border border-meridian-line bg-white p-5 shadow-soft">
          <img
            src="/images/meridian-logo.jpeg"
            alt="Meridian College of Professional Studies logo"
            className="aspect-[16/10] w-full object-contain"
          />
        </div>
      </PageHero>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.9066322945323!2d77.12497257501057!3d8.312076991723394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTgnNDMuNSJOIDc3wrAwNyczOS4yIkU!5e0!3m2!1sen!2sin!4v1781107469676!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-5">
            <ContactItem icon={Phone} label="Phone" title={`+91 ${college.phone}`} href={`tel:+91${college.phone}`} />
            <ContactItem icon={Mail} label="Email" title={college.email} href={`mailto:${college.email}`} />
            <ContactItem icon={MapPin} label="Address" title={college.address} />
            <div className="rounded-md bg-gradient-to-r from-meridian-primary to-meridian-secondary p-1 shadow-glow">
              <div className="rounded-md bg-white p-6">
                <p className="font-mono text-xs font-bold uppercase text-meridian-primary">Admissions {college.admissionsYear}</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-meridian-ink">{college.tagline}</h2>
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

function ContactItem({ icon: Icon, label, title, href }: { icon: typeof Phone; label: string; title: string; href?: string }) {
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
