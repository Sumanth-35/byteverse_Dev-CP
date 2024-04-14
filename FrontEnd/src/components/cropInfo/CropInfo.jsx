import { useEffect } from "react";
import React, { useState } from "react";
import bg from "../assets/2.jpg";
import Aos from 'aos'
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'
const CropSelect = () => {
  const cropNameList = [
    "Wheat",
    "Rice",
    "Maize",
    "Barley",
    "Oats",
    "Sugarcane",
    "Cotton",
    "Tea",
    "Coffee",
    "Cumin",
    "Coriander",
    "Cardamom",
    "Black Pepper",
    "Cloves",
    "Mangoes",
    "Bananas",
    "Apples",
    "Grapes",
    "Oranges",
    "Potatoes",
    "Onions",
    "Tomatoes",
    "Carrots",
    "Spinach",
    "Chickpeas",
    "Lentils",
    "Kidney Beans",
    "Mung Beans",
    "Mustard",
    "Groundnuts",
    "Soybeans",
    "Sesame Seeds",
    "Sorghum",
    "Pearl Millet",
    "Finger Millet",
    "Saffron",
    "Arecanut",
    "Jute",
  ];


  const [selectedCrop, setSelectedCrop] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
    setAnimate(true); // Trigger animation when crop is selected
  };
  const [cropData, setCropData] = useState({
    "Wheat": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "15-25°C during growth, 0-3°C during winter",
      "Rainfall": "50-75 cm",
      "Humidity": "60-80%"
    },
    "Rice": {
      "Soil": "Clayey soil, loamy soil",
      "Temperature": "20-35°C",
      "Rainfall": "100-200 cm",
      "Humidity": "70-80%"
    },
    "Maize": {
      "Soil": "Well-drained fertile soil",
      "Temperature": "21-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "60-70%"
    },
    "Barley": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "15-25°C",
      "Rainfall": "30-100 cm",
      "Humidity": "60-75%"
    },
    "Oats": {
      "Soil": "Well-drained sandy loam",
      "Temperature": "15-20°C",
      "Rainfall": "50-75 cm",
      "Humidity": "60-70%"
    },
    "Sugarcane": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "75-100 cm",
      "Humidity": "70-80%"
    },
    "Cotton": {
      "Soil": "Loamy soil",
      "Temperature": "25-35°C",
      "Rainfall": "50-100 cm",
      "Humidity": "60-80%"
    },
    "Tea": {
      "Soil": "Well-drained acidic soil",
      "Temperature": "20-30°C",
      "Rainfall": "150-250 cm",
      "Humidity": "70-80%"
    },
    "Coffee": {
      "Soil": "Well-drained soil rich in organic matter",
      "Temperature": "15-28°C",
      "Rainfall": "150-250 cm",
      "Humidity": "60-80%"
    },
    "Cumin": {
      "Soil": "Sandy loam to loamy soil",
      "Temperature": "25-30°C",
      "Rainfall": "50-75 cm",
      "Humidity": "40-60%"
    },
    "Coriander": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "15-25°C",
      "Rainfall": "50-75 cm",
      "Humidity": "40-60%"
    },
    "Cardamom": {
      "Soil": "Sandy loam soil",
      "Temperature": "15-25°C",
      "Rainfall": "150-300 cm",
      "Humidity": "70-80%"
    },
    "Black Pepper": {
      "Soil": "Loamy soil with good drainage",
      "Temperature": "25-35°C",
      "Rainfall": "200-300 cm",
      "Humidity": "75-85%"
    },
    "Cloves": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "150-250 cm",
      "Humidity": "60-80%"
    },
    "Mangoes": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "24-30°C",
      "Rainfall": "75-250 cm",
      "Humidity": "50-80%"
    },
    "Bananas": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "25-30°C",
      "Rainfall": "100-200 cm",
      "Humidity": "75-85%"
    },
    "Apples": {
      "Soil": "Loamy soil",
      "Temperature": "15-25°C",
      "Rainfall": "75-100 cm",
      "Humidity": "60-75%"
    },
    "Grapes": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "15-35°C",
      "Rainfall": "50-100 cm",
      "Humidity": "50-70%"
    },
    "Oranges": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "15-35°C",
      "Rainfall": "75-100 cm",
      "Humidity": "50-70%"
    },
    "Potatoes": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "70-80%"
    },
    "Onions": {
      "Soil": "Sandy loam soil",
      "Temperature": "10-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "40-70%"
    },
    "Tomatoes": {
      "Soil": "Loamy soil",
      "Temperature": "15-30°C",
      "Rainfall": "40-100 cm",
      "Humidity": "40-60%"
    },
    "Carrots": {
      "Soil": "Loamy soil",
      "Temperature": "15-25°C",
      "Rainfall": "50-100 cm",
      "Humidity": "60-70%"
    },
    "Spinach": {
      "Soil": "Well-drained fertile soil",
      "Temperature": "10-25°C",
      "Rainfall": "50-75 cm",
      "Humidity": "50-70%"
    },
    "Chickpeas": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "30-50 cm",
      "Humidity": "50-80%"
    },
    "Lentils": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "15-25°C",
      "Rainfall": "20-30 cm",
      "Humidity": "50-70%"
    },
    "Kidney Beans": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "15-25°C",
      "Rainfall": "40-60 cm",
      "Humidity": "50-80%"
    },
    "Mung Beans": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "25-30°C",
      "Rainfall": "40-60 cm",
      "Humidity": "60-80%"
    },
    "Mustard": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "10-25°C",
      "Rainfall": "50-75 cm",
      "Humidity": "60-75%"
    },
    "Groundnuts": {
      "Soil": "Sandy loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "50-80%"
    },
    "Soybeans": {
      "Soil": "Loamy soil",
      "Temperature": "20-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "50-80%"
    },
    "Sesame Seeds": {
      "Soil": "Well-drained loamy soil",
      "Temperature": "20-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "50-75%"
    },
    "Sorghum": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "30-65 cm",
      "Humidity": "40-70%"
    },
    "Pearl Millet": {
      "Soil": "Sandy loam soil",
      "Temperature": "25-35°C",
      "Rainfall": "40-65 cm",
      "Humidity": "40-60%"
    },
    "Finger Millet": {
      "Soil": "Well-drained fertile soil",
      "Temperature": "20-30°C",
      "Rainfall": "50-100 cm",
      "Humidity": "60-80%"
    },
    "Saffron": {
      "Soil": "Well-drained sandy loam soil",
      "Temperature": "10-35°C",
      "Rainfall": "20-30 cm",
      "Humidity": "40-60%"
    },
    "Arecanut": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "20-30°C",
      "Rainfall": "150-300 cm",
      "Humidity": "70-80%"
    },
    "Jute": {
      "Soil": "Sandy loam to clay loam soil",
      "Temperature": "25-35°C",
      "Rainfall": "150-300 cm",
      "Humidity": "75-85%"
    }
})
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setAnimate(false); // Reset animation flag when component re-renders
  }, [selectedCrop]); // Add selectedCrop to dependencies array

  const {t} =useTranslation()
  return (
    <div
      className="flex flex-col items-center justify-center p-4 mt-20"
      style={style}
      data-aos="fade-right"
    >
      <form className="w-full md:max-w-lg bg-[#cdf1c7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-xl m-2 p-2">
          {t(["select_crop"])}
        </div>

        <select
          id="cropSelect"
          className="shadow border rounded w-full py-2 px-3 text-[#a56d39] leading-tight focus:outline-none focus:shadow-outline"
          required
          value={selectedCrop}
          onChange={handleCropChange}
        >
          <option value="">{t(["select_season"])}</option>
          {cropNameList.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </select>
        {selectedCrop && (
          <div className="p-2 " data-aos= "fade-up">
            <h3>Crop Name: {selectedCrop}</h3>
            <p>Soil: {cropData[selectedCrop].Soil}</p>
            <p>Temperature: {cropData[selectedCrop].Temperature}</p>
            <p>Rainfall: {cropData[selectedCrop].Rainfall}</p>
            <p>Humidity: {cropData[selectedCrop].Humidity}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CropSelect;
