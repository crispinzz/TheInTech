"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageSearch, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { whatsappUrl } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

export function CatalogExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const categoryNames = useMemo(() => ["Todos", ...new Set(products.map((product) => product.category))], [products]);
  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    return products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const matchesQuery = !normalizedQuery || `${product.name} ${product.summary}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  if (!products.length) {
    return (
      <div className="empty-state">
        <div className="empty-state-inner">
          <div className="empty-icon"><PackageSearch size={28} aria-hidden="true" /></div>
          <h2>Catálogo em preparação.</h2>
          <p>Estamos organizando fotografias e informações oficiais para mostrar cada produto com clareza. Fale com a equipe para consultar o que você procura.</p>
          <TrackedLink className="button button-primary" href={whatsappUrl("Olá! Gostaria de consultar um produto ortopédico.")} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "catalog_empty" }}>
            Consultar pelo WhatsApp <ArrowRight size={17} aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="catalog-controls">
        <label className="search-field">
          <span className="sr-only">Buscar produtos</span>
          <Search size={18} aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nome" type="search" />
        </label>
        <div className="filter-list" aria-label="Filtrar por categoria">
          {categoryNames.map((name) => (
            <button key={name} type="button" className={category === name ? "active" : ""} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>
          ))}
        </div>
      </div>
      <p className="catalog-count" aria-live="polite">{visible.length} {visible.length === 1 ? "produto encontrado" : "produtos encontrados"}</p>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((product) => (
            <Link className="product-card" href={`/produtos/${product.slug}`} key={product.slug}>
              <div className="product-card-image"><Image src={product.images[0].src} alt={product.images[0].alt} width={720} height={640} /></div>
              <div className="product-card-body"><span>{product.category}</span><h2>{product.name}</h2><p>{product.summary}</p></div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state"><div className="empty-state-inner"><h2>Nenhum produto encontrado.</h2><p>Tente outro nome ou remova o filtro selecionado.</p></div></div>
      )}
    </>
  );
}
