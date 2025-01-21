import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductCatalog from "../pages/ProductCatalog";
import Basket from "../pages/Basket";
import FavoritProducts from "../pages/FavoritProducts";
import MainCardProduct from "../pages/MainCardProduct";
import { useAppSelector } from "../redux/hooks/hooks";
import { selectThisCategory } from "../redux/slices/categoriesSlice";

const AppRoutes = () => {
  const category = useAppSelector(selectThisCategory)?.type;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:id" element={<ProductCatalog />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/favorit" element={<FavoritProducts />} />
      <Route path={`/product/${category}/:id`} element={<MainCardProduct />} />
    </Routes>
  );
};
export default AppRoutes;
