import ZtIcon from "@/components/icons/ZtIcon";
import React from "react";

const Pricing = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-[1152px] mx-auto px-4">
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center lg:w-[25ch] xl:w-[26ch] mx-auto">
            <span className="text-[#6A0DAD]">Big</span> power.{" "}
            <span className="text-[#6A0DAD]">Tiny</span>
            price. <br /> All across Cracow.
          </h1>
          <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full lg:w-[72ch] mx-auto">
            We designed our power banks for real life , the kind where your
            battery is low, your charger is at home, and your day’s still going.
            They are fast, long-lasting, work with every phone, and they are
            reusable too. Grab one, charge up, drop it off. Simple as that.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-15 md:py-20">
          <div className="bg-black h-[266px] text-white flex flex-col justify-center items-center rounded-2xl relative">
            <div className="text-center">
              <p className="text-base md:text-[1.375rem] font-bold">Standard</p>
              <p className="text-[1.75rem] md:text-[2.5rem] font-bold flex items-center justify-center">5 <ZtIcon className="w-10 h-10" /></p>
            </div>
            <p className="absolute bottom-4 text-base text-[#7DE360]">0-60 mins</p>
          </div>
          <div className="bg-black h-[266px] text-white flex flex-col justify-center items-center rounded-2xl relative">
            <div className="text-center">
              <p className="text-base md:text-[1.375rem] font-bold">Advanced</p>
              <p className="text-[1.75rem] md:text-[2.5rem] font-bold flex items-center justify-center">10 <ZtIcon className="w-10 h-10" /></p>
            </div>
            <p className="absolute bottom-4 text-base text-[#7DE360]">61 mins - 24 hours</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
