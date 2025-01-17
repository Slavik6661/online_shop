import { openModal } from "../../../redux/slices/uiSlice";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { Box, Typography } from "@mui/joy";
import filter from "../../../assets/mobilIcons/filtersProductsIcons/filter.svg";
import DrawerFilter from "../DriverComponentMobile/DrawerFilter";
import { useMediaQuery } from "@mui/material";
import theme from "../../../theme";

const FilterButton = () => {
  const dispatch = useAppDispatch();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
        onClick={() => dispatch(openModal("filterModal"))}
      >
        <Box
          sx={{
            width: "26px",
            height: "30px",
            backgroundImage: `url(${filter})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
        {!isXs && <Typography>Фильтры</Typography>}
      </Box>

      <DrawerFilter />
    </>
  );
};

export default FilterButton;
