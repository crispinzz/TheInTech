import { ImageResponse } from "next/og";

export const alt = "The In Tech — produtos e soluções ortopédicas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 74, background: "#0B2B24", color: "#F7F8F5", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "-2px" }}>The In Tech</div>
      <div style={{ display: "flex", maxWidth: 900, fontSize: 82, lineHeight: 1.02, letterSpacing: "-5px", fontWeight: 700 }}>Cuidado que acompanha o seu movimento.</div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#BCEBD2" }}><span style={{ width: 14, height: 14, borderRadius: 99, background: "#35C984" }} /> Umuarama · Paraná</div>
    </div>,
    size,
  );
}
