import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 group overflow-hidden">

      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0">

        <div className="text-[#2b2b2b] space-y-6 transform transition-all duration-700 group-hover:-translate-x-4">

          {/* top label */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-black"></span>
            <p className="text-xs md:text-sm tracking-[5px] uppercase">
              New Collection
            </p>
          </div>

          {/* main heading */}
          <h1 className="font-[Prata] text-4xl md:text-5xl lg:text-6xl leading-tight">
            Latest <span className="font-semibold">Arrivals</span>
          </h1>

          {/* divider */}
          <div className="w-20 h-[2px] bg-gray-300"></div>

          {/* shop now */}
          <div className="flex items-center gap-3 cursor-pointer">
            <p className="text-sm md:text-base font-medium tracking-wide">
              SHOP NOW
            </p>

            <span className="w-8 h-[2px] bg-black transition-all duration-500 group-hover:w-16"></span>
          </div>

        </div>

      </div>

      {/* hero right side */}
      <div className="w-full sm:w-1/2 overflow-hidden">

        <img
          src={assets.hero_img}
          alt="hero"
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-x-8"
        />

      </div>

    </div>
  );
};

export default Hero;