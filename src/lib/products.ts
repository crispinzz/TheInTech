export type ProductCategory = {
  slug: string;
  name: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  brand?: string;
  images: { src: string; alt: string }[];
  availability?: string;
  featured?: boolean;
  published: boolean;
};

// Conteúdo comercial só deve entrar aqui após aprovação do proprietário.
export const categories: ProductCategory[] = [];
export const products: Product[] = [];

export function getPublishedProducts() {
  return products.filter((product) => product.published);
}

export function getProduct(slug: string) {
  return getPublishedProducts().find((product) => product.slug === slug);
}

export function productWhatsappMessage(product: Pick<Product, "name" | "slug">, baseUrl: string) {
  return `Olá! Tenho interesse no produto ${product.name}. Gostaria de saber mais informações e disponibilidade. ${baseUrl}/produtos/${product.slug}`;
}

export function validateCatalog(catalog: Product[]) {
  const slugs = new Set<string>();

  for (const product of catalog) {
    if (!product.published) continue;
    if (!product.slug || !product.name || !product.category || !product.images[0]) {
      throw new Error(`Produto publicado incompleto: ${product.slug || product.name || "sem identificação"}`);
    }
    if (slugs.has(product.slug)) throw new Error(`Slug duplicado: ${product.slug}`);
    slugs.add(product.slug);
  }
}

validateCatalog(products);
