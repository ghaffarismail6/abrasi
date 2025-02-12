import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-3 bg-white bg-opacity-50 shadow-md rounded-lg fixed left-1/2 transform -translate-x-1/2 top-5 z-50 w-auto">
      <ul className="flex gap-2 text-lg font-semibold">
        <li className="flex items-center text-green-500 ">
          <a href="#" className="hover:text-blue-900">
            Beranda
          </a>
        </li>
        {/* Divider */}
        <li className="flex items-center">
          <span className="block w-[1px] h-6 bg-gray-400"></span>
        </li>
        <li className="flex items-center text-green-500 ">
          <a href="#slide2" className="hover:text-blue-900">
            Data Story
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
