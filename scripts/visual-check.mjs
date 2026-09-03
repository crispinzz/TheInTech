import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const outputDir = process.argv[2] ?? ".visual-check";
const executablePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true });
const errors = [];

for (const [name, viewport, isMobile] of [
  ["desktop", { width: 1440, height: 1000 }, false],
  ["mobile", { width: 390, height: 844 }, true],
]) {
  const context = await browser.newContext({ viewport, isMobile, locale: "pt-BR", reducedMotion: "no-preference" });
  const page = await context.newPage();
  page.on("console", (message) => { if (message.type() === "error") errors.push(`${name}: ${message.text()}`); });
  page.on("pageerror", (error) => errors.push(`${name}: ${error.message}`));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += Math.floor(viewport.height * .72)) {
    await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: "instant" }), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(outputDir, `theintech-refined-${name}.png`), fullPage: true });
  await context.close();
}

await browser.close();
if (errors.length) throw new Error(errors.join("\n"));
console.log("Visual check completed without browser errors.");
