
import { useState, useEffect } from "react";
import { Navigation } from "@/components/zzsalon/Navigation";
import { HeroSection } from "@/components/zzsalon/HeroSection";
import { ServicesSection } from "@/components/zzsalon/ServicesSection";
import { ProjectsSection } from "@/components/zzsalon/ProjectsSection";
import { PricingSection } from "@/components/zzsalon/PricingSection";
import { ContactInfo } from "@/components/zzsalon/ContactInfo";

const Index = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Navigation showTitle={showTitle} onSectionClick={scrollToSection} />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <ContactInfo />
    </div>
  );
};

export default Index;
