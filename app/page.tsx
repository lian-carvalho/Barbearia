import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import UnitsSection from "@/components/sections/UnitsSection";
import Footer from "@/components/navigation/Footer";

import WhatsappButton from "@/components/ui/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <OurTeamSection />
      <UnitsSection />
      <Footer />

      <WhatsappButton />
    </div>
  );
}
