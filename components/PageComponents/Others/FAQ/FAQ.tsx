"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const faq = [
  {
    question: "Scan QR to download the app",
    answer:
      "Scan the QR code on our stations or tap the “Download the App” button on the website to install PowerUp on your phone.",
    answer2:
      "Prefer not to download the app? No problem. You can still rent a powerbank by scanning the QR code directly on any of our stations. ",
    image: "/images/howDoesItWork/image.png",
  },
  {
    question: "Take a power bank from the closest location.",
    answer:
      "Once you’ve downloaded our app, just complete a quick sign-up form to be able take a fully charged battery from any nearby station visible on the map.",
    answer2:
      "If you prefer to rent a power-bank without our app on the phone, just scan QR on any of our stations and complete the sign up form to take it.",
    image: "/images/howDoesItWork/image2.png",
  },
  {
    question: "Use the app to find a return location.",
    answer:
      "After powering up your device and ready to bring the device back, simply open the application to find the nearest return station for yourself.",
    answer2:
      "Our map makes it easy to find a drop-off point—whether you're at a café, shopping mall, or just on the move around Kraków.",
    image: "/images/howDoesItWork/image3.png",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex((index + 1) % faq.length);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-20 bg-white rounded-[30px] p-6 lg:p-20 title-font ">
      <div className="w-full lg:w-1/2">
        {faq.map((item, index) => (
          <div
            key={index}
            className={`border-b ${
              index === 2 ? "border-none" : "border-[#6b6a6a66]"
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg lg:text-2xl text-[#000000DE] p-4 md:px-0">
                {item.question}
              </span>
              <span>
                <AiOutlinePlus
                  className={`text-2xl text-[#000000DE] duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`
                overflow-hidden transition-all duration-300
                 ${
                   openIndex === index
                     ? "max-h-[800px] lg:max-h-[350px] opacity-100"
                     : "max-h-0 opacity-0"
                 }
                            `}
            >
              <p className=" text-base lg:text-lg text-[#000000DE] md:pb-4 px-4 md:px-0 pb-6">
                {item.answer}
              </p>
              <p className=" text-base lg:text-lg text-[#000000DE] md:pb-6 px-4 md:px-0">
                {item.answer2}
              </p>
              <div className="md:hidden py-6 mt-4 border-t border-[#6b6a6a66] px-4">
                <Image
                  src={item.image}
                  alt="faq"
                  width={398}
                  height={501}
                  className="rounded-[20px] "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block ">
        {openIndex !== null && (
          <Image
            src={faq[openIndex].image}
            width={398}
            height={501}
            alt="faq"
            className="rounded-[20px] md:w-[390px] md:h-[350px] lg:w-[398px] lg:h-[501px] w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default FAQ;
