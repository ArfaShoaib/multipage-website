'use client'
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Explore = () => {
  const products = [
    {
      id: 1,
      image: "/gamepad.png",
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      discount: "-40%",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/keyboard.png",
      name: "AK-900 Wired Keyboard",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/monitor.png",
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      discount: "-30%",
      rating: 5,
    },
    {
      id: 4,
      image: "/chair.png",
      name: "S-Series Comfort Chair",
      price: "$375",
      oldPrice: "$400",
      discount: "-25%",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 


 

  // Slider Navigation Logic
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-28">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-4">
        {/* Red Indicator and Text */}
        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
          <div className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-8 bg-red-500 rounded-sm"></div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-red-500">
            Our Product
          </p>
        </div>

        {/* Main Title and Navigation */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
            Explore Our Product
          </h2>
          
          {/* Navigation Arrows - visible on sm screens and up */}
          <div className="hidden sm:flex flex-row gap-2">
            <button
              onClick={handlePrev}
              className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="sm:hidden flex justify-end gap-2 my-4">
        <button
          onClick={handlePrev}
          className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Product Slider */}
      <div className="relative mt-6 md:mt-8">
        <div
          className="flex items-stretch space-x-4 overflow-x-hidden"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]"
            >
              <div className="bg-white rounded-lg p-4 h-full relative">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={900}
                    height={0}
                    className="w-full h-[200px] xs:h-[220px] sm:h-[250px] lg:h-[270px] object-cover rounded bg-gray-200 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    Add to Cart
                  </div>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-semibold">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-red-500 font-bold text-sm sm:text-base">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-500 text-xs sm:text-sm">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Rating Logic */}
                <div className="flex flex-row items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`text-sm sm:text-base ${
                        product.rating > index ? "text-yellow-500" : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs sm:text-sm text-gray-400">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 md:mt-10">
        <Button className="w-[180px] xs:w-[200px] sm:w-[234px] h-[46px] sm:h-[56px] bg-red-500 text-white text-sm sm:text-base">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default Explore;