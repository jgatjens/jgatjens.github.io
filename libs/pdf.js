const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  // launch a new chrome instance
  const browser = await puppeteer.launch({
    headless: true,
  });

  // create a new page
  const page = await browser.newPage();
  const html = fs.readFileSync(`./dist/resume/index.html`, "utf8");
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.pdf({
    format: "A4",
    path: `./dist/static/jgatjens-resume-en.pdf`,
  });

  const pageES = await browser.newPage();
  const htmlES = fs.readFileSync(`./dist/es/resume/index.html`, "utf8");
  await pageES.setContent(htmlES, { waitUntil: "domcontentloaded" });
  await pageES.pdf({
    format: "A4",
    path: `./dist/static/jgatjens-resume-es.pdf`,
  });

  // close the browser
  await browser.close();
})();
