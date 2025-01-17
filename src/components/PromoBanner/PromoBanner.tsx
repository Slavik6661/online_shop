import React, { useEffect, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { bannerIcon, bannerIcon2, bannerIcon3 } from "../../assets/promoBanner";
import PaginationCardImg from "../PaginationCardImg/PginationCardImg";

const images = [
  "https://cdn.citilink.ru/xMTRNakpEguZQ6pPRK3urwgS3UyUVaYz-C0FzXKgnkU/resizing_type:fit/gravity:sm/width:1480/height:250/plain/banners/nw_banner_3_21348_A_1731494648.jpg",
  "https://cdn.citilink.ru/clf4FULDueipMhYpOPUvbxlyL_Tgn-972RA6IJ_gamo/resizing_type:fit/gravity:sm/width:1480/height:250/plain/banners/nw_banner_3_21497_A_1733398086.jpg",
  "https://cdn.citilink.ru/m5nsaoTtl7vQrjLuxIRj9xMjWjt67bduD6OmwgvfVJk/resizing_type:fit/gravity:sm/width:1480/height:250/plain/banners/nw_banner_3_21395_A_1732001805.jpg",
  "https://cdn.citilink.ru/4L4V3Fa_e4UOrfntUsifkqrQszrsicfHz8dRvtSTZrE/resizing_type:fit/gravity:sm/width:1480/height:250/plain/banners/nw_banner_3_21526_A_1733742810.jpg",
];
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
