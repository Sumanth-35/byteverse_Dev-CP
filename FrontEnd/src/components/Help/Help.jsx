import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

const Help = () => {
  const [showSteps1, setShowSteps1] = useState(false);
  const [showSteps2, setShowSteps2] = useState(false);
  const [showSteps3, setShowSteps3] = useState(false);

  const toggleSteps1 = () => {
    setShowSteps1(!showSteps1);
  };
  const toggleSteps2 = () => {
    setShowSteps2(!showSteps2);
  };
  const toggleSteps3 = () => {
    setShowSteps3(!showSteps3);
  };

  return (
    <div>
      <span>
      <h5>Crop Recommendation</h5>
      <SlArrowDown onClick={toggleSteps1} />
      {showSteps1 ? 'Hide Steps' : 'Show Steps'}
      </span>
      {showSteps1 && (

        <div>
          <h2>How to Use:</h2>
          <ol>
            <li>Enter the values of N, P, K nutrient levels and the pH of the soil in the input fields provided. You can know the values by using soil testing kits</li>
            <li>It is optional to fill the other features - Rainfall,Temparature,Humidity. Otherwise you can just enter your State and District </li>
            <li>Click on the "Submit" button to see the recommended crop</li>
          </ol>
        </div>
      )}


    <span>
    <h6>Yield Prediction</h6>
    <SlArrowDown onClick={toggleSteps2}/>
      {showSteps2 ? 'Hide Steps' : 'Show Steps'}
    </span>
    {showSteps2 && (
      <div>
        <h2>How to Use:</h2>
        <ol>
          <li>Enter the crop name,Season,Area</li>
          <li>It is optional to fill Rainfall. Otherwise you can just enter your State and District </li>
          <li>Click on the "Submit" button to see how much yield you get of that crop </li>
        </ol>
        </div>
    )};


        <span>
    <h6>Disease Prediction</h6>
    < SlArrowDown onClick={toggleSteps3}/>
      {showSteps3 ? 'Hide Steps' : 'Show Steps'}
    </span>
    {showSteps3 && (
      <div>
        <h2>How to Use:</h2>
        <ol>
          <li>Upload the Image of Infected part of the plant in '.jpg'/'.jpeg' format</li>
          <li>Click on the "Submit" button to see Which disease that crop </li>
        </ol>

      </div>
    )};


  </div>
);
};
export default Help;