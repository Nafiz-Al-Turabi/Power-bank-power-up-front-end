"use client";
import React, { useState } from "react";
import { FiX, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "How to use?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "What if I lose power bank?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "Where are the stations located?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "How to set up and how much can be used?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "What cables are included?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
  {
    question: "How safe is it?",
    answer:
      "Experience the freedom to stay charged anytime, anywhere. Whether youre streaming, working, or exploring off the grid, our power banks keep your devices powered so you never miss a moment. Built for life on the go, designed for those who do't slow down.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-15">
      <div className="max-w-[1152px] mx-auto py-16 px-4 md:px-15 md:py-20  text-white bg-[#000] rounded-[30px]">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-[#808080]">
            <button
              className="w-full flex justify-between items-center pt-4 pb-6 focus:outline-none"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="text-lg md:text-xl font-semibold text-left">
                {faq.question}
              </span>
              <span className="ml-4">
                <FiPlus className={`text-2xl transition-transform duration-300 ${openIndex === idx ? "rotate-45" : ""}`} />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === idx
                  ? "max-h-100 opacity-100 pb-6"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              {faq.answer && (
                <p className="text-base md:text-lg text-[#e4e4e4] ">
                  {faq.answer}
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
