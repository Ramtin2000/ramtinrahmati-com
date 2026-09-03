import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ramtinrahmati.com"),
  title: "Ramtin Rahmati — Systems & AI Architecture",
  description:
    "Systems architecture for AI products and the infrastructure underneath them: context-slim (LLM cache-cost controller), Telely (AI support), and Yeksaz (construction ops).",
  openGraph: {
    title: "Ramtin Rahmati — Systems & AI Architecture",
    description:
      "Systems architecture for AI products and the infrastructure underneath them.",
    url: "https://ramtinrahmati.com",
    siteName: "Ramtin Rahmati",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh bg-ground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
