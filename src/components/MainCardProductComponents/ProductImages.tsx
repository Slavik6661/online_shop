import { FC } from "react";
import { Box, CardMedia } from "@mui/material";
import theme from "../../theme";

interface ProductImagesProps {
  images: string[];
}
const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <Box
          key={image}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "15px",
          }}
        >
          <CardMedia
            component="img"
            src={image}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "5rem",
              height: "5rem",
              objectFit: "contain",
              gap: "14px",
            }}
          ></CardMedia>
        </Box>
      ))}
    </>
  );
};

export default ProductImages;
