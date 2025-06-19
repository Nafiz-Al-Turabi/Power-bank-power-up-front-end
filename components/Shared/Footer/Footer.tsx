import React from "react";
import logo from "@/public/logo.svg";
import bg from "@/public/footer-bg.svg";
import Image from "next/image";
import Link from "next/link";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6] bg-cover xl:bg-contain 2xl:bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1152px] mx-auto px-4 pt-15 pb-4 relative">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between max-w-[601px] mx-auto ">
            <button className="lg:block hidden bg-[#000000] text-white px-4 py-2 rounded-full">
              +48 696 696 920
            </button>
            <div className="flex items-center justify-center md:justify-start gap-4 ">
              <Image src={logo} alt="logo" width={179} height={100} />
            </div>
            <button className="lg:hidden bg-[#000000] text-white px-4 py-2 rounded-full">
              +48 696 696 920
            </button>
            <button className="bg-[#000000] text-white px-4 py-2 rounded-full">
              info@powerup.eu.com
            </button>
            <div className="flex items-center gap-3 lg:absolute left-4">
              <a href="https://www.facebook.com/powerup.eu.com">
              <TbBrandInstagramFilled size={24} />
              </a>
              <a href="https://www.facebook.com/powerup.eu.com">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.instagram.com/powerup.eu.com">
                <IoLogoTiktok size={24} />
              </a>
            </div>
          </div>
          <p className="text-[#5a5a5a] text-sm mt-8 text-center md:text-left">
            We are creating our own equipment and software to construct networks
            of battery rental devices for phones in businesses, events, and
            areas. Additionally, we are developing an app so people can rent
            power banks quickly and conveniently.
          </p>
        </div>
      </div>
      <div className="max-w-[1152px] mx-auto p-4 title-font">
        <div className="text-[#000] text-xs flex items-center gap-6">
          <Link href="/" className="hover:text-green-600 duration-300 active:underline">Public offer agreement</Link>
          <Link href="/" className="hover:text-green-600 duration-300 active:underline">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
