export type ExperienceEntry = {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Goldman Sachs",
    title: "Product Designer",
    dates: "Aug 2025 – Present",
    location: "Dallas, TX",
    bullets: [
      "Design internal tools in Figma on the Human Capital Management team, supporting teams across the firm — recruiting, rewards, firm-wide operations.",
      "Partner cross-functionally with PMs, engineers, and stakeholders to translate requirements into shipped designs across multiple concurrent projects, from wireframes through high-fidelity prototypes.",
      "Build interfaces using and extending Goldman's enterprise design system, contributing reusable components and improving information architecture across legacy tools.",
      "Run iterative feedback cycles with stakeholders to modernize legacy tools, from initial briefing through interaction design, prototyping, and review.",
      "Use AI-augmented design tools (Figma Make, generative AI for ideation) in daily workflow to accelerate exploration and prototype generation.",
    ],
  },
  {
    company: "Tiberon Systems",
    title: "Product Designer (Contract)",
    dates: "Feb 2025 – May 2025",
    location: "Houston, TX",
    bullets: [
      "Sole product designer for a responsive CRM built from scratch in Figma for desktop and mobile, owned end-to-end from user flows through high-fidelity prototypes.",
      "Built a comprehensive design system of 20+ reusable components and design tokens, ensuring consistency across platforms.",
      "Partnered autonomously with engineers in an early-stage startup environment, translating technical constraints into shipped UI on aggressive timelines.",
      "Created interactive prototypes for complex user flows, aligning engineering and stakeholders before building.",
    ],
  },
  {
    company: "DSCVR Buildathon",
    title: "UI Designer (Contract)",
    dates: "Sept 2024 – Oct 2024",
    location: "Freelance",
    bullets: [
      "Designed full UI in Figma for Pixel Arena, the 1st-place winning mobile game at the DSCVR Buildathon, partnering with a developer in tight feedback loops to ship a polished build under competition deadline.",
    ],
  },
];
