import { useState } from "react";
import { Box, Drawer, Typography } from "@mui/joy";
import Filter from "../FilterMenu/Filter";

const DrawerFilter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  return (
    <Drawer
      open={filterIsOpen}
      onClose={() => setFilterIsOpen(false)}
      anchor="right"
      invertedColors
      size="lg"
      variant="plain"
    >
      <Box onClick={() => setFilterIsOpen(false)}>
        <Typography>Фильтры</Typography>
      </Box>
      <Filter />
    </Drawer>
  );
};

export default DrawerFilter;
