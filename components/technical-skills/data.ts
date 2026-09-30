import { IconCode, IconDatabase, IconLayers, IconSparkle, IconWindow, IconWrench } from "@/components/icons";
import type { TechBadgeType } from "./tech-badge";

// Verified against http/resume.en.json "summary"/"skills" fields and http/work.en.json tech_stack entries.
export const coreStack: { name: string; badge: TechBadgeType; descriptorKey: string }[] = [
  { name: "React", badge: "react", descriptorKey: "resume_skills_core_react_desc" },
  { name: "Next.js", badge: "nextjs", descriptorKey: "resume_skills_core_nextjs_desc" },
  { name: "TypeScript", badge: "typescript", descriptorKey: "resume_skills_core_typescript_desc" },
  { name: "Node.js", badge: "nodejs", descriptorKey: "resume_skills_core_nodejs_desc" },
  { name: "PostgreSQL", badge: "postgresql", descriptorKey: "resume_skills_core_postgresql_desc" },
  { name: "REST / GraphQL", badge: "graphql", descriptorKey: "resume_skills_core_graphql_desc" },
];

export const expertiseGroups = [
  {
    icon: IconCode,
    titleKey: "resume_skills_group_frontend_title",
    descKey: "resume_skills_group_frontend_desc",
    tags: ["React", "Next.js", "React Native", "Ionic", "Angular", "Redux", "Jotai", "React Query", "SWR", "RxJS"],
  },
  {
    icon: IconDatabase,
    titleKey: "resume_skills_group_backend_title",
    descKey: "resume_skills_group_backend_desc",
    tags: ["Node.js", ".NET", "GraphQL", "REST APIs", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: IconLayers,
    titleKey: "resume_skills_group_architecture_title",
    descKey: "resume_skills_group_architecture_desc",
    tags: ["SSR / SSG", "Server Components", "NextAuth", "i18n", "Sitecore XM Cloud", "Contentful", "Strapi"],
  },
  {
    icon: IconWindow,
    titleKey: "resume_skills_group_design_title",
    descKey: "resume_skills_group_design_desc",
    tags: ["Storybook", "Tailwind CSS", "Radix UI", "Shadcn UI", "Chakra UI", "Styled Components", "Sass / SCSS", "CSS Modules", "BEM", "Less"],
  },
  {
    icon: IconSparkle,
    titleKey: "resume_skills_group_ai_title",
    descKey: "resume_skills_group_ai_desc",
    tags: ["AI integration", "AI-powered applications", "Workflow automation", "AI-assisted development"],
  },
  {
    icon: IconWrench,
    titleKey: "resume_skills_group_tooling_title",
    descKey: "resume_skills_group_tooling_desc",
    tags: ["Vite", "Webpack", "Gulp", "Grunt", "Docker", "WCAG AA", "SEO", "Figma", "Adobe XD", "Sketch", "Photoshop"],
  },
];
