import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><Link href="/">The In Tech</Link><p>Produtos e soluções ortopédicas em Umuarama.</p></div>
      <nav aria-label="Navegação do rodapé">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      <div className="footer-address"><p>{site.shortAddress}</p><p>{site.openingHours}</p></div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} The In Tech</span><span>CNPJ {site.cnpj}</span></div>
    </footer>
  );
}
