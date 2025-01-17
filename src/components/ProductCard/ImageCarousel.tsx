import { Box } from "@mui/joy";
import { CardMedia } from "@mui/material";
import { FC, useState } from "react";
import { Product } from "../../interfaces/Iproducts/products";
import PaginationCardImg from "../PaginationCardImg/PginationCardImg";

interface ImageCarouselProps {
  product: Product;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();

    const positionX = clientX - left;
    const newIndex = Math.floor((positionX / width) * product.image.length);
    setCurrentImage(
      Math.min(newIndex, product.image.length - 1) === -1 ? 0 : newIndex
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "300px",
        transition: "transform 0.3s background-color 0.2s",
        "&:hover": {
          backgroundColor: "rgba(222, 222, 222, 0.5)",
          transform: "scale(1.05)",
        },
      }}
    >
      {product.image.map((img, index) => (
        <CardMedia
          onMouseMove={handleMouseMove}
          key={index}
          component="img"
          height="270px"
          image={img}
          alt={product.name}
          sx={{
            borderRadius: "10px 10px 0 0",
            padding: "15px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            opacity: currentImage === index ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      ))}
      <PaginationCardImg product={product} currentImage={currentImage} />
    </Box>
  );
};

export default ImageCarousel;
