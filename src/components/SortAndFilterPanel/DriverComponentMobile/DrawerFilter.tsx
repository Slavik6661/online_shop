import { useAppSelector } from "../../../redux/hooks/hooks";
import { stateModal } from "../../../redux/slices/uiSlice";
import { Drawer } from "@mui/joy";
import Filter from "../../FilterMenu/Filter";

const DrawerFilter = () => {
  const modalState = useAppSelector(stateModal).filterModal || false;

  return (
    <Drawer
      open={modalState}
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
