import React,{useEffect} from "react";
import HeroImg from "../assets/1.jpg";
import Services from '../services/Services'
import { useTranslation } from "react-i18next";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const style = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const { t } = useTranslation();

  return (<>
    <div className="h-screen  flex flex-col justify-center  px-[2rem] md:px-[4rem]" style={style}>
      <div className="text-green-600 text-2xl font-bold md:text-[5rem] " data-aos="fade-up"> Farm AI </div>
      <p className="text-white text-xl md:text-[2rem] leading-normal w-2/3 font-bold mt-5 md:mt-12" data-aos="fade-up">
      {t(["home_text"])}
     </p>
    </div>
    <Services/>
    </>
  );
};

export default Home;
