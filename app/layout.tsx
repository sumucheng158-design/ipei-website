import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Fonts via next/font (no FOUT, automatic self-hosting) ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

/* ── Site-wide metadata ── */
export const metadata: Metadata = {
  title: {
    default: "I.P.E.I.國際親子生態倡議組織",
    template: "%s | I.P.E.I.",
  },
  description:
    "International Parent-child Eco Initiative — 攜手親子力量，守護地球生態。推動親子淨灘、環境教育、永續生活的全球非政府組織。",
  keywords: [
    "親子環保",
    "淨灘",
    "beach cleanup",
    "環境教育",
    "environmental education",
    "永續發展",
    "sustainability",
    "IPEI",
    "國際NGO",
  ],
  authors: [{ name: "I.P.E.I." }],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: ["en_US"],
    url: "https://ipei.org",
    siteName: "I.P.E.I. 國際親子生態倡議組織",
    title: "I.P.E.I. — 攜手孩子，守護地球",
    description:
      "推動全球親子淨灘、環境教育與永續生活的國際組織。加入我們，一起為下一代守護美麗的地球。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "I.P.E.I." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "I.P.E.I.國際親子生態倡議組織",
    description: "攜手孩子，守護地球 · Together for a Greener Tomorrow",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://ipei.org"),
  alternates: { canonical: "https://ipei.org" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-TW"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
