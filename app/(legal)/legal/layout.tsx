"use client";
import Language from "@/components/PageComponents/Others/Language";
import Footer from "@/components/Shared/Footer/Footer";
import logo from "@/public/logo.svg";
import logoMobile from "@/public/logo-mobile.svg";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto px-4 2xl:px-0">
        <div className="flex justify-center relative pt-10">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              className="hidden lg:block"
              width={296}
            />
            <Image
              src={logoMobile}
              alt="logo"
              className=" lg:hidden"
              width={100}
              height={40}
            />
          </Link>
          <div className="absolute right-0 top-0 lg:-top-4 mt-10">
            <Language />
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
