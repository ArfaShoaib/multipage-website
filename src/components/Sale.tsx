'use client';
import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
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
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

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

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((productId) => productId !== id)
        : [...prevWishlist, id]
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 mt-8 sm:mt-16 md:mt-28">
      <div className="flex items-center space-x-2 mb-4 justify-start">
        <div className="w-2 h-2 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>
        <p className="text-base md:text-xl font-semibold text-red-500">Today&apos;s</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Flash Sales</h2>

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
        {/* Products go here */}
      </div>

      <div className="flex justify-center mt-6 md:mt-10">
        <Button className="w-48 md:w-[234px] h-12 md:h-[56px] bg-red-500 text-white hover:bg-red-600 transition-colors">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default Sale;
