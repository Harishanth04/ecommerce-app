import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const policies = [
  {
    title: "Easy Returns",
    desc: "7-day hassle-free returns & exchanges.",
    icon: assets.exchange_icon,
  },
  {
    title: "Premium Quality",
    desc: "Crafted with high-end materials and precision.",
    icon: assets.quality_icon,
  },
  {
    title: "24/7 Support",
    desc: "Always here for you. Fast & reliable help.",
    icon: assets.support_img,
  },
];

const OurPolicy = () => {
  return (
    <section className="bg-white py-28">

      {/* HEADER */}
      <div className="text-center mb-24 px-6">

        <h2 className="text-5xl md:text-6xl font-medium tracking-[10px] uppercase text-black">
          WHY ZERLAN
        </h2>

        <div className="w-14 h-[2px] bg-black mx-auto mt-6"></div>

        <p className="text-gray-500 mt-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Designed for trust. Built for experience. Elevating your fashion journey with quality and care.
        </p>

      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {policies.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-black transition duration-500 overflow-hidden"
          >

            {/* NUMBER BACKGROUND */}
            <div className="absolute inset-0 flex items-end justify-end p-6 pointer-events-none">
              <span className="text-[70px] md:text-[90px] font-extralight text-black/5 group-hover:text-black/10 transition duration-500">
                0{index + 1}
              </span>
            </div>

            {/* INNER CARD */}
            <div className="bg-white rounded-3xl p-8 h-[250px] flex flex-col justify-between relative z-10 transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] group-hover:-translate-y-1">

              {/* TOP */}
              <div className="flex justify-between items-start">

                <h3 className="text-lg font-semibold tracking-wide text-black leading-tight">
                  {item.title}
                </h3>

                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-black transition duration-300">
                  <img
                    src={item.icon}
                    className="w-5 opacity-70 group-hover:invert group-hover:opacity-100 transition"
                    alt=""
                  />
                </div>

              </div>

              {/* DIVIDER */}
              <div className="w-10 h-[1px] bg-gray-200 group-hover:bg-black transition"></div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* DIVIDER LINE */}
      <div className="max-w-5xl mx-auto mt-24 border-t border-gray-200"></div>

      {/* TRUST TEXT */}
      <div className="mt-10 text-center text-xs tracking-[5px] text-gray-400">
        SECURE PAYMENTS • FAST DELIVERY • TRUSTED BRAND
      </div>

    </section>
  );
};

export default OurPolicy;