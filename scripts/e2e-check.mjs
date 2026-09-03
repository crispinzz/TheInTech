import { chromium } from "playwright-core";

const executablePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: "pt-BR" });
const page = await context.newPage();
const browserErrors = [];
page.on("console", (message) => { if (message.type() === "error") browserErrors.push(message.text()); });
page.on("pageerror", (error) => browserErrors.push(error.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.locator(".home-hero-video").waitFor();
await page.waitForFunction(() => {
  const video = document.querySelector(".home-hero-video");
  return video instanceof HTMLVideoElement && video.readyState >= 2 && video.currentTime > 0;
});
await page.getByLabel("Informações da The In Tech").waitFor();
await page.getByRole("heading", { name: "Feito para a vida real." }).waitFor();
await page.getByRole("button", { name: "Ortopedia" }).click();
if ((await page.locator(".marketplace-card").count()) !== 2) throw new Error("Filtro do catálogo não respondeu");
await page.getByTitle("Mapa da The In Tech em Umuarama").waitFor();

for (const route of ["/produtos", "/servicos", "/sobre", "/contato"]) {
  const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  if (!response?.ok()) throw new Error(`Falha ao abrir ${route}: ${response?.status()}`);
}

await context.close();
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, locale: "pt-BR" });
const mobilePage = await mobile.newPage();
await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobilePage.locator("summary[aria-label='Abrir menu']").click();
await mobilePage.getByRole("navigation", { name: "Navegação móvel" }).getByRole("link", { name: /Produtos/ }).waitFor();
await mobile.close();
await browser.close();

if (browserErrors.length) throw new Error(browserErrors.join("\n"));
console.log("E2E check passed: interactions, routes and mobile navigation.");
