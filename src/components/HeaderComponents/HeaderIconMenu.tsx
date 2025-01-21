import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface HeaderIconMenuProps {
  iconSrc: string;
  onClick: () => void;
}

const HeaderIconMenu: React.FC<HeaderIconMenuProps> = ({
  iconSrc,
  onClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Box
          component="span"
          sx={{
            backgroundImage: `url(${iconSrc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "25px",
            height: "25px",

            cursor: "pointer",
            transition: "background-color 0.3s, box-shadow 0.3s", // Плавный переход
            "&:hover": {
              backgroundColor: "rgba(222, 222, 222, 0.5)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            },
          }}
          onClick={onClick}
          role="button"
        />
      ) : (
        <Box
          component="span"
          sx={{
            backgroundImage: `url(${iconSrc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "30px",
            height: "30px",

            cursor: "pointer",
            transition: "background-color 0.3s, box-shadow 0.3s", // Плавный переход
            "&:hover": {
              backgroundColor: "rgba(222, 222, 222, 0.5)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            },
          }}
          onClick={onClick}
          role="button"
        />
      )}
    </>
  );
};

export default HeaderIconMenu;
