import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
    </div>
  );
}
