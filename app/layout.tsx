import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { landingConfig } from "@/lib/landing";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ramtinrahmati.com"),
  title: "Ramtin Rahmati",
  description: "Web developer building websites, web apps, and tested AI features.",
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
        {landingConfig.plausibleDomain && (
          <>
            <Script
              src="https://plausible.io/js/script.js"
              data-domain={landingConfig.plausibleDomain}
              strategy="afterInteractive"
            />
            <Script id="plausible-queue" strategy="afterInteractive">
              {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
