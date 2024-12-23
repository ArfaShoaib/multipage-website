"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Selling = () => {
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
  const [wishlist, setWishlist] = useState<number[]>([]); // State to track wishlist

  // Handle Previous Button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Handle Next Button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle Wishlist Toggle
  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((item) => item !== id) // Remove from wishlist
        : [...prevWishlist, id] // Add to wishlist
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <div className="w-2 h-2 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-red-500">
            This Month
          </p>
        </div>

        {/* View All Products Button */}
        <Button className="w-full sm:w-[159px] h-12 sm:h-[56px] bg-red-500 text-white hover:bg-red-600 transition-colors">
          View All Products
        </Button>
      </div>

      {/* Section Title */}
      <div className="text-start mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Best Selling Products
        </h2>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end space-x-2 mb-4">
        <button
          onClick={handlePrev}
          className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft className="text-sm md:text-base" />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 shadow p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight className="text-sm md:text-base" />
        </button>
      </div>

      {/* Product Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
            >
              <div className="bg-white rounded-lg p-4 relative h-full group">
                {/* Wishlist Icon */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                >
                  <FaHeart
                    size={20}
                    className={
                      wishlist.includes(product.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  />
                </button>

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={900}
                    height={0}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded bg-gray-200 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    Add to Cart
                  </div>
                </div>

                {/* Product Details */}
                <h3 className="mt-4 text-base md:text-lg font-semibold">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-red-500 font-bold text-sm md:text-base">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-500 text-xs md:text-sm">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex flex-row items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`text-sm ${
                        product.rating > index
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-400">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selling;
