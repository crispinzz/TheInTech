import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" poster="/products/hero-wheelchair-real-poster.jpg" disablePictureInPicture>
          <source src="/products/hero-wheelchair-real.mp4" type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
        </video>
      </div>
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-hero-content">
        <p className="label"><span /> Ortopedia e mobilidade em Umuarama</p>
        <h1 id="home-title">Mais autonomia.<br />Mais vida.</h1>
        <p className="home-hero-lead">Produtos para mobilidade e cuidado diário, com orientação humana e atendimento direto.</p>
        <Link className="action-primary" href="#catalogo">Encontrar um produto <ArrowRight size={16} /></Link>
      </div>
      <div className="home-hero-foot">
        <a href="https://www.pexels.com/video/man-moving-his-wheelchair-in-the-living-room-7423575/" target="_blank" rel="noreferrer">Vídeo: Gustavo Fring / Pexels</a>
        <a href="#catalogo">Conheça o catálogo <ArrowDown size={14} /></a>
      </div>
    </section>
  );
}
