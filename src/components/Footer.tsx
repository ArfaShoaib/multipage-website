"use client";
import React from "react";
import { IoSendOutline } from "react-icons/io5";
import Image from "next/image";
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-10 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wider">Exclusive</h1>
          <p className="text-xl font-medium">Subscribe</p>
          <p className="text-base">Get 10% off your first order</p>
          <div className="flex border border-white items-center w-full max-w-[243px] h-10">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-2 py-1"
            />
            <IoSendOutline className="w-6 h-6 mr-2" />
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Support</h1>
          <p className="text-base">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-base">exclusive@gmail.com</p>
          <p className="text-base">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Account</h1>
          <p className="text-base">My Account</p>
          <p className="text-base">Login / Register</p>
          <p className="text-base">Cart</p>
          <p className="text-base">Wishlist</p>
          <p className="text-base">Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Quick Link</h1>
          <p className="text-base">Privacy Policy</p>
          <p className="text-base">Terms Of Use</p>
          <p className="text-base">FAQ</p>
          <p className="text-base">Contact</p>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Download App</h1>
          <p className="text-xs font-medium">Save $3 with App New User Only</p>
          <div className="flex space-x-4">
            <Image src="/qrcode.png" alt="QR Code" width={80} height={80} />
            <Image src="/footer.png" alt="App Store" width={80} height={80} />
          </div>
          <div className="flex space-x-4 mt-4">
            <RiFacebookLine className="w-6 h-6 hover:text-gray-300 transition-colors" />
            <LuTwitter className="w-6 h-6 hover:text-gray-300 transition-colors" />
            <IoLogoInstagram className="w-6 h-6 hover:text-gray-300 transition-colors" />
            <CiLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;