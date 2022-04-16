const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.authenticate({ username: "admin", password: "admin" });
  await page.goto("http://localhost:3000/resume");
  await page.pdf({
    path: "./public/assets/pdf/jgatjens-resume-en.pdf",
    format: "a4",
  });

  const pageES = await browser.newPage();
  await pageES.authenticate({ username: "admin", password: "admin" });
  await pageES.goto("http://localhost:3000/es/resume");
  await pageES.pdf({
    path: "./public/assets/pdf/jgatjens-resume-es.pdf",
    format: "a4",
  });

  await browser.close();
})();
