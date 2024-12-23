"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full min-h-screen">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 xl:w-[805px]">
        <Image
          src="/sideimage.png"
          alt="image"
          width={805}
          height={781}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-0 lg:w-1/2 xl:w-[371px]">
        <h1 className="text-black text-center lg:text-left font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight tracking-wide mb-4">
          Create an Account
        </h1>
        <p className="text-black text-center lg:text-left text-sm md:text-base lg:text-lg mb-6">
          Enter Your Details Below
        </p>

        {/* Input Fields */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm">
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none bg-transparent text-black placeholder-gray-400 border-b border-gray-300 focus:border-gray-600 py-2"
            />
          </div>

          {/* Email/Phone Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full outline-none bg-transparent text-black placeholder-gray-400 border-b border-gray-300 focus:border-gray-600 py-2"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent text-black placeholder-gray-400 border-b border-gray-300 focus:border-gray-600 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <Button className="w-full h-[45px] bg-red-500 text-white mb-3 hover:bg-red-600 transition duration-200">
              Create Account
            </Button>
            <Button className="w-full h-[45px] bg-white border border-gray-300 text-black hover:bg-gray-100 transition duration-200">
              Signup With Google
            </Button>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-500 text-sm sm:text-base">
            Already Have an Account?
          </span>
          <Link href="/Login" className="text-black underline ml-2 hover:text-gray-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
