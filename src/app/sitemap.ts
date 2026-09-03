import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/produtos", "/servicos", "/sobre", "/contato"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "/produtos" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })),
    ...getPublishedProducts().map((product) => ({ url: `${site.url}/produtos/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: .7 })),
  ];
}
