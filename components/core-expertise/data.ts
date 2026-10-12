import { IconCode, IconDatabase, IconLayers, IconSparkle } from "@/components/icons";

// Technologies verified against the resume and project descriptions.
export const coreExpertiseGroups = [
  {
    icon: IconDatabase,
    titleKey: "resume_expertise_fullstack",
    tags: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "FastAPI"],
  },
  {
    icon: IconCode,
    titleKey: "resume_expertise_frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Ionic"],
  },
  {
    icon: IconLayers,
    titleKey: "resume_expertise_architecture",
    tags: ["Next.js", "Sitecore", "Contentful", "AWS", "Vercel", "Docker"],
  },
  {
    icon: IconSparkle,
    titleKey: "resume_expertise_ai",
    tags: ["Codex", "ChatGPT", "GitHub Copilot"],
  },
];
