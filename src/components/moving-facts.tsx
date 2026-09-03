"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const facts = [
  ["Onde", "Umuarama, Paraná"],
  ["Desde", "2022"],
  ["Horário", "Seg–sex · 08h–18h"],
  ["Contato", "WhatsApp direto"],
] as const;

export function MovingFacts() {
  const container = useRef<HTMLDivElement>(null);
  const visible = useInView(container, { amount: .3 });
  const reducedMotion = useReducedMotion();

  return (
    <div className="moving-facts" ref={container} aria-label="Informações da The In Tech">
      <motion.div className="moving-facts-track" initial={{ x: "-50%" }} animate={visible && !reducedMotion ? { x: ["-50%", "0%"] } : { x: "-50%" }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
        {[...facts, ...facts].map(([label, value], index) => <div className="moving-fact" key={`${label}-${index}`} aria-hidden={index >= facts.length}><span>{label}</span><strong>{value}</strong></div>)}
      </motion.div>
    </div>
  );
}
