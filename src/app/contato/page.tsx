import type { Metadata } from "next";
import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TrackedLink } from "@/components/tracked-link";
import { directionsUrl, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Contato e localização", description: "Fale com a The In Tech pelo WhatsApp ou visite nossa loja em Umuarama.", alternates: { canonical: "/contato" } };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Estamos aqui para ajudar." description="Consulte produtos, informações e disponibilidade pelo WhatsApp ou visite a The In Tech em Umuarama." />
      <section className="contact-grid" data-header-theme="dark">
        <div className="contact-panel">
          <p className="eyebrow eyebrow-light">Fale conosco</p><h2>Uma conversa resolve o próximo passo.</h2>
          <p>Atendimento de segunda a sexta, das 08h às 18h.</p>
          <div className="contact-links">
            <TrackedLink className="contact-link" href={whatsappUrl()} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "contact" }}><span><MessageCircle size={18} /> WhatsApp</span><ArrowUpRight size={20} /></TrackedLink>
            <TrackedLink className="contact-link" href={`tel:+${site.phoneDigits}`} eventName="phone_click" eventData={{ location: "contact" }}><span><Phone size={18} /> {site.phoneDisplay}</span><ArrowUpRight size={20} /></TrackedLink>
            <TrackedLink className="contact-link" href={directionsUrl} target="_blank" rel="noreferrer" eventName="directions_click" eventData={{ location: "contact" }}><span><MapPin size={18} /> Como chegar</span><ArrowUpRight size={20} /></TrackedLink>
          </div>
        </div>
        <a className="contact-map map-art" href={directionsUrl} target="_blank" rel="noreferrer" aria-label="Abrir localização da The In Tech no mapa"><span className="map-pin"><MapPin size={24} /></span><span className="map-label">{site.shortAddress}</span><span className="hero-tag"><Clock3 size={14} /> {site.openingHours}</span></a>
      </section>
    </>
  );
}
