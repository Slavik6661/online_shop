import React from "react";
import { Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import ScrollBarList from "../ScrollBarList/ScrollBarList";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectItemSales } from "../../redux/slices/saleSlices";

const ProductList: React.FC = () => {
  const products = useAppSelector(selectItemSales);
  console.log("selectItemSales", products);

  return (
    <ScrollBarList title="Aкции">
      {products.map((product) => (
        <Box key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </ScrollBarList>
  );
};

export default ProductList;
