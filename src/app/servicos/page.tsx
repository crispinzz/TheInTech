import type { Metadata } from "next";
import { ArrowRight, CircleGauge, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Serviços", description: "Consulte a disponibilidade de serviços da The In Tech em Umuarama.", alternates: { canonical: "/servicos" } };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Serviços sob consulta" title="Comece contando o que você precisa." description="A disponibilidade e o escopo de cada atendimento são confirmados diretamente pela equipe antes de qualquer compromisso." />
      <section className="content-section" data-header-theme="light">
        <div className="content-grid">
          <Reveal><p className="eyebrow">Atendimento responsável</p><h2>Sem promessas genéricas.</h2></Reveal>
          <Reveal className="content-body">
            <p>Os serviços abaixo aparecem como possibilidades de consulta. A equipe confirma se há atendimento para o equipamento, necessidade e período informados.</p>
            <div className="service-grid">
              <article className="service-card"><Wrench size={25} aria-hidden="true" /><div><small>Consulte disponibilidade</small><h3>Manutenção</h3><p>Envie informações sobre o equipamento para verificar se existe atendimento disponível.</p></div></article>
              <article className="service-card"><CircleGauge size={25} aria-hidden="true" /><div><small>Consulte disponibilidade</small><h3>Locação</h3><p>Converse com a equipe para saber se há equipamentos e condições de locação no momento.</p></div></article>
            </div>
            <TrackedLink className="button button-primary" href={whatsappUrl("Olá! Gostaria de consultar a disponibilidade de um serviço.")} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "services" }}>
              Fazer uma consulta <ArrowRight size={17} aria-hidden="true" />
            </TrackedLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
