import Image from "next/image";
import React from "react";

interface PricingCardProps {
  price: number;
  duration: string;
  description: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  duration,
  description,
}) => (
  <div className="bg-white border-2 border-[#6A0DAD] rounded-[30px] p-4 flex justify-center items-center h-[200px] lg:h-auto ">
    <div className="text-center">
      <h1 className="font-bold mb-1">
        <span className="text-[28px]">{price} pln</span>/{" "}
        <span className="text-xl">{duration}</span>
      </h1>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const pricingPlans = [
 
  {
    price: 7,
    duration: "hours",
    description: "The price for an hour.",
  },
  {
    price: 15,
    duration: "day",
    description: "Price for the whole day.",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-[1120px] mx-auto px-4 2xl:px-0">
        <div>
          <h1 className="text-[#202020] text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center lg:w-[25ch] xl:w-[26ch] mx-auto lg:leading-[72px]">
            <span className="text-[#6A0DAD]">Big</span> power.{" "}
            <span className="text-[#6A0DAD]">Tiny</span> price. <br /> All
            across Cracow.
          </h1>
          <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full lg:w-[72ch] mx-auto lg:leading-[26px] px-[25px] md:px-0">
            Check out our deals and stay powered all day.
          </p>
        </div>
        <div className="py-15 md:py-20 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="hidden lg:block lg:w-[60%] ">
              <Image
                src="/pricing-image.png"
                alt="Pricing"
                width={554}
                height={554}
                className="w-full h-full object-cover object-center rounded-[30px]"
              />
            </div>
            <div className=" grid grid-cols-1 gap-4 lg:w-[40%] ">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  price={plan.price}
                  duration={plan.duration}
                  description={plan.description}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 md:mt-6 text-sm leading-[20px] ">
            *** Please note that you can only rent one power bank at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
