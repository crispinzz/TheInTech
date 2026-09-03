import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { MarketplaceCatalog } from "@/components/marketplace-catalog";
import { PageHero } from "@/components/page-hero";
import { getPublishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Produtos ortopédicos",
  description: "Conheça o catálogo da The In Tech e consulte produtos ortopédicos pelo WhatsApp.",
  alternates: { canonical: "/produtos" },
};

export default function ProductsPage() {
  const products = getPublishedProducts();
  return (
    <>
      <PageHero eyebrow="Catálogo" title="Produtos escolhidos com informação clara." description="Consulte fotografias, características e disponibilidade. O atendimento continua no WhatsApp, sem carrinho e sem complicação." />
      <section className="catalog-shell" data-header-theme="light">
        {products.length ? <CatalogExplorer products={products} /> : <MarketplaceCatalog full />}
      </section>
    </>
  );
}
