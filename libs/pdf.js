const puppeteer = require("puppeteer");

const website_url = process.env.VERCEL_URL || "http://localhost:3000/";

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  const page = await browser.newPage();
  // await page.authenticate({ username: "admin", password: "admin" });
  await page.goto(`${website_url}/en/resume`);
  await page.pdf({
    path: "./public/assets/pdf/jgatjens-resume-en.pdf",
    format: "a4",
    printBackground: false,
  });

  const pageES = await browser.newPage();
  // await pageES.authenticate({ username: "admin", password: "admin" });
  await pageES.goto(`${website_url}/es/resume`);
  await pageES.pdf({
    path: "./public/assets/pdf/jgatjens-resume-es.pdf",
    format: "a4",
  });

  await browser.close();
})();
