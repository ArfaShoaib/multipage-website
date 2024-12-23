"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 mt-7">
      <div className="lg:w-1/2">
        <div className="text-[16px] mt-1 ml-[60px]">
          <div className="flex items-center">
            <h1>Women&apos;s Fashion</h1>
            <MdKeyboardArrowRight className="ml-2" />
          </div>
          <br />
          <div className="flex items-center">
            <h1>Men&apos;s Fashion</h1>
            <MdKeyboardArrowRight className="ml-7" />
          </div>
          <br />
          <h1>Electronics</h1> <br />
          <h1>Home &amp; Lifestyle</h1> <br />
          <h1>Medicine</h1> <br />
          <h1>Sports &amp; Outdoor</h1> <br />
          <h1>Baby’s &amp; Toys</h1> <br />
          <h1>Groceries &amp; Pets</h1> <br />
          <h1>Health &amp; Beauty</h1> <br />
        </div>
      </div>
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px h-[425px] mt-[200px] -ml-[400px] bg-gray-300"></div>

      <div className="lg:w-1/2 flex justify-end 2xl:mr-[300px] 2xl:w-[1899px] 2xl:ml-16 2xl:h-[320px]">
        <Image
          src="/frame.png"
          alt="image"
          width={892}
          height={344}
        />
      </div>
    </div>
  );
};

export default Hero;
