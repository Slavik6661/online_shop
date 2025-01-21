import { useState } from "react";
import { Box, Slider, Typography, useTheme, AccordionDetails } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

interface FilterPriceProps {
  rangePrice: number[];
}

const FileterPrice: React.FC<FilterPriceProps> = ({ rangePrice }) => {
  const theme = useTheme();
  const [priceRange, setPriceRange] = useState(rangePrice);

  const onFilterChange = (filterName: string, value: string) => {
    console.log(`Filter changed: ${filterName} -> ${value}`);
  };

  const handlePriceChange = (event: Event, value: number | number[]) => {
    setPriceRange(value as number[]);
    onFilterChange("priceRange", value.toString());
  };

  return (
    <CssVarsProvider>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            level="body-lg"
            variant="plain"
            sx={{
              display: "flex",
              width: "280px",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <Typography
              sx={{
                width: "100px",
                border: "solid 1px #dfd3d3",
                padding: "7px",
                borderRadius: "5px",
              }}
            >
              от {priceRange[0]}
            </Typography>
            <Typography
              sx={{
                marginLeft: theme.spacing(1),
                border: "solid 1px #dfd3d3",
                padding: "7px",
                borderRadius: "5px",
              }}
            >
              до {priceRange[1]}
            </Typography>
          </Typography>

          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={200000}
            step={1000}
            sx={{ flexGrow: 1 }}
          />
        </Box>
      </AccordionDetails>
    </CssVarsProvider>
  );
};
export default FileterPrice;
