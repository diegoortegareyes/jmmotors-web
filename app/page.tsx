import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesPreview from "@/components/ServicesPreview";
import GaleriaTaller from "@/components/GaleriaTaller";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <GaleriaTaller /> {/* NUEVO - Aquí van tus fotos */}
      <CTASection />
    </>
  );
}