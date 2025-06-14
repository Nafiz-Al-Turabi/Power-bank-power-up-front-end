"use client";
import React, { useState } from "react";
import image from "@/public/images/howDoesItWork/52a7910a9857c5e44d4ba53d928a4c6518a009e7.jpg";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const faq = [
  {
    question: "Scan QR to download the app",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who don't slow down.",
  },
  {
    question: "Take a power bank from the closest location.",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep your devices/",
  },
  {
    question: "Use the app to find a return location.",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether you're streaming, working, or exploring off the grid, our powerbanks keep ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 bg-white rounded-lg p-20 title-font">
      <div className="w-full md:w-1/2 space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="border-b border-[#6b6a6a66]">
            <button
              className="flex justify-between items-center w-full py-4 text-left font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-2xl text-[#000000DE]">{item.question}</span>
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
                     ? "max-h-[1000px] opacity-100"
                     : "max-h-0 opacity-0"
                 }
                            `}
            >
              <p className="p-2 text-lg text-[#000000DE]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image
          src={image}
          width={398}
          height={501}
          alt="faq"
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default FAQ;
