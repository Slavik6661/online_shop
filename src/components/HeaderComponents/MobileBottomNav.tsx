import { BottomNavigation } from "@mui/material";
import theme from "../../theme";
import HeaderIcons from "./HeadersIcons";

const MobileBottomNav = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        width: "100vw",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
        zIndex: theme.zIndex.appBar + 1,
      }}
    >
      <HeaderIcons />
    </BottomNavigation>
  );
};
export default MobileBottomNav;
