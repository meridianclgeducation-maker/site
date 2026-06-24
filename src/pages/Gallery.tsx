import { PageHero } from "../components/PageHero";
import { galleryImages } from "../lib/content";
import { cn } from "../lib/utils";

export function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Admissions and course material"
        text="Current Meridian College flyers for course streams and admissions information."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <article key={image.src} className="rounded-md border border-meridian-line bg-white p-4 shadow-soft">
              <div
                className={cn(
                  "flex items-center justify-center overflow-hidden rounded-md bg-meridian-mist",
                  image.ratio === "wide" ? "aspect-[16/9]" : "aspect-[3/4]",
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-meridian-ink">{image.title}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
