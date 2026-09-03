import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { navItems, whatsappUrl } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="The In Tech — início">The In Tech</Link>
      <nav className="nav-desktop" aria-label="Navegação principal">
        {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
      <TrackedLink className="header-contact" href={whatsappUrl()} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "header" }}>WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></TrackedLink>
      <details className="nav-mobile">
        <summary aria-label="Abrir menu"><Menu size={20} aria-hidden="true" /></summary>
        <nav aria-label="Navegação móvel">
          {navItems.map((item, index) => <Link href={item.href} key={item.href}><span>0{index + 1}</span>{item.label}</Link>)}
          <TrackedLink href={whatsappUrl()} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ location: "mobile_menu" }}>Falar no WhatsApp <ArrowUpRight size={16} /></TrackedLink>
        </nav>
      </details>
    </header>
  );
}
