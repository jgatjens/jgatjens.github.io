import { promises as fs } from "fs";
import path from "path";

const STRAPI_URL = process.env.API_URL || "http://localhost:1337/api";

interface PageConfig {
  name: string;
  populate: string;
}



const pages: PageConfig[] = [
  { name: "homepage", populate: "homepage?populate[0]=profile.media&populate[1]=hire_me&populate[2]=open_graph.media" },
  { name: "resume", populate: "resume?populate[0]=history&populate[1]=open_graph.media" },
  { name: "work", populate: "work?populate[0]=items&populate[1]=items.media&populate[2]=items.categories&populate[3]=open_graph.media" },
];

const locales = ["en", "es"];

async function fetchAndSaveData() {
  console.log("🔄 Starting data sync from API...\n");

  for (const page of pages) {
    for (const locale of locales) {
      try {
        const separator = page.populate.includes('?') ? '&' : '?';
        const url = `${STRAPI_URL}/${page.populate}${separator}locale=${locale}`;
        console.log(`📡 Fetching ${page.name} (${locale})...`, url);

        const response = await fetch(url);

        if (!response.ok) {
          console.error(`❌ Failed to fetch ${page.name} (${locale}): ${response.statusText}`);
          continue;
        }

        const data = await response.json();

        const fileName = `${page.name}.${locale}.json`;
        const filePath = path.join(process.cwd(), "http", fileName);

        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        console.log(`✅ Saved ${fileName}\n`);
      } catch (error) {
        console.error(`❌ Error fetching ${page.name} (${locale}):`, error);
        console.log();
      }
    }
  }

  console.log("✨ Data sync complete!");
}

fetchAndSaveData().catch(console.error);
