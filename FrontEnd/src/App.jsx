import React from "react";
import Layout from "./Layout";
import CropRecommendation from "./components/CropRecom/CropRecomm";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/croprecommendation" element={<CropRecommendation />} />
  
        
        </Route>
      </Routes>
      
      </>
  );
}

