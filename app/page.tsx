'use client'

import { useState, useEffect } from "react";

import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import UnitsSection from "@/components/sections/UnitsSection";
import Footer from "@/components/navigation/Footer";

import WhatsappButton from "@/components/ui/WhatsappButton";

import AgendModal from "@/components/ui/AgendModal";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => { setModalOpen(true) };
  const closeModal = () => { setModalOpen(false) };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  return (
    <>
      <div inert={modalOpen}>
        <Header />
        <HeroSection openModalFunction={openModal} />
        <AboutUsSection />
        <ServicesSection />
        <OurTeamSection />
        <UnitsSection />
        <Footer />

        <WhatsappButton />
      </div>

      <AgendModal open={modalOpen} closeFunction={closeModal} />
    </>
  );
}
