import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  let Links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Crop Recommendation", link: "/croprecommendation" },
    { id: 3, name: "Yield Prediction", link: "/cropyield" },
    // { id: 4, name: "Disease Prediction", link: "/disease-prediction" },
    { id: 5, name: "Crop Information", link: "/cropinfo" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div  className="shadow-md w-full fixed top-0 left-0 z-[100] animate-fade-down animate-once animate-duration-[2000ms] animate-ease-out">
      <div className="md:flex items-center justify-between py-2 bg-white md:px-10 px-7">
        {/* logo section */}
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-4">
            <img className="w-16" src={logo} alt="logo" />
            <span className="text-xl md:text-1.7xl">FARM AI</span>
          </div>
        </Link>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.id} className="md:ml-8 md:my-0 my-7 font-semibold">
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-green-700 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <button className="btn bg-green-700 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Help
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
