import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CredibilityStrip from "../components/CredibilityStrip";
import PathsSection from "../components/PathsSection";
import ClaritySection from "../components/ClaritySection";
import TeamSection from "../components/TeamSection";
import VoiceSection from "../components/VoiceSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import QAWidget from "../components/QAWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CredibilityStrip />
      <PathsSection />
      <ClaritySection />
      <TeamSection />
      <VoiceSection />
      <FinalCTA />
      <Footer />
      <QAWidget />
    </>
  );
}
