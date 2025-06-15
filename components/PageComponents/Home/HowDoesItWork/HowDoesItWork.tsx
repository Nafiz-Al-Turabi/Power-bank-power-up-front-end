import Image from "next/image";
import React from "react";
import howDoesItWork from "@/public/images/howDoesItWork/bolt.svg";
import FAQ from "../../Others/FAQ/FAQ";

const HowDoesItWork = () => {
  return (
    <div className="bg-[#f6f6f6] mt-[278px] border-t border-[#6A0DAD] pt-52 lg:pt-68 relative">
      <Image
        src={howDoesItWork}
        alt="how-does-it-work"
        className="absolute top-0 right-0 "
      />
      <div className="max-w-[1152px] mx-auto px-4">
        <h1 className="text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center w-[16ch] lg:w-[20ch] xl:w-[26ch] mx-auto lg:leading-[72px]">
          <span className="text-[#6A0DAD]">How</span> does it work? <br />{" "}
          Easier than texting at 1% around.
        </h1>
        <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full lg:w-[72ch] mx-auto lg:leading-[26px]">
          Getting started takes less than a minute. Follow the steps and power
          up.
        </p>
        <div className="py-20 relative z-10">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
