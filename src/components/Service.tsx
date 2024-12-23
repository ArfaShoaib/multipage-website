import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="w-full px-4 py-6">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-2 lg:mr-60 lg:-mt-40 lg:mb-20">
        {/* Free and Fast Delivery */}
        <div className="text-center flex flex-col items-center w-full md:w-1/3">
          <Image
            src="/about9.png"
            alt="Free and Fast Delivery"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="font-semibold text-lg md:text-xl leading-[28px] mb-2">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-sm md:text-base leading-[24px] text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* 24/7 Customer Service */}
        <div className="text-center flex flex-col items-center w-full md:w-1/3">
          <Image
            src="/about10.png"
            alt="24/7 Customer Service"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="font-semibold text-lg md:text-xl leading-[28px] mb-2">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-sm md:text-base leading-[24px] text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center flex flex-col items-center w-full md:w-1/3">
          <Image
            src="/about11.png"
            alt="Money Back Guarantee"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="font-semibold text-lg md:text-xl leading-[28px] mb-2">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-sm md:text-base leading-[24px] text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
