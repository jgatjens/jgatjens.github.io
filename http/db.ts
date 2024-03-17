import { promises as fs } from "fs";

export default async function () {
  const homepageEn = await fs.readFile(process.cwd() + "/http/homepage.en.json", "utf8");
  const homepageEs = await fs.readFile(process.cwd() + "/http/homepage.es.json", "utf8");
  const resumeEn = await fs.readFile(process.cwd() + "/http/resume.en.json", "utf8");
  const resumeEs = await fs.readFile(process.cwd() + "/http/resume.es.json", "utf8");
  const workEn = await fs.readFile(process.cwd() + "/http/work.en.json", "utf8");
  const workEs = await fs.readFile(process.cwd() + "/http/work.es.json", "utf8");

  // console.log(workEn);

  return {
    en: {
      homepage: JSON.parse(homepageEn),
      resume: JSON.parse(resumeEn),
      work: JSON.parse(workEn),
    },
    es: {
      homepage: JSON.parse(homepageEs),
      resume: JSON.parse(resumeEs),
      work: JSON.parse(workEs),
    },
  };
}
