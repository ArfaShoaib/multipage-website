import React from "react";
import Image from "next/image";
import Service from "@/components/Service";

const NewArrival = () => {
  return (
    <div className="w-full px-4 py-6 lg:ml-32 lg:mt-40">
      {/* Header */}
      <div className="mb-6 flex flex-col lg:items-start lg:gap-2">
        {/* Red Icon */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>
          <span className="text-red-500 font-bold">Featured</span>
        </div>
        <h1 className="text-3xl font-bold">New Arrival</h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:space-x-20 lg:mt-20">
        {/* PlayStation 5 Card */}
        <div className="relative group col-span-2 h-[300px] lg:w-[570px] lg:h-[600px] overflow-hidden rounded-lg">
          <Image
            src="/playstation.jpg"
            alt="PlayStation 5"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">PlayStation 5</h2>
            <p className="text-sm mb-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="underline font-bold">
              Shop Now
            </a>
          </div>
        </div>

        {/* Women's Collections */}
        <div className="relative group col-span-1 h-[200px] lg:w-[670px] lg:h-[284px] overflow-hidden rounded-lg">
          <Image
            src="/women.png"
            alt="Women's Collections"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">Women's Collections</h2>
            <p className="text-sm mb-2">
              Featured collections that give you another vibe.
            </p>
            <a href="#" className="underline font-bold">
              Shop Now
            </a>
          </div>
        </div>

        {/* Speakers */}
        <div className="relative group col-span-1 h-[200px]  lg:top-[52%] lg:right-[190%] lg:w-[270px] lg:h-[284px] overflow-hidden rounded-lg lg:col-start-6 lg:col-end-7">
          <Image
            src="/speaker.png"
            alt="Speakers"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">Speakers</h2>
            <p className="text-sm mb-2">Amazon wireless speakers</p>
            <a href="#" className="underline font-bold">
              Shop Now
            </a>
          </div>
        </div>

        {/* Perfume */}
        <div className="relative group col-span-1 lg:bottom-[107%] h-[200px] lg:w-[270px] lg:h-[284px] overflow-hidden rounded-lg lg:col-start-3 lg:col-end-4">
          <Image
            src="/perfume.png"
            alt="Perfume"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">Perfume</h2>
            <p className="text-sm mb-2">GUCCI INTENSE OUD EDP</p>
            <a href="#" className="underline font-bold">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* Service Component */}
      <div className="mt-6 lg:mt-0">
        <Service />
      </div>
    </div>
  );
};

export default NewArrival;
