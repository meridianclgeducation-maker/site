export type Accent = "primary" | "success" | "warning" | "danger";

export type CourseIcon =
  | "hotel"
  | "aviation"
  | "fire"
  | "health"
  | "beauty"
  | "computer"
  | "language"
  | "chef";

export type CourseCategory = {
  title: string;
  icon: CourseIcon;
  accent: Accent;
  summary: string;
  programs: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  ratio: "wide" | "portrait";
};

export const college = {
  name: "Meridian College of Professional Studies",
  tagline: "Be educated. Be empowered.",
  philosophy:
    "Education should build knowledge, practical skill, confidence, and the discipline to keep learning.",
  academicPrinciples: [
    "Student-centred teaching",
    "Ethical and responsible learning",
    "Practical skill application",
  ],
  keyOfSuccess:
    "Resilience: the ability to learn from setbacks, recover well, and continue with confidence.",
  address: "Choozhal, Adaikkakuzhi (P.O), Kanyakumari - 629153",
  email: "meridianclgeducation@gmail.com",
  phone: "9363201093",
  established: "2026",
  admissionsYear: "2026 - 2027",
  placementPromise: "Placement guidance and career support",
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Admissions", path: "/admissions" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
] as const;

export const courses: CourseCategory[] = [
  {
    title: "Hotel Management",
    icon: "hotel",
    accent: "success",
    summary: "Training for hospitality operations, guest service, tourism, bakery, and food production.",
    programs: [
      "Diploma in Hotel Mgt & Tourism",
      "Diploma in Int'l Housekeeping",
      "Diploma in Tourism Administration",
      "Diploma in Bakery & Confectionery",
      "Diploma in Food Production",
    ],
  },
  {
    title: "Aviation Courses",
    icon: "aviation",
    accent: "primary",
    summary: "Career preparation for airline, airport, cabin crew, and travel service roles.",
    programs: [
      "Diploma in Int'l Airline Travel Mgt",
      "Diploma in Airport Management",
      "Diploma in Cabin Crew Management",
      "Diploma in Airline Management",
    ],
  },
  {
    title: "Fire & Safety",
    icon: "fire",
    accent: "danger",
    summary: "Safety-focused training for fire service and technical response roles.",
    programs: ["Diploma in Fire & Safety Course", "Diploma in Fire Technician"],
  },
  {
    title: "Health Education",
    icon: "health",
    accent: "success",
    summary: "Foundational healthcare support training for laboratory and health inspector roles.",
    programs: [
      "Diploma in Medical Lab Technology",
      "Medical Laboratory Technician",
      "Diploma in Health Inspector",
    ],
  },
  {
    title: "Beauty Courses",
    icon: "beauty",
    accent: "warning",
    summary: "Professional grooming, bridal, beauty, mehendi, and parlour management training.",
    programs: [
      "Diploma in Cosmetology & Beauty Parlour Management",
      "Beauty Technician",
      "Grooming & Bridal Makeup",
      "Henna Making & Mehandi Application",
    ],
  },
  {
    title: "Computer Courses",
    icon: "computer",
    accent: "primary",
    summary: "Computer applications, hardware maintenance, office tools, design software, and coding.",
    programs: [
      "Post Diploma in Hardware Maint.",
      "Post Diploma in Computer App (PGDCA)",
      "Certificate in AutoCAD / C++",
      "MS Office / Adobe Photoshop",
      "Tally / Dot Net",
    ],
  },
  {
    title: "Communicative Skills & Languages",
    icon: "language",
    accent: "success",
    summary: "Communication, language, personality development, and entrepreneurship skills.",
    programs: [
      "Spoken English & Certificate in English/Hindi",
      "Diploma in Personality Development",
      "Diploma in Entrepreneurship Trainer",
    ],
  },
  {
    title: "Airhostess & Chef",
    icon: "chef",
    accent: "warning",
    summary: "Focused preparation for airhostess and chef career tracks.",
    programs: ["Diploma in Airhostess Training", "Diploma in Chef Training"],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/meridian-course-flyer-red.jpeg",
    alt: "Meridian College course flyer with red background and course list",
    title: "Course flyer",
    ratio: "portrait",
  },
  {
    src: "/images/meridian-course-flyer-cream.jpeg",
    alt: "Meridian College admissions flyer with cream background and course list",
    title: "Admissions flyer",
    ratio: "portrait",
  },
];

export const admissionSteps = [
  {
    title: "Choose a course stream",
    text: "Review the available diploma streams and shortlist the course that matches the student's goals.",
  },
  {
    title: "Speak with admissions",
    text: "Call or email the admissions team to confirm eligibility, timing, and current seat availability.",
  },
  {
    title: "Start practical learning",
    text: "Complete the admission process and begin practical, student-centred learning.",
  },
];
