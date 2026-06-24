import { Award, BookOpenCheck, Compass, RefreshCw } from "lucide-react";
import { ContactCta } from "../components/ContactCta";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { college } from "../lib/content";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About the college"
        title="Practical education with a clear student focus"
        text="Meridian College of Professional Studies supports students with career-oriented diploma courses, practical training, and guidance throughout the admission process."
      >
        <div className="rounded-md border border-meridian-line bg-white p-5 shadow-soft">
          <img
            src="/images/meridian-logo.jpeg"
            alt="Meridian College of Professional Studies logo"
            className="aspect-[16/10] w-full object-contain"
          />
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            eyebrow="Philosophy"
            title={college.tagline}
            text={college.philosophy}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ValueCard
              icon={Compass}
              title="Relevant learning"
              text="Courses are aligned with practical skills and the expectations of current service industries."
            />
            <ValueCard
              icon={BookOpenCheck}
              title="Responsible knowledge"
              text="Students are encouraged to learn with discipline, values, and professional responsibility."
            />
            <ValueCard
              icon={Award}
              title="Practical application"
              text="The focus is on skills students can understand, practise, and apply with confidence."
            />
            <ValueCard
              icon={RefreshCw}
              title="Resilience"
              text={college.keyOfSuccess}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-meridian-line bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Academic principles"
            title="Simple principles for steady progress"
            text="The academic approach balances skill development, values, communication, and career preparation."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {college.academicPrinciples.map((principle, index) => (
              <div key={principle} className="rounded-md border border-meridian-line bg-meridian-mist p-6">
                <p className="font-mono text-xs font-bold uppercase text-meridian-primary">
                  Principle {index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-meridian-ink">{principle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto rounded-md bg-gradient-to-r from-meridian-primary to-meridian-secondary p-1 shadow-glow max-w-7xl">
          <div className="grid gap-8 rounded-md bg-white p-6 md:grid-cols-3 md:p-8">
            <Stat label="Established" value={college.established} />
            <Stat label="Admissions" value={college.admissionsYear} />
            <Stat label="Focus" value="Practical learning" />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Compass;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-md border border-meridian-line bg-white p-6 shadow-soft">
      <Icon className="h-7 w-7 text-meridian-primary" aria-hidden="true" />
      <h3 className="mt-4 font-display text-2xl font-bold text-meridian-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs font-bold uppercase text-meridian-primary">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-meridian-ink">{value}</p>
    </div>
  );
}
