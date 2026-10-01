// Curated overlay for CMS `history` entries (indexed the same order the CMS/local db returns them: most recent first).
// CMS only stores prose bullets, so display name, tech tags and related-work links are hand-verified here
// against http/resume.en.json and http/work.en.json — no technology or link is invented.
export interface JobCuration {
  displayName?: string;
  techTags: string[];
  relatedWork?: { label: string; slug: string }[];
  summaryKey: string;
}

export const jobCurations: JobCuration[] = [
  {
    // zondahome — Senior Software Engineer
    displayName: "ZondaHome",
    techTags: ["C#", "Redux", "RxJS", ".NET", "AI", "Copilot", "Claude"],
    relatedWork: [
      { label: "Search Home Builders", slug: "newhomesource" },
    ],
    summaryKey: "work_history_summary_0",
  },
  {
    // mergeworld.com — Full-Stack Engineer
    displayName: "Merge",
    techTags: ["React", "Next.js", "Storybook", "Node.js", "XM Cloud", "Ionic"],
    relatedWork: [
      { label: "Elanco Hub", slug: "elancohub" },
      { label: "Interwell Health", slug: "interwellhealth" },
      { label: "Raid Health", slug: "raidhelth" },
    ],
    summaryKey: "work_history_summary_1",
  },
  {
    // hangarworldwide.com — Lead Frontend Engineer (2020-2021)
    displayName: "Criticalmass",
    techTags: ["Angular", "Storybook", "JavaScript", "Figma"],
    relatedWork: [
      { label: "NI - Solutions from Emerson", slug: "ni" },
      { label: "Organic - Crazy chicken", slug: "organic" }
    ],
    summaryKey: "work_history_summary_2",
  },
  {
    // 18techs.com — Full-Stack Engineer
    displayName: "18Techs",
    techTags: ["React Native", "React", "Angular", "Node.js", "Express.js", "D3"],
    relatedWork: [
      { label: "OR Turnover Tracker App", slug: "ortracker-app" },
      { label: "Land O Frost", slug: "landofrost" },
    ],
    summaryKey: "work_history_summary_3",
  },
  {
    // hangarworldwide.com — Lead Frontend Engineer (2009-2016)
    displayName: "Criticalmass",
    techTags: ["SPA", "Wordpress", "PHP", "Drupal", "Jekyll", "Webpack"],
    relatedWork: [
      { label: "ArmorAll Redesign", slug: "armorall" },
      { label: "Hangar Careers", slug: "hangar-careers" },
      { label: "CafeBritt - Welcome", slug: "cafebritt" },
      { label: "STP", slug: "stp" },
      { label: "Criticalmass - The Beginning", slug: "criticalmass" }
    ],
    summaryKey: "work_history_summary_4",
  },
  {
    // Organizational Consulting Group S.A. — Programmer
    techTags: ["Visual Basic 6.0", "C#"],
    summaryKey: "work_history_summary_5",
  },
  {
    // coopecorl.com — IT / Software developer
    displayName: "Coopecorl",
    techTags: ["Java", "JSP", "Oracle"],
    summaryKey: "work_history_summary_6",
  },
];
