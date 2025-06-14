import HeroSection from "@/components/PageComponents/Home/HeroSection/HeroSection";
import WhyUs from "@/components/PageComponents/Home/WhyUs/WhyUs";
import React from "react";

export default function HomePage() {
  return <div className="">
    <HeroSection />
    <div id="why-us" className="">
        <WhyUs />
    </div>
    <div id="how-does-it-work" className="">
        <div>
            <h1>How does it work</h1>
        </div>
    </div>
    <div id="become-a-partner" className="">
            <div>
                <h1>Become a partner</h1>
            </div>
    </div>
    <div id="pricing" className="">
        <div>
            <h1>Pricing</h1>
        </div>
    </div>
  </div>;
}
