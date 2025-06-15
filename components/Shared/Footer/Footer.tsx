import React from "react";
import logo from "@/public/logo-white.svg";
import bg from "@/public/footer-bg.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-black bg-cover xl:bg-contain 2xl:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="max-w-[1152px] mx-auto px-4 pt-15 pb-4">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-center md:justify-start gap-4 ">
              <Image src={logo} alt="logo" width={313} height={100} />
            </div>
            <div className="flex flex-col md:flex-row justify-between title-font mt-12">
              <h1 className="text-white text-xl font-semibold md:w-[12ch] text-center md:text-left">
                Your day doesn’t stop. Neither should your phone.
              </h1>
              <div className="text-white text-center md:text-right text-lg md:text-xl font-semibold space-y-4 mt-12 md:mt-0">
                <p>+48 696 696 920</p>
                <p>info@powerup.eu.com</p>
                <div className="">
                  <a href="">Instagram</a>
                  <a href="">LinkedIn</a>
                  <a href="">Tiktok</a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#ababab] text-sm mt-8 text-center md:text-left">
            We are creating our own equipment and software to construct networks
            of battery rental devices for phones in businesses, events, and
            areas. Additionally, we are developing an app so people can rent
            power banks quickly and conveniently.
          </p>
        </div>
      </div>
      <div className="max-w-[1152px] mx-auto p-4 title-font">
        <div className="text-[#6A0DAD] text-xs flex items-center gap-6">
          <Link href="/">Terms and conditions</Link>
          <Link href="/">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
