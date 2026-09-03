"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

const catalogLines = [
  { name: "Cadeiras de rodas", category: "Mobilidade", image: "/products/cadeira-rodas-ai.png", alt: "Representação de uma cadeira de rodas" },
  { name: "Andadores", category: "Mobilidade", image: "/products/andador-ai.png", alt: "Representação de um andador" },
  { name: "Muletas", category: "Mobilidade", image: "/products/muletas-ai.png", alt: "Representação de um par de muletas" },
  { name: "Bengalas", category: "Mobilidade", image: "/products/bengala-ai.png", alt: "Representação de uma bengala" },
  { name: "Suportes ortopédicos", category: "Ortopedia", image: "/products/suportes-ai.png", alt: "Representação de suportes ortopédicos" },
  { name: "Imobilizadores", category: "Ortopedia", image: "/products/imobilizador-ai.png", alt: "Representação de um imobilizador" },
] as const;

const filters = ["Todos", "Mobilidade", "Ortopedia"] as const;

export function MarketplaceCatalog({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = useMemo(
    () => catalogLines.filter((item) => filter === "Todos" || item.category === filter),
    [filter],
  );

  return (
    <section className={`marketplace ${full ? "marketplace-full" : ""}`} id={full ? undefined : "catalogo"} aria-labelledby="marketplace-title">
      <div className="marketplace-head">
        <div>
          <p className="label"><span /> Explore por categoria</p>
          <h2 id="marketplace-title">Feito para<br />a vida real.</h2>
        </div>
        <div className="marketplace-intro">
          <p>Explore as linhas e fale diretamente com a equipe para confirmar modelos, marcas e disponibilidade.</p>
          {!full && <Link className="text-action" href="/produtos">Ver catálogo completo <ArrowRight size={15} /></Link>}
        </div>
      </div>

      <div className="marketplace-toolbar">
        <div className="marketplace-filters" aria-label="Filtrar linhas de produtos">
          {filters.map((name) => (
            <button key={name} type="button" className={filter === name ? "active" : ""} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>
          ))}
        </div>
        <span>{visible.length.toString().padStart(2, "0")} linhas</span>
      </div>

      <div className="marketplace-grid" aria-live="polite">
        {visible.map((item, index) => {
          return (
            <article className="marketplace-card" key={item.name}>
              <div className="marketplace-visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <small>REFERÊNCIA VISUAL</small>
              </div>
              <div className="marketplace-card-copy">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <p>Modelos e disponibilidade confirmados no atendimento.</p>
                <TrackedLink href={whatsappUrl(`Olá! Gostaria de consultar ${item.name.toLowerCase()} disponíveis.`)} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: full ? "catalog" : "home_marketplace", line: item.name }}>
                  Consultar produto <ArrowUpRight size={15} />
                </TrackedLink>
              </div>
            </article>
          );
        })}
      </div>

      <p className="marketplace-note">As imagens são representações de categoria. Fotografias, marcas e modelos oficiais serão publicados após validação da The In Tech.</p>
    </section>
  );
}
