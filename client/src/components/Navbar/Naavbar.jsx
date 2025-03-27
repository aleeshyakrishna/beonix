import React from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full flex justify-between items-center px-6 py-4 fixed top-0 left-0 z-50 backdrop-blur-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="" className="h-[50px] w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-300 transition">
          About Us
        </a>
        <div className="relative group">
          <div className="flex items-center text-white hover:text-gray-300 transition cursor-pointer">
            Solutions
            <ChevronDown size={16} className="ml-1" />
          </div>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-yellow-400 text-black font-medium rounded-full px-6 py-2 hover:bg-yellow-300 transition flex items-center"
        >
          Contact Us
          <span className="ml-1">→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
