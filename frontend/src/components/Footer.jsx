import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-16 py-16 text-gray-600">

      {/* TOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* LOGO + DESC */}
        <div className="flex flex-col leading-tight">

          <h1 className="text-3xl tracking-[6px] font-bold font-[Kings]">
            <span className="text-black">ZER</span>
            <span className="text-gray-400">LAN</span>
          </h1>

         <h4 className="text-[9px] ml-20 tracking-[7px] pb-1 text-gray-400 uppercase">
            Exclusive
          </h4>

          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Elevating your fashion journey with premium quality, modern style, and trusted experience.
          </p>

        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4 tracking-wide">
            COMPANY
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">Collection</li>
            <li className="hover:text-black cursor-pointer transition">About</li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4 tracking-wide">
            SUPPORT
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer transition">Contact</li>
            <li className="hover:text-black cursor-pointer transition">Returns</li>
            <li className="hover:text-black cursor-pointer transition">FAQ</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4 tracking-wide">
            GET IN TOUCH
          </h3>

          <p className="text-sm">📞 +94 77 123 4567</p>
          <p className="text-sm mt-2 break-all">
            📧 zerlanexclusive@gmail.com
          </p>

          {/* DEV CREDIT */}
          <div className="mt-6">
            <p className="text-xs text-gray-400">Developed by</p>
            <p className="text-sm font-medium text-black">
              Harishanthan
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-xs text-gray-400 tracking-[3px]">
        © 2026 Zerlan Exclusive. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;