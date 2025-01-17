import { useEffect } from "react";
import { Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import ScrollBarList from "../ScrollBarList/ScrollBarList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchSales, selectItemSales } from "../../redux/slices/saleSlices";

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectItemSales);

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <ScrollBarList title="Aкции">
      {products.map((product) => (
        <Box key={`${product.id}-${product.type}`} sx={{ cursor: "pointer" }}>
          <ProductCard product={product} viewMode="grid" />
        </Box>
      ))}
    </ScrollBarList>
  );
};

export default ProductList;
