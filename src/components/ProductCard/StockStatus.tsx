import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "../../interfaces/Iproducts/products";
import FavoriteButton from "./FavoriteButton";

interface StockStatusProps {
  inStock: boolean;
  product: Product;
}

const StockStatus: FC<StockStatusProps> = ({ inStock, product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography color={inStock ? "success" : "danger"}>
        {inStock ? "В наличии" : "Нет в наличии"}
      </Typography>

      <FavoriteButton product={product} />
    </Box>
  );
};

export default StockStatus;
