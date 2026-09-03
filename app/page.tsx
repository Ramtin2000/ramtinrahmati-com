import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import BenchmarkSection from "@/components/BenchmarkSection";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <BenchmarkSection />
        <Notes />
      </main>
      <Footer />
    </>
  );
}
