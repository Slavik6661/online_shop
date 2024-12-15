import { useEffect, useState } from "react";
import filterData from "../../jsonData/filterData.json";
import { Box, Typography, useTheme } from "@mui/joy";
import FilterGroup from "./FilterGroup";
import { useMediaQuery } from "@mui/material";
import { closeModal, UiState } from "../../redux/slices/uiSlice";
import CloseButton from "../SortAndFilterPanel/DriverComponentMobile/ButtonClose";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

interface FilterProps {
  priceRange: [number, number];
  memoryOption: string[];
  storageOption: string[];
  brands: string[];
  years: number[];
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Filter: React.FC = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {}, []);

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
            backgroundColor: "beige",
            padding: theme.spacing(2),
            // backgroundColor: theme.palette.background.paper,
          }}
        >
          <CloseButton text="Назад" />
          <FilterGroup filterData={filterData} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
            backgroundColor: "beige",
            padding: theme.spacing(2),
            // backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography level="h4" sx={{ marginBottom: theme.spacing(2) }}>
            Фильтры
          </Typography>
          <FilterGroup filterData={filterData} />
        </Box>
      )}
    </>
  );
};

export default Filter;
