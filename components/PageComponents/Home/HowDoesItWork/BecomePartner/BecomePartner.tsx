import React from 'react';
import image from '@/public/BecomePartner.png';
import Image from 'next/image';

const BecomePartner = () => {
    return (
        <div className="bg-[#f6f6f6] flex items-center justify-center pt-10 pb-15 md:pb-30">
            <div className="max-w-[1152px] w-full flex flex-col md:flex-row items-center md:items-stretch bg-[#f6f6f6] mx-auto px-4">
                {/* Left: Image */}
                <div className="hidden md:flex-1 md:flex items-center justify-center mb-8 md:mb-0">
                    <Image src={image} alt="Become Partner" width={600} height={600} className="object-contain" />
                </div>
                {/* Right: Card */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white rounded-3xl shadow-md p-8 w-full flex flex-col ">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 title-font">Want to install<br />station at your<br />place?</h2>
                        <p className="text-gray-500 text-center mb-6">Ever had someone ask to charge their phone? Now you got power for them. We'll handle setup. You just get happier customers, just at no cost.</p>
                        <input
                            type="text"
                            placeholder="Name of the company"
                            className="w-full mb-4 px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="w-full mb-6 px-4 py-3 bg-[#f6f6f6] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <button className="w-fit bg-black md:bg-[#6A0DAD] text-white py-2.5 px-6 rounded-full font-semibold  transition hover:bg-[#353535] duration-300 cursor-pointer ">Send a request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomePartner;