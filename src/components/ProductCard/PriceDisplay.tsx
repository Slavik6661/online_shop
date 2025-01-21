import { FC } from "react";
import { Box } from "@mui/joy";

import { Typography, useTheme } from "@mui/material";
interface PriceDisplayProps {
  price: number;
  oldPrice?: number;
}
const PriceDisplay: FC<PriceDisplayProps> = ({ price, oldPrice }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginBottom: theme.spacing(2),
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            marginRight: theme.spacing(1),
            color: theme.palette.primary.main,
          }}
        >
          {price.toLocaleString()}₽
        </Typography>

        {oldPrice && (
          <Typography
            variant="h6"
            component="div"
            sx={{
              textDecoration: "line-through",
              color: theme.palette.text.disabled,
            }}
          >
            {oldPrice?.toLocaleString()} ₽
          </Typography>
        )}
      </Box>
    </>
  );
};

export default PriceDisplay;
