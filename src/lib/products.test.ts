import { describe, expect, it } from "vitest";
import { productWhatsappMessage, validateCatalog, type Product } from "./products";

const baseProduct: Product = {
  slug: "produto-teste",
  name: "Produto Teste",
  category: "Categoria",
  summary: "Resumo",
  description: "Descrição",
  features: [],
  images: [{ src: "/images/produto.jpg", alt: "Produto" }],
  published: true,
};

describe("catálogo", () => {
  it("gera uma mensagem com produto e URL", () => {
    expect(productWhatsappMessage(baseProduct, "https://example.com")).toContain(
      "Produto Teste",
    );
    expect(productWhatsappMessage(baseProduct, "https://example.com")).toContain(
      "https://example.com/produtos/produto-teste",
    );
  });

  it("rejeita slugs duplicados publicados", () => {
    expect(() => validateCatalog([baseProduct, { ...baseProduct }])).toThrow("Slug duplicado");
  });

  it("ignora rascunhos incompletos", () => {
    expect(() => validateCatalog([{ ...baseProduct, slug: "", images: [], published: false }])).not.toThrow();
  });
});
