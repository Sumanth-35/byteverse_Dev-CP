import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
      </>
  );
}

