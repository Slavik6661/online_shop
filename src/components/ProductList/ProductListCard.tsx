import { FC } from "react";
import { Box } from "@mui/joy";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../interfaces/Iproducts/products";
import theme from "../../theme";

interface ProductListCardProps {
  items: Product[];
  viewMode?: "grid" | "list";
}

const ProductListCard: FC<ProductListCardProps> = ({ items, viewMode }) => {
  const gridStyles = {
    margin: "0px auto",
    display: "flex",
    width: "57vw",
    flexWrap: "wrap",
    gap: "30px",
    // justifyContent: { xs: "center", md: "" },

    [theme.breakpoints.down("xl")]: {
      width: "65vw",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  };

  const listStyles = {
    margin: "0px auto",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <Box sx={viewMode === "grid" ? gridStyles : listStyles}>
      {items.map((item, index) => (
        <Box key={index}>
          <ProductCard product={item} viewMode={viewMode} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductListCard;
