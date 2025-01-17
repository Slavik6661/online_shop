import { Box } from "@mui/joy";
import SortItemsMobile from "./SortItemsMobile";
import FilterButton from "./FilterButton/FilterBotton";

const MobileFiltersPanel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "20px",
      }}
    >
      <SortItemsMobile />
      <FilterButton />
    </Box>
  );
};

export default MobileFiltersPanel;
