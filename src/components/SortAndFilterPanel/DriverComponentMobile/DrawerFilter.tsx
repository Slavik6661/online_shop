import { Box, Drawer, Typography } from "@mui/joy";
import Filter from "../../FilterMenu/Filter";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { UiState } from "../../../redux/slices/uiSlice";

const DrawerFilter = () => {
  const isOpenFilterModal = useAppSelector(
    (state: { ui: UiState }) => state.ui.modals["filterModal"]
  );
  return (
    <Drawer
      open={isOpenFilterModal}
      anchor="right"
      invertedColors
      size="lg"
      variant="plain"
    >
      <Filter />
    </Drawer>
  );
};

export default DrawerFilter;
