import { useEffect } from "react";
import {
  fetchCategories,
  selectCategories,
} from "../redux/slices/categoriesSlice";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Header from "../components/HeaderComponents/Header";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Catalog from "../components/Catalog/Catalog";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import ProductList from "../components/ProductList/ProductListActions";
import { fetchSales } from "../redux/slices/saleSlices";

const Home = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSales());
  }, [dispatch]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
        }}
      >
        <Header />
        <PromoBanner />
        <Catalog />
        <ProductList />
      </Box>
    </Box>
  );
};

export default Home;
