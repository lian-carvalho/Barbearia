import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '../styles/globals.css';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barbearia-barber.vercel.app"),

  title: "Barbearia",

  description: "Barbearia moderna especializada em cortes masculinos e barba - Projeto de portfólio desenvolvido por Lian Dev.",

  keywords: ["barbearia", "corte masculino", "barba", "barbearia moderna", "portfolio", "liandev", "desenvolvedor"],

  openGraph: {
    title: "Barbearia",
    description: "Cortes modernos e barba - Projeto de portfólio",
    url: "https://barbearia-barber.vercel.app",
    siteName: "Barbearia",
    images: [
      {
        url: '/images/seo/banner.png',
        width: 1200,
        height: 630,
        alt: 'Barbearia moderna'
      }
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Barbearia",
    description: "Cortes modernos e barba - Projeto de portfólio",
    images: ["/images/seo/banner.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
