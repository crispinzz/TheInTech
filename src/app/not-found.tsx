import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="page-hero" data-header-theme="light"><div><p className="eyebrow">Erro 404</p><h1>Página não encontrada.</h1><p className="page-hero-copy">O endereço pode ter mudado ou o conteúdo ainda não foi publicado.</p><div className="hero-actions"><Link className="button button-primary" href="/"><ArrowLeft size={17} /> Voltar ao início</Link></div></div></section>;
}
