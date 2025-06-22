"use client";
import React from "react";
import { useForm } from "react-hook-form";
import image from "@/public/BecomePartner.png";
import Image from "next/image";

interface FormData {
  companyName: string;
  contactNumber: string;
}

const BecomePartner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
    reset();
  };

  return (
    <div className="bg-[#f6f6f6] flex items-center justify-center pt-10 pb-15 md:pb-30">
      <div className="max-w-[1120px] w-full flex flex-col md:flex-row items-center md:items-stretch bg-[#f6f6f6] mx-auto px-4 2xl:px-0">
        {/* Left: Image */}
        <div className="hidden md:flex-1 md:flex items-center justify-center mb-8 md:mb-0">
          <Image
            src={image}
            alt="Become Partner"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        {/* Right: Card */}
        <div className="flex-1 max-w-[554px] flex items-center justify-center lg:px-8">
          <div className="bg-white rounded-3xl  shadow-md py-10 px-4 lg:py-[70px] lg:px-10 w-full flex flex-col ">
            <h2 className="text-[1.375rem] sm:text-4xl lg:text-5xl font-bold text-center mb-4 title-font">
              Want to install station <br className="md:hidden" /> at your place?
            </h2>
            <p className="text-gray-500 text-center mb-6 px-[25px] md:px-0">
              Ever had someone ask to charge their phone? Now you got power for
              them. We'll handle setup. You just get happier customers, just at
              no cost.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  type="text"
                  placeholder="Name of the company"
                  className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <input
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  type="text"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 bg-[#f6f6f6] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-fit bg-black md:bg-[#141313] text-white py-2.5 px-6 rounded-full font-semibold  transition hover:bg-[#353535] duration-300 cursor-pointer "
              >
                Send a request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
