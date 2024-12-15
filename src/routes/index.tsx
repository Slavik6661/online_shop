import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductCatalog from "../pages/ProductCatalog";
import Basket from "../pages/Basket";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:id" element={<ProductCatalog />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};
export default AppRoutes;
