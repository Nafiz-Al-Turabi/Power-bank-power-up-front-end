import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <img
        src="/images/not-found/left-bolt.png"
        alt="not-found"
        className="hidden lg:block absolute top-0 left-0 object-cover h-full "
      />
      <img
        src="/images/not-found/right-bolt.png"
        alt="not-found"
        className="hidden lg:block absolute top-0 right-0 object-cover h-full "
      />
      <img
        src="/images/not-found/mobile-bolt.png"
        alt="not-found"
        className="block lg:hidden absolute bottom-0 right-0 object-cover  "
      />
      <div className="flex justify-center items-center pt-15">
        <Image
          src="/logo-white.svg"
          alt="not-found"
          width={220}
          height={24}
          className="hidden md:block"
        />
        <Image
          src="/logo-mobile-white.svg"
          alt="not-found"
          width={69.26}
          height={25.928}
          className="block md:hidden"
        />
      </div>
      <div className="flex justify-center items-center mb-6 mt-10 md:my-10">
        <Image
          src="/images/not-found/404.svg"
          alt="not-found"
          width={290}
          height={353}
          className="aspect-square"
        />
      </div>
      <div className="text-white">
        <p className=" text-base xl:text-xl font-normal w-full sm:w-[35ch] text-center mx-auto leading-7 px-10 md:px-0">
          Looks like this page didn’t charge overnight. Let’s plug you back in!
        </p>
        <div className="flex justify-center items-center relative z-10">
          <Link
            href="/"
            className="bg-[#6A0DAD] px-4 py-2.5 rounded-full mt-10 hover:bg-[#353535] transition-all duration-300 cursor-pointer"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
