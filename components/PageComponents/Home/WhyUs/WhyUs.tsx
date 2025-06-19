import Image from "next/image";
import React from "react";
import whyUs from "@/public/mobile.jpg";
import FastIcon from "@/components/icons/FastIcon";
import BatteryIcon from "@/components/icons/BatteryIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import LeafIcon from "@/components/icons/LeafIcon";

const WhyUs = () => {
  return (
    <div className="bg-[#f1f1f4] pb-20 md:pb-40 lg:pb-[260px] border-b border-[#6A0DAD] relative">
      <div className="max-w-[1120px] mx-auto px-4 2xl:px-0">
        <h1 className="text-[#202020] text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center w-[16ch] md:w-[16ch] mx-auto lg:leading-[72px]">
          <span className="text-[#6A0DAD]">Power</span> that fits everyone
          around.
        </h1>
        <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full md:w-[72ch] mx-auto lg:leading-[26px] mb-15 sm:mb-20">
          We designed our power banks for real life , the kind where your
          battery is low, your charger is at home, and your day is going. They
          are fast, long-lasting, work with every phone, and they are reusable
          too. Grab one, charge up, drop it off. Simple as that.
        </p>
      </div>

      <div className="-mb-[400px] sm:-mb-[400px] md:-mb-[500px] lg:-mb-[640px] xl:-mb-[660px] relative z-10 px-4 2xl:px-0">
        <section className="flex items-center justify-between gap-[63px] bg-white  rounded-[30px] max-w-[1120px] mx-auto px-6 lg:px-0 lg:py-0 py-10 ">
          <div className="hidden lg:block w-1/2">
            <img
              src={whyUs.src}
              alt="PowerUp"
              className="w-full h-auto rounded-l-[30px]"
            />
          </div>

          <div className="text-black w-full lg:w-1/2 space-y-4">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-4">
                <FastIcon />
                <div>
                  <p className="md:text-xl font-medium">Fast Charger</p>
                  <p className="text-base">
                    Charging so fast, feels like you're cheating
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <BatteryIcon />
                <div>
                  <p className="md:text-xl font-medium">7200 mAh</p>
                  <p className="text-base">
                    It is not a power bank. It is battery vacation.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <NodeIcon />
                <div>
                  <p className="md:text-xl font-medium">Universal Fit</p>
                  <p className="text-base">
                    It is not a power bank. It is battery vacation.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <LeafIcon />
                <div>
                  <p className="md:text-xl font-medium">Eco Friendly</p>
                  <p className="text-base">
                    Charging that does not cost the Earth.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
