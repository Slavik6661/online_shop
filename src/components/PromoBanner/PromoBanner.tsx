import React, { useEffect, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  bannerIcon4,
  bannerIcon5,
  bannerIcon6,
  bannerIcon7,
} from "../../assets/promoBanner";
import PaginationCardImg from "../PaginationCardImg/PginationCardImg";

const images = [bannerIcon4, bannerIcon5, bannerIcon6, bannerIcon7];
const product = { image: images };
const PromoBanner: React.FC = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePreviousImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage(
          (prevImage) => (prevImage - 1 + images.length) % images.length
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          width: { xs: "100%", sm: "70%", md: "70%" },
          height: { xs: "180px", sm: "250px", md: "250px" },
          position: "relative",
        }}
      >
        <IconButton
          onClick={handlePreviousImage}
          sx={{
            position: "absolute",
            left: "-60px",
            top: "40%",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            [theme.breakpoints.down("sm")]: {
              left: "5px",
              width: "30px",
              height: "30px",
              display: "none",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}

        <IconButton
          onClick={handleNextImage}
          sx={{
            position: "absolute",
            right: "-60px",
            top: "40%",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            [theme.breakpoints.down("sm")]: {
              right: "5px",
              width: "30px",
              height: "30px",
              display: "none",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        <Box sx={{ position: "absolute", bottom: "-30px", width: "100%" }}>
          <PaginationCardImg product={product} currentImage={currentImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default PromoBanner;
