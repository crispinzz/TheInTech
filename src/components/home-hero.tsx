import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <Image className="home-hero-image" src="/products/hero-home-v2.png" alt="Cadeira de rodas em uma sala clara e acolhedora" fill priority sizes="100vw" />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-hero-content">
        <p className="label"><span /> Ortopedia e mobilidade em Umuarama</p>
        <h1 id="home-title">Mais autonomia.<br />Mais vida.</h1>
        <p className="home-hero-lead">Produtos para mobilidade e cuidado diário, com orientação humana e atendimento direto.</p>
        <Link className="action-primary" href="#catalogo">Encontrar um produto <ArrowRight size={16} /></Link>
      </div>
      <div className="home-hero-foot">
        <span>Imagem ilustrativa gerada por IA</span>
        <a href="#catalogo">Conheça o catálogo <ArrowDown size={14} /></a>
      </div>
    </section>
  );
}
