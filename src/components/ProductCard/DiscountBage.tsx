import { FC } from "react";
import { Box, useTheme } from "@mui/material";

const DiscountBadge: FC<{ discount: string }> = ({ discount }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: "fit-content",
        textAlign: "center",
        top: theme.spacing(1),
        right: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        borderRadius: "5px",
        padding: theme.spacing(0.5),
        zIndex: 1,
        fontSize: "18px",
      }}
    >
      {discount}
    </Box>
  );
};

export default DiscountBadge;
