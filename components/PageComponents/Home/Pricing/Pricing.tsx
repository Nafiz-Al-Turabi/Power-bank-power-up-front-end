import React from "react";

interface PricingCardProps {
  price: number;
  duration: string;
  description: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ price, duration, description }) => (
  <div className="border border-[#6A0DAD] rounded-2xl p-4 flex justify-center items-center h-[200px]">
    <div className="text-center">
      <h1 className="font-bold mb-4">
        <span className="text-[28px]">{price} pln</span>/{" "}
        <span className="text-xl">{duration}</span>
      </h1>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const pricingPlans = [
  {
    price: 5,
    duration: "hour",
    description: "The price for an hour."
  },
  {
    price: 10,
    duration: "3 hours",
    description: "The price for an hour."
  },
  {
    price: 15,
    duration: "day",
    description: "The price for an hour."
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-[1152px] mx-auto px-4">
        <div>
          <h1 className="text-[#202020] text-2xl md:text-5xl lg:text-[3.75rem] font-bold title-font text-center lg:w-[25ch] xl:w-[26ch] mx-auto lg:leading-[72px]">
            <span className="text-[#6A0DAD]">Big</span> power.{" "}
            <span className="text-[#6A0DAD]">Tiny</span> price. <br /> All
            across Cracow.
          </h1>
          <p className="text-base md:text-lg text-center mt-4 md:mt-6 w-full lg:w-[72ch] mx-auto lg:leading-[26px]">
            Check out our deals and stay powered all day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-15 md:py-20 lg:px-8">
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
    </div>
  );
};

export default Pricing;
