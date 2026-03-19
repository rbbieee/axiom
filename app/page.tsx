import Access from "./components/Access";
import Capabilities from "./components/Capabilities";
import FadeIn from "./components/FadeIn";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import TheLog from "./components/TheLog";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Manifesto />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Capabilities />
      </FadeIn>
      <FadeIn delay={0.1}>
        <TheLog />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Access />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Footer />
      </FadeIn>
    </main>
  );
}