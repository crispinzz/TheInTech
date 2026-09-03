import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Sobre", description: "Conheça a The In Tech, empresa de produtos ortopédicos em Umuarama, Paraná.", alternates: { canonical: "/sobre" } };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="A The In Tech" title="Tecnologia, cuidado e presença local." description="Uma empresa de Umuarama dedicada a aproximar pessoas de produtos e informações ortopédicas com atendimento direto." />
      <section className="content-section dark-content" data-header-theme="dark">
        <div className="content-grid">
          <Reveal><p className="eyebrow">Nossa base</p><h2>Em Umuarama desde 2022.</h2></Reveal>
          <Reveal className="content-body"><p>A The In Tech foi estabelecida em janeiro de 2022. Sua história completa, propósito e diferenciais serão publicados após validação do proprietário, preservando a precisão de cada informação apresentada.</p><p>O compromisso desta experiência digital é simples: mostrar apenas o que a empresa realmente oferece e facilitar uma conversa humana sempre que houver uma dúvida.</p></Reveal>
        </div>
        <div className="values-grid">
          <Reveal><article className="value"><span>01</span><h3>Clareza</h3><p>Informação objetiva, sem alegações ou promessas não confirmadas.</p></article></Reveal>
          <Reveal delay={80}><article className="value"><span>02</span><h3>Proximidade</h3><p>Contato direto com uma empresa estabelecida em Umuarama.</p></article></Reveal>
          <Reveal delay={160}><article className="value"><span>03</span><h3>Cuidado</h3><p>Uma jornada simples, respeitosa e acessível do catálogo ao atendimento.</p></article></Reveal>
        </div>
      </section>
    </>
  );
}
