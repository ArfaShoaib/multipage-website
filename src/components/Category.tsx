"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Category = {
  id: number;
  name: string;
  icon: string;
};

const categories: Category[] = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Computers", icon: "💻" },
  { id: 3, name: "SmartWatch", icon: "⌚" },
  { id: 4, name: "Camera", icon: "📷" },
  { id: 5, name: "HeadPhones", icon: "🎧" },
  { id: 6, name: "Gaming", icon: "🎮" },
];

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<number>(4);

  // Category click handler
  const handleCategoryClick = (id: number) => {
    setActiveCategory(id);
  };

  // Slider Navigation Logic
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Category Header */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-2 h-2 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-red-500">
          Category
        </p>
      </div>

      {/* Navigation and Header Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-0">
          Browse By Category
        </h2>

        {/* Navigation Arrows */}
        <div className="flex space-x-2 self-end">
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
      </div>

      {/* Categories Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.25rem)] lg:w-[calc(20%-1.5rem)]
                flex flex-col items-center justify-center 
                p-3 sm:p-4 
                cursor-pointer 
                rounded-md 
                border border-gray-300 
                shadow-md 
                transition-all 
                duration-300 
                hover:bg-red-50 
                hover:border-red-300
                ${
                  activeCategory === category.id
                    ? "bg-red-100 border-red-500"
                    : ""
                }
              `}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">
                {category.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;