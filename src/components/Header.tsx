'use client'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
  return (
    <div className='flex justify-between items-center bg-black h-[48px] px-4 py-2 xs:px-2 xs:py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 2xl:justify-center'>
       <div className='flex items-center space-x-3'>
      <span className='text-[#FAFAFA] text-[14px] xs:text-[10px] sm:text-[10px] md:text-base lg:text-lg xl:text-[14px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
      <span className='text-[#FAFAFA] text-[14px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] ml-3 underline font-semibold'>ShopNow</span>
      </div>
      <h1 className='flex items-center text-[#FAFAFA] ml-20 text-[14px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] 2xl:ml-[300px]'>
        English <RiArrowDropDownLine className='ml-1' />
      </h1>
    </div>
  )
}

export default Header
