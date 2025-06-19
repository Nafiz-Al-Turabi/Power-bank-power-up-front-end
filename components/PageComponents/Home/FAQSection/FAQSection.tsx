"use client";
import React, { useState } from "react";
import { FiX, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "5 PLN per hour. \n 10 PLN for 3 hours. \n 15 PLN for the whole day.",
  },
  {
    question: "How to use?",
    answer:
      "-Install the app 'POWERUP' from the App Store or Google Play. \n -Follow the instructions to create an account. \n-You'll see the stations on the map; choose one. \n -When you arrive, open the app and scan the QR code on the station. Take the power bank and start charging. \n -When you're done, you can return it to any nearby station. You'll see the available machines on the app's map.",
  },
  {
    question: "What if I lose power bank?",
    answer:
      "The system will charge you for the cost of lost power bank. \n If you need any help, please contact us via email at info@powerup.eu.com or by phone at 696-696-920.",
  },
  {
    question: "Where are the stations located?",
    answer:
      "You can view the location of our stations on the map in our application, POWERUP. When you open the app, you will see a map with the locations of our stations.",
  },
  {
    question: "How to set up and how much can be used?",
    answer:
      "Download 'POWERUP' app, create an account & follow instructions. Choose station & open app to scan QR code. Take power bank & charge. Return to nearby station when done. See available machines on app map.",
  },
  {
    question: "What cables are included?",
    answer:
      "Three types of cables are included in every power bank: Type C, micro-USB, and Lightning for iPhone.",
  },
  {
    question: "How safe is it?",
    answer:
      "You can be sure that you are totally safe when you rent one of our power banks. We make sure that each product is designed and built with top security measures and international standards.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 pt-25 pb-15 md:pt-30 title-font relative overflow-y-hidden 2xl:px-0">
      <img
        src="/bolt.png"
        alt="Help"
        className="absolute -top-32 md:-top-72 lg:-top-1/4 left-1/2 -translate-x-1/2 "
      />
      <div className="relative z-10">
        <h1 className="text-[#202020] text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center lg:w-[25ch] xl:w-[26ch] mx-auto lg:leading-[72px]">
          Still have questions?
        </h1>
        <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full lg:w-[72ch] mx-auto lg:leading-[26px]">
          Getting started takes less than a minute. Follow the steps and power
          up.
        </p>
      </div>
      <div className="max-w-[1120px] mx-auto py-10 px-4  md:px-15 md:py-20  text-white bg-[#000] rounded-[30px] mt-15 md:mt-20 relative z-10 ">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`${idx === 6 ? "border-t border-[#808080]" : "border-b border-[#808080]"}`}>
            <button
              className="w-full flex justify-between items-center pt-4 pb-4 md:pb-6 focus:outline-none"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="text-lg md:text-xl font-semibold text-left">
                {faq.question}
              </span>
              <span className="ml-4">
                <FiPlus
                  className={`text-base md:text-2xl transition-transform duration-300 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? "max-h-100 opacity-100 pb-6"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              {faq.answer && (
                <p className="text-base md:text-lg text-[#dedede] ">
                  {faq.answer.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
