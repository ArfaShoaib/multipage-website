import React from "react";
import { Button } from "@/components/ui/button";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 py-10 lg:px-20 lg:py-20">
      {/* Left Section */}
      <div className="w-full sm:w-[338px] border-2 shadow-lg border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <IoCallOutline className="w-8 h-8 bg-red-500 rounded-full text-white p-2" />
          <span className="font-medium text-[16px] leading-[24px]">Call To Us</span>
        </div>
        <p className="text-center text-[14px] leading-[21px] mb-4">
          We are available 24/7, 7 days a week.
        </p>
        <p className="font-medium text-center text-[14px] leading-[21px] mb-5">
          Phone: +880181111222
        </p>
        <hr className="border border-black mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <FaRegEnvelope className="w-8 h-8 bg-red-500 rounded-full text-white p-2" />
          <span className="font-medium text-[16px] leading-[24px]">Write To Us</span>
        </div>
        <p className="text-[14px] leading-[21px] mb-2">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-[14px] leading-[21px] mb-2 text-center">
          Emails: customer@exclusive.com
        </p>
        <p className="text-[14px] leading-[21px] text-center">
          Emails: support@exclusive.com
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[800px] border-2 shadow-lg border-gray-200 p-6 sm:p-8">
        <form>
          {/* Input Fields */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name *"
              required
              className="w-full md:w-1/3 h-[50px] px-4 py-2 border rounded-md bg-gray-200"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email *"
              required
              className="w-full md:w-1/3 h-[50px] px-4 py-2 border rounded-md bg-gray-200"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone *"
              required
              className="w-full md:w-1/3 h-[50px] px-4 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Textarea */}
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md bg-gray-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end">
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md w-[215px] h-[56px]"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
