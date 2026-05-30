import { ContactCta } from "../components/ContactCta";
import { CourseCard } from "../components/CourseCard";
import { PageHero } from "../components/PageHero";
import { college, courses } from "../lib/content";

export function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses offered"
        title="Diploma streams for career-ready skills"
        text="Choose from hospitality, aviation, fire and safety, healthcare support, beauty, computers, communication, airhostess, and chef training."
      >
        <div className="rounded-md border border-meridian-line bg-white p-6 shadow-soft">
          <p className="font-mono text-xs font-bold uppercase text-meridian-primary">Career support</p>
          <p className="mt-3 font-display text-3xl font-bold">{college.placementPromise}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Student-centred learning with practical application at the centre of every stream.
          </p>
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
