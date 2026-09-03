import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="page-hero" data-header-theme="light">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{description}</p>
        {children}
      </Reveal>
    </section>
  );
}
