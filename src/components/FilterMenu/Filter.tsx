import { Box, Typography, useTheme } from "@mui/joy";
import FilterGroup from "./FilterGroup";
import { useMediaQuery } from "@mui/material";
import CloseButton from "../SortAndFilterPanel/DriverComponentMobile/ButtonClose";

const Filter: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileStyle = {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    backgroundColor: "#ffffff",
    padding: theme.spacing(2),
    borderRadius: "5px",
  };

  const desktopStyle = {
    ...mobileStyle,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <Box sx={isMobile ? mobileStyle : desktopStyle}>
        {isMobile ? (
          <CloseButton text="Назад" />
        ) : (
          <Typography level="h4" sx={{ marginBottom: theme.spacing(2) }}>
            Фильтры
          </Typography>
        )}
        <FilterGroup />
      </Box>
    </>
  );
};

export default Filter;
