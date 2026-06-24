import { college, courses, navigation } from "./content";

type SeoRoute = {
  title: string;
  description: string;
  image?: string;
};

const defaultImage = "/images/meridian-logo.jpeg";

export const seoRoutes: Record<string, SeoRoute> = {
  "/": {
    title: "Meridian College of Professional Studies | Diploma Courses in Kanyakumari",
    description:
      "Meridian College of Professional Studies offers practical diploma courses in hospitality, aviation, health education, fire and safety, computers, beauty, and communication.",
  },
  "/about": {
    title: "About Meridian College of Professional Studies | Practical Learning",
    description:
      "Learn about Meridian College of Professional Studies, its student-centred approach, practical training focus, academic principles, and education philosophy.",
  },
  "/courses": {
    title: "Diploma Courses | Meridian College of Professional Studies",
    description:
      "Explore diploma streams in hotel management, aviation, fire and safety, health education, beauty, computers, communication, airhostess, and chef training.",
  },
  "/admissions": {
    title: "Admissions 2026 - 2027 | Meridian College of Professional Studies",
    description:
      "Admissions are open for full-time and part-time diploma programs at Meridian College of Professional Studies. Contact the admissions team for course details.",
  },
  "/gallery": {
    title: "Gallery | Meridian College of Professional Studies",
    description:
      "View admissions and course material from Meridian College of Professional Studies in Kanyakumari.",
    image: "/images/meridian-course-flyer-cream.jpeg",
  },
  "/contact": {
    title: "Contact Meridian College of Professional Studies | Kanyakumari",
    description:
      "Contact Meridian College of Professional Studies for admissions, course details, timing, and visit guidance. Call +91 9363201093 or email meridianclgeducation@gmail.com.",
  },
};

function ensureMeta(selector: string, create: () => HTMLMetaElement) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) {
    return existing;
  }

  const element = create();
  document.head.appendChild(element);
  return element;
}

function setMetaName(name: string, content: string) {
  const element = ensureMeta(`meta[name="${name}"]`, () => {
    const meta = document.createElement("meta");
    meta.name = name;
    return meta;
  });
  element.content = content;
}

function setMetaProperty(property: string, content: string) {
  const element = ensureMeta(`meta[property="${property}"]`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", property);
    return meta;
  });
  element.content = content;
}

function ensureLink(rel: string) {
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (existing) {
    return existing;
  }

  const link = document.createElement("link");
  link.rel = rel;
  document.head.appendChild(link);
  return link;
}

function absoluteUrl(path: string) {
  return new URL(path, window.location.origin).toString();
}

function buildStructuredData(canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: college.name,
    url: canonicalUrl,
    logo: absoluteUrl(defaultImage),
    description: seoRoutes["/"].description,
    foundingDate: college.established,
    email: college.email,
    telephone: `+91${college.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Choozhal, Adaikkakuzhi (P.O)",
      addressLocality: "Kanyakumari",
      postalCode: "629153",
      addressCountry: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diploma course streams",
      itemListElement: courses.map((course) => ({
        "@type": "Course",
        name: course.title,
        description: course.summary,
        provider: {
          "@type": "CollegeOrUniversity",
          name: college.name,
        },
      })),
    },
  };
}

export function applySeo(path: string) {
  const routeSeo = seoRoutes[path as keyof typeof seoRoutes] ?? seoRoutes["/"];
  const canonicalUrl = absoluteUrl(path === "/" ? "/" : path);
  const imageUrl = absoluteUrl(routeSeo.image ?? defaultImage);

  document.title = routeSeo.title;
  setMetaName("description", routeSeo.description);
  setMetaName(
    "keywords",
    [
      college.name,
      "diploma courses Kanyakumari",
      "hotel management course",
      "aviation course",
      "fire and safety course",
      "health education course",
      "computer course",
      "beauty course",
    ].join(", "),
  );
  setMetaName("robots", "index, follow");
  setMetaName("author", college.name);
  setMetaName("theme-color", "#3B82F6");

  ensureLink("canonical").href = canonicalUrl;

  setMetaProperty("og:type", "website");
  setMetaProperty("og:site_name", college.name);
  setMetaProperty("og:title", routeSeo.title);
  setMetaProperty("og:description", routeSeo.description);
  setMetaProperty("og:url", canonicalUrl);
  setMetaProperty("og:image", imageUrl);
  setMetaProperty("og:locale", "en_IN");

  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", routeSeo.title);
  setMetaName("twitter:description", routeSeo.description);
  setMetaName("twitter:image", imageUrl);

  const structuredDataId = "meridian-structured-data";
  const structuredData =
    document.head.querySelector<HTMLScriptElement>(`#${structuredDataId}`) ??
    document.createElement("script");

  structuredData.id = structuredDataId;
  structuredData.type = "application/ld+json";
  structuredData.textContent = JSON.stringify(buildStructuredData(canonicalUrl));

  if (!structuredData.parentElement) {
    document.head.appendChild(structuredData);
  }
}

export function getSitemapPaths() {
  return navigation.map((item) => item.path);
}
