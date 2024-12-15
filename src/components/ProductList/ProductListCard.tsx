import { FC } from "react";
import { Box } from "@mui/joy";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../interfaces/products";

interface PrductListCardProps {
  items: Product[];
}

const PrductListCard: FC<PrductListCardProps> = ({ items }) => {
  return (
    <>
      <Box
        sx={{
          margin: "0px auto",
          display: "flex",
          width: "52vw",
          flexWrap: "wrap",
          gap: "30px",
          flexGrow: 1,
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {items.map((item, index) => (
          <Box key={index}>
            <ProductCard product={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PrductListCard;
