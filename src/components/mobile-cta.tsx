"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <TrackedLink
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        eventName="whatsapp_click"
        eventData={{ location: "mobile_bar" }}
      >
        <MessageCircle size={19} aria-hidden="true" />
        Falar no WhatsApp
      </TrackedLink>
    </div>
  );
}
