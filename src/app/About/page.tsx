import React from "react";
import Image from "next/image";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const Aboutpage = () => {
  return (
    <div className="px-4">
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
          <h1 className="font-semibold text-[32px] md:text-[54px] leading-[44px] md:leading-[64px] tracking-[2px]">
            Our Story
          </h1>
          <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] mt-6 md:mt-10 md:ml-10">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] mt-4 md:mt-5 md:ml-10">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer electronics to fashion.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/about.png"
            alt="About image"
            width={705}
            height={609}
            className="w-full max-w-[400px] md:max-w-[705px] h-auto"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-20">
        {[
          { img: "/about2.png", count: "10.5k", text: "Sellers active on our site" },
          { img: "/about3.png", count: "33k", text: "Monthly Product Sale" },
          { img: "/about4.png", count: "45.5k", text: "Customers active in our site" },
          { img: "/about5.png", count: "25k", text: "Annual gross sale" },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 w-[90%] max-w-[270px] h-[230px] text-center hover:bg-red-100 transition"
          >
            <Image
              src={item.img}
              alt={`Stat ${index}`}
              width={80}
              height={80}
              className="mx-auto mt-9"
            />
            <h1 className="font-bold text-[28px] md:text-[32px] tracking-[4px] mt-5">
              {item.count}
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[24px] mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 md:mt-20">
        {[
          { img: "/about6.png", name: "Tom Cruise", role: "Founder & Chairman" },
          { img: "/about7.png", name: "Emma Watson", role: "Managing Director" },
          { img: "/about8.png", name: "Will Smith", role: "Product Designer" },
        ].map((person, index) => (
          <div key={index} className="text-center">
            <Image
              src={person.img}
              alt={person.name}
              width={370}
              height={430}
              className="mx-auto w-[80%] max-w-[300px] md:max-w-[370px]"
            />
            <h1 className="font-medium text-[24px] md:text-[32px] tracking-[2px] mt-6">
              {person.name}
            </h1>
            <p className="text-[14px] md:text-[16px] mt-2">{person.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              <CiTwitter className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
              <CiInstagram className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
              <RiLinkedinLine className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-20">
        {[
          {
            img: "/about9.png",
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
          },
          {
            img: "/about10.png",
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
          },
          {
            img: "/about11.png",
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="text-center max-w-[300px] w-[90%] p-4"
          >
            <Image
              src={service.img}
              alt={`Service ${index}`}
              width={80}
              height={80}
              className="mx-auto"
            />
            <h1 className="font-semibold text-[18px] md:text-[20px] mt-4">
              {service.title}
            </h1>
            <p className="text-[14px] md:text-[16px] mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutpage;
