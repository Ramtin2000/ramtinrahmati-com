import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import BenchmarkSection from "@/components/BenchmarkSection";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ramtin Rahmati — Full-Stack Engineer (React, Next.js, React Native, Node.js, AI)",
  description:
    "Full-stack engineer with 7+ years building web and mobile products for startups, from first version to production, including LLM features. Projects: context-slim, Telely, Yeksaz.",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Ramtin Rahmati — Full-Stack Engineer",
    description:
      "Web and mobile products for startups, from first version to production, including LLM features.",
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
