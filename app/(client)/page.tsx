import BecomePartner from "@/components/PageComponents/Home/BecomePartner/BecomePartner";
import FAQSection from "@/components/PageComponents/Home/FAQSection/FAQSection";
import HeroSection from "@/components/PageComponents/Home/HeroSection/HeroSection";
import HowDoesItWork from "@/components/PageComponents/Home/HowDoesItWork/HowDoesItWork";
import Pricing from "@/components/PageComponents/Home/Pricing/Pricing";
import WhyUs from "@/components/PageComponents/Home/WhyUs/WhyUs";
import React from "react";

export default function HomePage() {
  return (
    <div className="">
      <div id="home">
        <HeroSection />
      </div>
      <div id="why-us" className="scroll-mt-24">
        <WhyUs />
      </div>
      <div id="how-does-it-work" className="-scroll-mt-16 md:-scroll-mt-28">
        <HowDoesItWork />
      </div>
      <div id="pricing" className="scroll-mt-24">
        <Pricing />
      </div>
      <div id="become-a-partner" className="scroll-mt-24">
        <BecomePartner />
      </div>
      <div id="faq" className="-scroll-mt-4">
        <FAQSection />
      </div>
    </div>
  );
}
