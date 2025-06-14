import HeroSection from "@/components/PageComponents/Home/HeroSection/HeroSection";
import React from "react";

export default function HomePage() {
  return <div className="">
    <HeroSection />
    <div id="why-us" className="h-screen">
        <div>
            <h1>Why us</h1>
        </div>
    </div>
    <div id="how-does-it-work" className="h-screen">
        <div>
            <h1>How does it work</h1>
        </div>
    </div>
    <div id="become-a-partner" className="h-screen">
            <div>
                <h1>Become a partner</h1>
            </div>
    </div>
    <div id="pricing" className="h-screen">
        <div>
            <h1>Pricing</h1>
        </div>
    </div>
  </div>;
}
