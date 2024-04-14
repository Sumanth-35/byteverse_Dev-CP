import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const {t} =useTranslation()

  return (
    <footer className="bg-white" data-aos="fade-up">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex ">
          <div className=" mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-green-700 ">
                Farm AI
              </span>
             
            </Link>
          </div>
          
          <div className="flex justify-end sm:gap-6 sm:grid-cols-2">
          <div className="w-2/3 text-xl text-wrap m-2 p-5">{t(["footer_text"])}</div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium my-2">
            
                <li  className="mb-4">
                  <Link
                    to="/"
                    className="hover:underline hover:text-green-700 "
                  >
                  {t(["home"])}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/croprecommendation"
                    className="hover:underline hover:text-green-700 "
                  >
                    {" "}
                    {t(["cropRecom"])}

                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/cropyield"
                    className="hover:underline hover:text-green-700 "
                  >
                  {t(["yieldPrediction"])}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/cropinfo"
                    className="hover:underline hover:text-green-700 "
                  >
                   {t(["cropInfo"])}
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023
            </span>
            <span
              className="hover:underline"> Farm AI™. All Rights Reserved.
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
