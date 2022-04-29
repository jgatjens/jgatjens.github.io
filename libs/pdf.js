const puppeteer = require("puppeteer");

const strapi_url = process.env.VERCEL_URL || "http://localhost:3000/";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.authenticate({ username: "admin", password: "admin" });
  await page.goto(`${strapi_url}/resume`);
  await page.pdf({
    path: "./public/assets/pdf/jgatjens-resume-en.pdf",
    format: "a4",
  });

  const pageES = await browser.newPage();
  await pageES.authenticate({ username: "admin", password: "admin" });
  await pageES.goto(`${strapi_url}/es/resume`);
  await pageES.pdf({
    path: "./public/assets/pdf/jgatjens-resume-es.pdf",
    format: "a4",
  });

  await browser.close();
})();
