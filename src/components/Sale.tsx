'use client';
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Sale = () => {
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
  const [timeLeft, setTimeLeft] = useState(86400);
  const [wishlist, setWishlist] = useState<number[]>([]); // Wishlist state

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert timeLeft to Days, Hours, Minutes, and Seconds
  const formatTime = () => {
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

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

  // Wishlist Toggle Logic
  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((productId) => productId !== id)
        : [...prevWishlist, id]
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 mt-8 sm:mt-16 md:mt-28">
      {/* Section Title */}
      <div className="flex items-center space-x-2 mb-4 justify-start">
        <div className="w-2 h-2 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>
        <p className="text-base md:text-xl font-semibold text-red-500">Today's</p>
      </div>

      {/* Header and Timer Container */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Flash Sales</h2>

        {/* Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center w-full md:w-auto">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
          ].map(({ label, value }, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-600">{label}</span>
              <span className="text-lg sm:text-2xl md:text-[32px] font-bold">
                {String(value).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
            >
              <div className="bg-white rounded-lg p-4 relative h-full">
                <div className="relative group">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded bg-gray-200 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>

                  {/* Wishlist Icon */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                  >
                    <FaHeart
                      className={`text-lg ${
                        wishlist.includes(product.id) ? "fill-current" : "stroke-current"
                      }`}
                    />
                  </button>

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    Add to Cart
                  </div>
                </div>

                {/* Product Details */}
                <h3 className="mt-4 text-base md:text-lg font-semibold">{product.name}</h3>
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
                        product.rating > index ? "text-yellow-500" : "text-gray-400"
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

      {/* View All Products Button */}
      <div className="flex justify-center mt-6 md:mt-10">
        <Button className="w-48 md:w-[234px] h-12 md:h-[56px] bg-red-500 text-white hover:bg-red-600 transition-colors">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default Sale;
