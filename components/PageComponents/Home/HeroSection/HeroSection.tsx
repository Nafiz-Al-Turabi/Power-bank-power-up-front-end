import React from "react";
import heroBg from "@/public/images/hero/bolt.svg";
import Image from "next/image";
import appStore from "@/public/images/hero/app.svg";
import goopowerbankglePlay from "@/public/images/hero/powerbank.png";

const HeroSection = () => {
  return (
    <div className=" bg-[#f1f1f4] pt-10">
      <div
        className="max-w-[1152px] mx-auto px-4 bg-no-repeat bg-contain bg-center pt-12 md:pt-15"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <h1 className="text-[#202020] text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center w-full lg:w-[25ch] mx-auto md:mt-12 lg:leading-[72px]">
          Charging just got smarter.{" "}
          <span className="text-[#6A0DAD]">Cracow,</span> meet convenience.
        </h1>
        <p className="text-baselg:text-lg text-center mt-4 lg:mt-6 lg:leading-[26px] w-full lg:w-[72ch] mx-auto">
          We’ve all been there—low battery, no charger, nowhere to plug in.
          That’s why we created a network of power banks you can grab on the go.
          At restaurants, cafés, gyms. Find us wherever your day takes you. No
          need to stop. Just power up and keep going.
        </p>
        <div className="flex justify-center items-center gap-4 mt-8 relative z-10">
          <button className="bg-[#141313] text-white px-4 py-2.5 rounded-full hover:bg-[#353535] transition cursor-pointer">
            Download app
          </button>
          <Image src={appStore} alt="hero" />
        </div>
        <div className="flex justify-center items-center -mt-10">
          <Image
            src={goopowerbankglePlay}
            alt="Powerbank"
            width={530}
            height={383}
            className="aspect-square"
          />
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
