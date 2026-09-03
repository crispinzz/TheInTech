import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCta } from "@/components/mobile-cta";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "The In Tech | Produtos ortopédicos em Umuarama", template: "%s | The In Tech" },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "The In Tech | Produtos ortopédicos em Umuarama",
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: `+${site.phoneDigits}`,
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Paranapanema, 3043, Zona IV",
    addressLocality: "Umuarama",
    addressRegion: "PR",
    postalCode: "87503-010",
    addressCountry: "BR",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <SmoothScroll />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <MobileCta />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
        <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
      </body>
    </html>
  );
}
