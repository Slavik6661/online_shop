import { useTheme, useMediaQuery } from "@mui/material";
import SortItemsDesktop from "./SortItemsDesktop";
import MobileFiltersPanel from "./MobileFiltersPanel";

const SortAndFilterPanel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? <MobileFiltersPanel /> : <SortItemsDesktop />;
};

export default SortAndFilterPanel;
