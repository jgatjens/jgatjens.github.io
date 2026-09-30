import { IconCode, IconDatabase, IconLayers, IconSparkle } from "@/components/icons";

// Tags are proper nouns/terms verified against http/resume.en.json "skills" field.
export const coreExpertiseGroups = [
  {
    icon: IconCode,
    titleKey: "resume_expertise_frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Ionic"],
  },
  {
    icon: IconDatabase,
    titleKey: "resume_expertise_fullstack",
    tags: ["Node.js", "APIs", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: IconLayers,
    titleKey: "resume_expertise_architecture",
    tags: ["Scalable UI", "Design systems", "SSR/SSG", "Headless platforms"],
  },
  {
    icon: IconSparkle,
    titleKey: "resume_expertise_ai",
    tags: ["AI integration", "AI-powered applications"],
  },
];
