"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto min-h-screen text-justify">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          src="/sideimage.png"
          alt="side image"
          width={805}
          height={781}
          className="object-cover w-full h-full lg:h-auto"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 sm:px-6 md:px-10 lg:px-20 py-8 lg:py-0">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-[36px] font-medium leading-snug tracking-wide mb-3 lg:mb-5">
          Login To Exclusive
        </h1>
        <p className="text-black text-sm sm:text-base mb-6 lg:mb-8 text-center lg:text-left">
          Enter Your Details Below
        </p>

        {/* Input Fields */}
        <div className="w-full max-w-[351px]">
          {/* Email/Phone Input */}
          <div className="mb-5">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-300 outline-none bg-transparent text-black placeholder-gray-400 py-2"
            />
          </div>
          {/* Password Input */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 outline-none bg-transparent text-black placeholder-gray-400 py-2"
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="w-full max-w-[351px] flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <Button className="w-full sm:w-[143px] h-[49px] bg-red text-white rounded">
            Log In
          </Button>
          <Link href="#!" className="text-red text-sm">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
