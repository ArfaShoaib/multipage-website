import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Music = () => {
  return (
    <div className="w-full lg:w-[80%] h-auto lg:h-[400px] flex flex-col lg:flex-row justify-center items-center bg-black lg:mb-40 xs:mb-10 sm:mb-10 lg:ml-32 lg:mt-24">
      {/* Text Section */}
      <div className="w-full lg:w-[50%] p-4">
        <h3 className="text-green-500 font-bold mb-2">Categories</h3>
        <h1 className="text-white font-bold text-3xl lg:text-5xl mb-2">
          Enhance Your
        </h1>
        <h1 className="text-white font-bold text-3xl lg:text-5xl mb-4">
          Music Experience
        </h1>

        {/* Timer Section */}
        <div className="flex justify-start gap-4 mt-5 mb-4">
          {["23 Hours", "05 Days", "59 Minutes", "35 Seconds"].map((time, index) => {
            const [value, label] = time.split(" ");
            return (
              <div
                key={index}
                className="bg-white w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center"
              >
                <span className="font-bold text-lg">{value}</span>
                <span className="text-sm">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <Button className="bg-green-500 hover:bg-green-800 px-7 py-2 text-white font-bold rounded-md mt-4">
          Buy Now
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center items-center p-4">
        <Image
          src="/music.png"
          alt="Music Experience"
          width={568}
          height={330}
          className="w-full h-auto shadow-md"
        />
      </div>
    </div>
  );
};

export default Music;
