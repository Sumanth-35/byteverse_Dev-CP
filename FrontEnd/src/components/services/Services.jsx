import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className="text-black bg-[#BFEA7C] " data-aos="fade-right">
      <h1 className="flex justify-center   text-3xl p-2">Our Service</h1>
      <div className="p-7 md:flex md:justify-around  md:p-10">
        <Link to="/croprecommendation">
          <div className="flex flex-col items-center m-1">
            <img
              src={img1}
              alt=""
              className="h-[200px] w-[200px] md:w-[220px] md:h-[220px]  rounded-full border-white-800 border-8 transition duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="mt-4 font-bold"> Crop Recommendation</h3>
            <div className="h-[180px] w-[180px] md:w-[200px] md:h-[200px]">
              Crop recommendation is a process in agriculture where data
              analysis, including factors like soil type and climate.
            </div>
          </div>
        </Link>
        <Link to="/cropyield">
          <div className="flex flex-col items-center m-1">
            <img
              src={img2}
              alt=""
              className="h-[180px] w-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover border-white-800 border-8 transition duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="mt-4 font-bold">Crop Yield Prediction</h3>
            <div className="h-[180px] w-[180px] md:w-[200px] md:h-[200px]">
            Crop yield prediction uses machine learning to forecast how much crops will be produced based on historical and current data.
            </div>
          </div>
        </Link>
        <Link to="/cropinfo">
          <div className="flex flex-col items-center m-1">
            <img
              src={img3}
              alt="Service 1"
              className="h-[180px] w-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover border-white-800 border-8 transition duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="mt-4 font-bold">Crop Information</h3>
            <div className="h-[180px] w-[180px] md:w-[200px] md:h-[200px]">
              Crop information refers to data about various crops, including
              their optimal growing conditions such as soil type, temperature,
              rainfall, and humidity.
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;