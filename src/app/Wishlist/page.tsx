'use client'
import Image from "next/image";
import { useState } from "react";

import React from 'react'

const Page = () => {
      // Wishlist state with initial products
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Gucci Duffle Bag", price: 960, image: "/images/bag.png" },
    { id: 2, name: "RGB Liquid CPU Cooler", price: 1960, image: "/images/cpu.png" },
    { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, image: "/images/gamepad.png" },
    { id: 4, name: "Quilted Satin Jacket", price: 750, image: "/images/jacket.png" },
  ]);

  // Function to delete an item
  const handleDelete = (id:number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };
  return (
    <div className="p-4">
    <h1 className="text-2xl font-semibold mb-4">Wishlist ({wishlist.length})</h1>

    {/* Wishlist Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="relative border rounded-lg p-4 shadow-md hover:shadow-lg bg-white"
        >
          {/* Delete Button */}
          <button
            onClick={() => handleDelete(item.id)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            🗑️
          </button>

          {/* Product Image */}
          <Image
            src={item.image}
            alt={item.name}
            width={0}
            height={0}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

          {/* Product Details */}
          <h3 className="text-lg font-medium mb-2">{item.name}</h3>
          <p className="text-red-600 font-semibold">${item.price}</p>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Page
