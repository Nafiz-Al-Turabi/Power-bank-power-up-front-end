import Image from "next/image";
import React from "react";
import whyUs from "@/public/mobile.png";

const WhyUs = () => {
  return (
    <div className="bg-[#f1f1f4] pb-52 md:pb-40 lg:pb-[260px] border-b border-[#6A0DAD] relative">
      <div className="max-w-[1152px] mx-auto px-4">
        <h1 className="text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center w-[16ch] md:w-[16ch] mx-auto lg:leading-[72px]">
          <span className="text-[#6A0DAD]">Power</span> that fits everyone
          around.
        </h1>
        <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full md:w-[72ch] mx-auto lg:leading-[26px]">
          We designed our power banks for real life , the kind where your
          battery is low, your charger is at home, and your day is going. They
          are fast, long-lasting, work with every phone, and they are reusable
          too. Grab one, charge up, drop it off. Simple as that.
        </p>
      </div>
      <div className="absolute -bottom-[430px] lg:-bottom-[400px] z-10 left-1/2 -translate-x-1/2 md:hidden overflow-x-auto w-full">
        <div className="min-w-[1000px]">
          <Image 
            src={whyUs} 
            alt="why-us" 
            className="w-full h-auto"
          />
        </div>
      </div>
      <Image 
        src={whyUs} 
        alt="why-us" 
        className="hidden md:block absolute -bottom-[300px] lg:-bottom-[480px] z-10 left-1/2 -translate-x-1/2" 
      />
    </div>
  );
};

export default WhyUs;
