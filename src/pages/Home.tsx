import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactCta } from "../components/ContactCta";
import { CourseCard } from "../components/CourseCard";
import { SectionHeading } from "../components/SectionHeading";
import { college, courses } from "../lib/content";
import { AppLink } from "../lib/navigation";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-meridian-line bg-white">
        <div className="absolute inset-0 bg-grid-soft opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-meridian-primary/15 bg-meridian-violet px-3 py-2 text-sm font-bold text-meridian-primary">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Admissions open for {college.admissionsYear}
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight text-meridian-ink sm:text-5xl lg:text-6xl">
              {college.name}
            </h1>
            <p className="mt-5 text-balance font-display text-2xl font-bold text-meridian-primary sm:text-3xl">
              {college.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Diploma programs for students who want usable skills, clear guidance, and career-ready training
              across hospitality, aviation, healthcare support, computers, safety, beauty, and communication.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppLink
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-meridian-primary px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-meridian-secondary"
              >
                Start admission enquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
              <a
                href={`tel:+91${college.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-meridian-line bg-white px-5 py-3 text-sm font-bold text-meridian-ink shadow-soft transition hover:border-meridian-primary/40 hover:text-meridian-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call +91 {college.phone}
              </a>
            </div>
            <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["Estd", college.established],
                ["Streams", `${courses.length}`],
                ["Focus", "Practical learning"],
              ].map(([label, value]) => (
                <div key={label} className="border-l-2 border-meridian-primary bg-slate-50 px-4 py-3">
                  <dt className="font-mono text-xs font-bold uppercase text-slate-500">{label}</dt>
                  <dd className="mt-1 font-display text-xl font-bold text-meridian-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-md border border-meridian-line bg-white p-4 shadow-card">
              <div className="rounded-md border border-meridian-primary/15 bg-meridian-violet p-5">
                <p className="font-mono text-xs font-bold uppercase text-meridian-primary">
                  Admissions desk
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-meridian-ink">
                  Choose a stream, confirm details, and begin practical training.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The admissions team can help students compare available diploma streams,
                  understand timing, and select a course that fits their goals.
                </p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {courses.slice(0, 6).map((course) => (
                  <div key={course.title} className="flex items-center gap-3 rounded-md border border-meridian-line bg-slate-50 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-meridian-success" aria-hidden="true" />
                    <span className="text-sm font-bold text-meridian-ink">{course.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-meridian-line bg-white px-4 py-3 shadow-soft">
                <p className="font-mono text-xs font-bold uppercase text-slate-500">Location</p>
                <p className="mt-1 text-sm font-bold leading-6 text-meridian-ink">{college.address}</p>
              </div>
              <div className="rounded-md border border-meridian-line bg-white px-4 py-3 shadow-soft">
                <p className="font-mono text-xs font-bold uppercase text-slate-500">Placement</p>
                <p className="mt-1 text-sm font-bold leading-6 text-meridian-ink">{college.placementPromise}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Career pathways"
              title="Course streams with practical outcomes"
              text="Each stream is organized around employable skills, clear course options, and student support during admission."
            />
            <AppLink
              to="/courses"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-meridian-line bg-white px-5 py-3 text-sm font-bold text-meridian-ink shadow-soft transition hover:border-meridian-primary/40 hover:text-meridian-primary"
            >
              View all courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {courses.slice(0, 4).map((course) => (
              <CourseCard key={course.title} course={course} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-meridian-line bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="overflow-hidden rounded-md border border-meridian-line bg-meridian-mist shadow-card">
            <img
              src="/images/meridian-logo.jpeg"
              alt="Meridian College of Education logo"
              className="aspect-[16/11] w-full object-contain p-8 sm:p-10"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="A practical foundation for confident learners"
              text={college.philosophy}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {college.academicPrinciples.map((principle) => (
                <div key={principle} className="rounded-md border border-meridian-line bg-white p-5">
                  <CheckCircle2 className="h-5 w-5 text-meridian-success" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold leading-6 text-meridian-ink">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <FeatureCard icon={Award} title="Key of success" text={college.keyOfSuccess} />
          <FeatureCard
            icon={BookOpen}
            title="Learning values"
            text="Innovative learning, ethical knowledge, practical application, and confidence-building student support."
          />
          <FeatureCard icon={MapPin} title="Location" text={college.address} />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Award;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-md border border-meridian-line bg-white p-6 shadow-card">
      <Icon className="h-7 w-7 text-meridian-primary" aria-hidden="true" />
      <h2 className="mt-4 font-display text-2xl font-bold text-meridian-ink">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}
