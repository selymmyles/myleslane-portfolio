export type WorkEntry = {
  slug: string;
  title: string;
  blurb: string;
  year: string;
  role: string;
  status: "live" | "coming-soon";
  href?: string;
};

export const work: WorkEntry[] = [
  {
    slug: "uptown-trolley",
    title: "Uptown Trolley",
    blurb: "A context-aware iOS app for the McKinney Avenue Trolley in Dallas.",
    year: "2026",
    role: "Product Design · 0-to-1",
    status: "coming-soon",
  },
  {
    slug: "bondit",
    title: "Bondit",
    blurb: "A habit-tracking app that uses social bonds to keep friends accountable.",
    year: "2024",
    role: "UX & UI Design · Research",
    status: "live",
    href: "/work/bondit",
  },
  {
    slug: "linkedin",
    title: "Rethinking LinkedIn's filtering",
    blurb: "A redesign of LinkedIn's filters with tagging, custom categories, and a smarter message modal.",
    year: "2024",
    role: "UX & UI Design",
    status: "live",
    href: "/work/linkedin",
  },
];
