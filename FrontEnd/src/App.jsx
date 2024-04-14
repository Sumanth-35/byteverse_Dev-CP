import React from "react";
import Home from "./components/Home/Home";
import CropRecommendation from "./components/CropRecom/CropRecomm";
import Layout from "./Layout";
import CropYield from "./components/CropYield/CropYield";
import CropInfo from "./components/cropInfo/CropInfo";
import Help from "./components/Help/Help";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/croprecommendation" element={<CropRecommendation />} />
          <Route path="/cropyield" element={<CropYield />} />
          <Route path="/cropinfo" element={<CropInfo />} />
          <Route path="/help" element={<Help />} />

        </Route>
      </Routes>
      </>
  );
}

