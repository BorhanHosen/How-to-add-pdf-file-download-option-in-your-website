import puppeteer from "puppeteer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ResumeController {
  static generatePDF = async (req, res) => {
    try {
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("http://localhost:3000/download-resume", {
          waitUntil: "networkidle2",
        });

        const todayDate = new Date();

        const pdf = await page.pdf({
          path: `${path.join(
            __dirname,
            "../public/files",
            todayDate.getTime() + ".pdf"
          )}`,
          printBackground: true,
          format: "a4",
        });

        await browser.close();
        res.send(pdf);
      })();
    } catch (error) {
      console.log(error.message);
    }
  };

  static downloadHome = async (req, res) => {
    try {
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

        const todayDate = new Date();

        const pdf = await page.pdf({
          path: `${path.join(
            __dirname,
            "../public/files",
            todayDate.getTime() + ".pdf"
          )}`,
          printBackground: true,
          format: "a4",
        });

        await browser.close();
        res.send(pdf);
      })();
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default ResumeController;
