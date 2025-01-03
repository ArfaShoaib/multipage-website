"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-2 mt-4 sm:mt-10 lg:px-10 xl:px-20">
        {/* Logo */}
        <div className="flex items-center ml-0 sm:ml-10 lg:ml-20">
          <Image
            src="/Exclusive.png"
            alt="Exclusive Logo"
            width={118}
            height={24}
            className="w-24 sm:w-full"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`fixed inset-0 bg-white z-20 flex flex-col items-center justify-center
          lg:static lg:flex lg:flex-row lg:space-x-8 xl:space-x-16
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "visible" : "invisible"} lg:visible`}
        >
          {/* Close button for mobile menu */}
          {isMenuOpen && (
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black lg:hidden"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          )}
          
          <Link href="/" className="py-2 lg:py-0 text-black hover:text-gray-600 hover:underline hover:underline-offset-4">
            Home
          </Link>
          <Link href="/Contact" className="py-2 lg:py-0 text-black hover:text-gray-600 hover:underline hover:underline-offset-4">
            Contact
          </Link>
          <Link href="/About" className="py-2 lg:py-0 text-black hover:text-gray-600 hover:underline hover:underline-offset-4">
            About
          </Link>
          <Link href="/Signup" className="py-2 lg:py-0 text-black hover:text-gray-600 hover:underline hover:underline-offset-4">
            Signup
          </Link>
        </div>

        {/* Icons and Search */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white p-4 z-20 flex justify-around
          lg:static lg:flex lg:items-center lg:space-x-4 xl:space-x-6 lg:mr-10 xl:mr-20
          ${isMenuOpen ? "translate-y-0" : "translate-y-0"} lg:translate-y-0 transition-transform duration-300 ease-in-out`}
        >
          {/* Desktop Search */}
          <div className="hidden lg:flex items-center border-2 rounded px-2 py-2 bg-gray-200">
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="outline-none bg-transparent text-black placeholder-gray-400 w-[150px] xl:w-[243px] h-[30px]"
            />
            <CiSearch className="text-black ml-5 w-[32px] h-[32px]" />
          </div>

          {/* Icons */}
          <Link href={'/Wishlist'}><CiHeart className="text-black text-xl w-6 h-6 lg:w-8 lg:h-8" /></Link>
          <MdOutlineShoppingCart className="text-black text-xl w-6 h-6 lg:w-8 lg:h-8" />

          {/* User Icon with Dropdown */}
          <div className="relative">
            <button onClick={toggleUserMenu} className="focus:outline-none">
              <FiUser className="text-white rounded-full text-[20px] w-6 h-6 lg:w-9 lg:h-8 bg-[#DB4444]" />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30 lg:w-[225px] lg:h-[208px]">
                <Link
                  href="/account"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  <FiUser className="mr-2" /> Manage My Account
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  📦 My Order
                </Link>
                <Link
                  href="/cancellations"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  ❌ My Cancellations
                </Link>
                <Link
                  href="/reviews"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  ⭐ My Reviews
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  🔐 Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden w-full px-4 mt-2 absolute top-full left-0">
          <div className="flex items-center border-2 rounded px-2 py-2 bg-gray-200">
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="outline-none bg-transparent text-black placeholder-gray-400 w-full h-[30px]"
            />
            <CiSearch className="text-black ml-2 w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="border border-gray-200"></div>
    </nav>
  );
};

export default Navbar;