import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { getProduct, getPublishedProducts, productWhatsappMessage } from "@/lib/products";
import { site, whatsappUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: { title: product.name, description: product.summary, images: [product.images[0].src] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => new URL(image.src, site.url).toString()),
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
  };

  return (
    <section className="product-detail" data-header-theme="light">
      <div className="product-gallery">
        <Image src={product.images[0].src} alt={product.images[0].alt} width={1000} height={1100} priority />
      </div>
      <div className="product-info">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="product-summary">{product.description}</p>
        {product.features.length > 0 && <ul className="feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
        {product.availability && <p>Disponibilidade: {product.availability}</p>}
        <TrackedLink className="button button-primary" href={whatsappUrl(productWhatsappMessage(product, site.url))} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "product", product: product.slug }}>
          Consultar este produto <ArrowRight size={17} aria-hidden="true" />
        </TrackedLink>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </section>
  );
}
