export const site = {
  name: "The In Tech",
  legalName: "Ageu Messias Simão",
  description:
    "Produtos e soluções ortopédicas em Umuarama. Conheça a The In Tech e consulte nossa equipe pelo WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "(44) 99763-5539",
  phoneDigits: "5544997635539",
  address: "Rua Paranapanema, 3043, Zona IV, Umuarama - PR, 87503-010",
  shortAddress: "Rua Paranapanema, 3043 · Umuarama, PR",
  openingHours: "Segunda a sexta, das 08:00 às 18:00",
  founded: "2022-01-24",
  cnpj: "44.990.473/0001-59",
} as const;

export const navItems = [
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export function whatsappUrl(message = "Olá! Gostaria de conhecer os produtos da The In Tech.") {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
