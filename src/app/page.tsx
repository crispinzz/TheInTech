import Image from "next/image";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { MovingFacts } from "@/components/moving-facts";
import { MarketplaceCatalog } from "@/components/marketplace-catalog";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { directionsUrl, site, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MovingFacts />
      <MarketplaceCatalog />

      <section className="editorial">
        <div className="editorial-media">
          <Image src="/products/story-cane-v2.png" alt="Pessoa segurando uma bengala em um ambiente doméstico" fill sizes="(max-width: 900px) 100vw, 58vw" />
          <span>Imagem ilustrativa gerada por IA</span>
        </div>
        <Reveal className="editorial-copy">
          <p className="label"><span /> Escolha com clareza</p>
          <h2>O produto certo começa por uma boa conversa.</h2>
          <p>Conte o que você procura. A equipe ajuda a conferir opções, características e disponibilidade — sem complicar.</p>
          <TrackedLink className="text-action" href={whatsappUrl("Olá! Preciso de ajuda para escolher um produto.")} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "editorial" }}>Conversar com a equipe <ArrowUpRight size={15} /></TrackedLink>
        </Reveal>
      </section>

      <section className="how-it-works" id="atendimento">
        <Reveal className="section-title"><p className="label"><span /> Atendimento simples</p><h2>Do que você precisa<br />até a melhor opção.</h2></Reveal>
        <div className="steps">
          <Reveal><article><span>01</span><h3>Explore</h3><p>Veja as categorias e encontre o tipo de produto que procura.</p></article></Reveal>
          <Reveal delay={50}><article><span>02</span><h3>Converse</h3><p>Chame no WhatsApp com a categoria já identificada.</p></article></Reveal>
          <Reveal delay={100}><article><span>03</span><h3>Confirme</h3><p>Confira modelos e disponibilidade diretamente com a equipe.</p></article></Reveal>
        </div>
      </section>

      <section className="location" id="localizacao">
        <Reveal className="location-copy"><p className="label"><span /> Perto de você</p><h2>Venha conhecer<br />a The In Tech.</h2><div className="location-details"><p>{site.address}</p><p>{site.openingHours}</p><p>{site.phoneDisplay}</p></div><TrackedLink className="action-primary" href={directionsUrl} target="_blank" rel="noreferrer" eventName="directions_click" eventData={{ location: "home" }}>Abrir rota <ArrowUpRight size={15} /></TrackedLink></Reveal>
        <div className="map-frame">
          <iframe title="Mapa da The In Tech em Umuarama" src={`https://www.google.com/maps?q=${encodeURIComponent(`The In Tech, ${site.address}`)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <TrackedLink href={directionsUrl} target="_blank" rel="noreferrer" eventName="directions_click" eventData={{ location: "map" }}><MapPin size={16} /> Abrir no Google Maps <ArrowUpRight size={15} /></TrackedLink>
        </div>
      </section>

      <section className="contact-final">
        <Reveal><p className="label"><span /> Atendimento direto</p><h2>Vamos encontrar<br />o que você precisa?</h2></Reveal>
        <TrackedLink className="contact-final-link" href={whatsappUrl()} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "final" }}><MessageCircle size={20} /> Abrir WhatsApp <ArrowUpRight size={18} /></TrackedLink>
      </section>
    </>
  );
}
