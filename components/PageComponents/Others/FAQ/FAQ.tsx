"use client";
import React, { useState } from "react";
import image from "@/public/images/Gallery/gallery.jpg";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const faq = [
  {
    question: "Scan QR to download the app",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who don't slow down.",
    image: "/images/Gallery/gallery.jpg",
  },
  {
    question: "Take a power bank from the closest location.",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep your devices/",
    image: "/images/Gallery/gallery3.jpg",
  },
  {
    question: "Use the app to find a return location.",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep ",
    image: "/images/Gallery/gallery2.jpg",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-20 bg-white rounded-lg p-4 md:p-10 lg:p-20 title-font ">
      <div className="w-full md:w-1/2 space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="border-b border-[#6b6a6a66]  ">
            <button
              className="flex justify-between items-center w-full py-4 text-left font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg lg:text-2xl text-[#000000DE]">{item.question}</span>
              <span>
                <AiOutlinePlus
                  className={`text-lg lg:text-2xl text-[#000000DE] duration-300 ${
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
              <p className="p-2 text-base lg:text-lg text-[#000000DE]">{item.answer}</p>
              <div className="md:hidden">
                <Image src={item.image} alt="faq" width={398} height={501} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        {openIndex !== null && (
          <Image
            src={faq[openIndex].image}
            width={398}
            height={501}
            alt="faq"
            className="rounded-[20px] h-[500px] w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default FAQ;
