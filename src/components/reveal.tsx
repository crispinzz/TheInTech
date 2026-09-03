"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("reveal", className)}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: delay / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
