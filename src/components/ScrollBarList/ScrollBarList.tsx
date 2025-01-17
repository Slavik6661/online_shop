import React, { ReactNode, useRef } from "react";
import { Box, Button, SxProps, Typography, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface ScrollBarListProps {
  title: string;
  children: ReactNode;
  sx?: SxProps;
}

const ScrollBarList: React.FC<ScrollBarListProps> = ({
  title,
  children,
  sx,
}) => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragginRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      console.log(scrollContainerRef.current);

      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      isDragginRef.current = true;
      startXRef.current = e.clientX;
      scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (scrollContainerRef.current && isDragginRef.current) {
      const dx = e.clientX - startXRef.current;
      scrollContainerRef.current.scrollLeft = scrollLeftRef.current - dx;
    }
  };

  const handleMouseUp = () => {
    isDragginRef.current = false;
  };

  const handleMouseLeave = () => {
    isDragginRef.current = false;
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(4),
          maxWidth: {
            xs: "100%",
            md: "85%",
            sm: "85%",
            lg: "85%",
            xl: "85%",
            xxl: "85%",
          },
          margin: "0 auto",
          ...sx,
        }}
      >
        <Typography
          variant="h4"
          sx={{ paddingBottom: theme.spacing(4), textAlign: "center" }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Кнопка прокрутки влево */}
          <Button
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: "-100px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "50%",
              minWidth: "40px",
              width: "60px",
              height: "60px",
              display: { xs: "none", md: "flex" },
              "&:hover": {
                backgroundColor: "rgba(222, 222, 222, 0.5)",
              },
            }}
          >
            <ChevronLeftIcon />
          </Button>

          {/* Контейнер с прокруткой */}
          <Box
            ref={scrollContainerRef}
            // {Прокрутка мышкой по горизонтали}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            // {Прокрутка мышкой по горизонтали}
            sx={{
              display: "flex",
              gap: "72px",
              overflowX: "auto",
              scrollBehavior: "smooth",
              padding: theme.spacing(1),
              "&::-webkit-scrollbar": {
                display: "none",
                height: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius,
              },
            }}
          >
            {children}
          </Box>

          {/* Кнопка прокрутки вправо */}
          <Button
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-100px",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "50%",
              minWidth: "40px",
              width: "60px",
              height: "60px",
              display: { xs: "none", md: "flex" },
              "&:hover": {
                backgroundColor: "rgba(222, 222, 222, 0.5)",
              },
            }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ScrollBarList;
