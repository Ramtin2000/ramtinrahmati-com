import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import BenchmarkSection from "@/components/BenchmarkSection";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ramtin Rahmati — Systems & AI Architecture",
  description:
    "Systems architecture for AI products and the infrastructure underneath them: context-slim (LLM cache-cost controller), Telely (AI support), and Yeksaz (construction ops).",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Ramtin Rahmati — Systems & AI Architecture",
    description:
      "Systems architecture for AI products and the infrastructure underneath them.",
    url: "https://ramtinrahmati.com/work/",
    siteName: "Ramtin Rahmati",
    type: "website",
  },
};

export default function Work() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <BenchmarkSection />
        <Notes />
      </main>
      <Footer />
    </>
  );
}
