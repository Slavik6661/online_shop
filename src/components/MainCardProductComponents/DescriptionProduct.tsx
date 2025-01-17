import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "../../interfaces/Iproducts/products";
import theme from "../../theme";

interface ProductDescriptionProps {
  product: Product;
}
const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <Box
      sx={{
        display: "block",
        justifyContent: "space-between",
        gap: 2,
        width: "auto",
        padding: 2,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Описание:
      </Typography>
      <Typography variant="body1">{product.description}</Typography>
    </Box>
  );
};
export default ProductDescription;
