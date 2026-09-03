"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { whatsappUrl } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

const lines = [
  { index: "01", title: "Mobilidade", copy: "Consulte opções de apoio para deslocamento e rotina." },
  { index: "02", title: "Suporte ortopédico", copy: "Converse sobre a necessidade e confira as opções disponíveis." },
  { index: "03", title: "Reabilitação", copy: "Consulte produtos voltados ao acompanhamento da recuperação." },
  { index: "04", title: "Cuidado diário", copy: "Encontre apoio para conforto, autonomia e atividades do dia a dia." },
] as const;

export function ProductRail() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => rail.current?.scrollBy({ left: direction * rail.current.clientWidth * .78, behavior: "smooth" });

  return (
    <section className="product-rail-section" id="catalogo" aria-labelledby="catalogo-title">
      <div className="product-rail-heading">
        <div><p className="label"><span /> Catálogo</p><h2 id="catalogo-title">Encontre a linha certa para você.</h2></div>
        <div><p>Navegue pelas linhas de consulta. Produtos, marcas e disponibilidade serão detalhados após validação da The In Tech.</p><div className="rail-controls"><button type="button" onClick={() => move(-1)} aria-label="Ver itens anteriores"><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label="Ver próximos itens"><ArrowRight size={18} /></button></div></div>
      </div>
      <div className="product-rail" ref={rail}>
        {lines.map((line) => (
          <article className="consult-card" key={line.title}>
            <div className="consult-card-top"><span>{line.index}</span><span>CONSULTAR LINHA</span></div>
            <h3>{line.title}</h3>
            <p>{line.copy}</p>
            <TrackedLink href={whatsappUrl(`Olá! Gostaria de consultar produtos da linha ${line.title}.`)} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "product_rail", line: line.title }}>Consultar no WhatsApp <ArrowUpRight size={15} /></TrackedLink>
          </article>
        ))}
      </div>
      <div className="rail-progress"><span /></div>
    </section>
  );
}
