import { FC, useRef, useState } from "react";
import { Box, CardMedia } from "@mui/material";
import theme from "../../theme";
import { Smartphone } from "../../interfaces/Iproducts/types";

interface ProductImagesProps {
  product: Smartphone;
}

const styles = {
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      paddingLeft: "0",
    },
  },

  thumbnailContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
  },

  thumbnail: {
    width: "5rem",
    height: "5rem",
    objectFit: "contain",
    cursor: "pointer",
    position: "relative",
  },

  activeThumbnail: {
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: "-10px",
      width: "4px",
      height: "84%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2px",
    },
  },

  productImage: {
    width: "25rem",
    height: "25rem",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      objectFit: "contain",
      width: "17rem",
      height: "17rem",
    },
  },
};
const ProductImages: FC<ProductImagesProps> = ({ product }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [currentImage, setCurrentImage] = useState<string>(product.image[0]);
  const [activeImage, setActiveImage] = useState<number>(0);

  const heandleMauseEnter = (image: string, index?: number) => {
    setCurrentImage(image);
    setActiveImage(index || 0);
  };
  return (
    <>
      <Box sx={styles.imageContainer}>
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
            },
          }}
        >
          {product.image.map((image, index) => (
            <Box
              key={image}
              onMouseEnter={() => heandleMauseEnter(image, index)}
              sx={{
                ...styles.thumbnail,
                ...(index === activeImage && styles.activeThumbnail),
              }}
            >
              <Box
                ref={ref}
                component="img"
                src={image}
                key={image}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "5rem",
                  height: "5rem",
                  objectFit: "contain",
                  gap: "14px",
                }}
              ></Box>
            </Box>
          ))}
        </Box>
        <CardMedia
          component="img"
          src={currentImage}
          alt={product.name}
          sx={styles.productImage}
        ></CardMedia>
      </Box>
    </>
  );
};

export default ProductImages;
