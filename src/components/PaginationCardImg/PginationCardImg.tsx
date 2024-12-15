import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";

interface PaginationCardImgProps {
  product: any;
  currentImage: number;
}

const PaginationCardImg: React.FC<PaginationCardImgProps> = ({
  product,
  currentImage,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: theme.spacing(2),
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {product.image?.map((_: any, index: React.Key | null | undefined) => (
        <Box
          key={index}
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: currentImage === index ? "blue" : "gray",
          }}
        />
      ))}
    </Box>
  );
};

export default PaginationCardImg;
