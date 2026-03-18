import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">

        {/* LOGO */}
        <Link to="/">
          <div className="flex flex-col leading-tight">

            <h1 className="text-3xl tracking-[6px] font-bold font-[Kings]">
              <span className="text-black">ZER</span>
              <span className="text-gray-400">LAN</span>
            </h1>

            <h4 className="text-[9px] ml-20 tracking-[7px] pb-1 text-gray-400 uppercase">
              Exclusive
            </h4>

          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 text-[15px] tracking-[2px] font-medium text-gray-700">

          <NavLink to="/" className="relative hover:text-black transition after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Home
          </NavLink>

          <NavLink to="/collection" className="relative hover:text-black transition after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Collection
          </NavLink>

          <NavLink to="/about" className="relative hover:text-black transition after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            About
          </NavLink>

          <NavLink to="/contact" className="relative hover:text-black transition after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            Contact
          </NavLink>

        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* SEARCH */}
          <img
            src={assets.search_icon}
            className="w-[22px] sm:w-5 cursor-pointer relative z-50 hover:scale-110 transition"
            alt="search"
          />

          {/* PROFILE */}
          <div className="relative">

            <img
              src={assets.profile_icon}
              className="w-[22px] sm:w-5 cursor-pointer relative z-50"
              alt="profile"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {profileOpen && (
              <div className="absolute right-0 mt-4 w-40 bg-white text-gray-700 rounded-lg shadow-lg border z-50">

                <p className="px-5 py-2 cursor-pointer hover:bg-gray-100 border-b">
                  My Profile
                </p>

                <p className="px-5 py-2 cursor-pointer hover:bg-gray-100 border-b">
                  Orders
                </p>

                <p className="px-5 py-2 cursor-pointer hover:bg-red-50 text-red-500">
                  Logout
                </p>

              </div>
            )}

          </div>

          {/* CART */}
          <Link to="/cart" className="relative">

            <img
              src={assets.cart_icon}
              className="w-[22px] sm:w-5 cursor-pointer relative z-50 hover:scale-110 transition"
              alt="cart"
            />

            <p className="absolute -bottom-2 -right-2 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
              10
            </p>

          </Link>

          {/* MOBILE MENU ICON */}
          <img
            src={assets.menu_icon}
            onClick={() => setMenuOpen(true)}
            className="w-7 cursor-pointer md:hidden"
            alt="menu"
          />

        </div>

      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 md:hidden ${menuOpen ? "w-64" : "w-0"} overflow-hidden z-50`}>

        <div className="flex flex-col h-full">

          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold tracking-wide">MENU</h2>
            <button onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <NavLink to="/" onClick={() => setMenuOpen(false)} className="py-5 px-6">
            Home
          </NavLink>

          <NavLink to="/collection" onClick={() => setMenuOpen(false)} className="py-5 px-6">
            Collection
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="py-5 px-6">
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="py-5 px-6">
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;