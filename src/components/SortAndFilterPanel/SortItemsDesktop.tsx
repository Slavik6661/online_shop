import { useEffect, useState } from "react";
import { Box, CssVarsProvider, Select, Option } from "@mui/joy";
import useSortItems from "../../hooksComponents/useSortItems";
import sort from "../../assets/mobilIcons/filtersProductsIcons/sort.svg";

const styles = {
  container: {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
  },
  sortButtonContainer: {
    minWidth: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  sortIcon: {
    width: "10%",
    height: "30px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  select: {
    flexGrow: 1,
  },
};

const SortItemsDesktop = () => {
  const { sortedItemsList, handleChange, selectSortItem, isLoading } =
    useSortItems();

  useEffect(() => {
    if (sortedItemsList.length > 0) {
      handleChange(sortedItemsList[selectSortItem].id);
    }
  }, [sortedItemsList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CssVarsProvider>
      <Box sx={styles.container}>
        {/* Кнопка сортировки */}
        <Box sx={styles.sortButtonContainer}>
          <Box
            sx={{ ...styles.sortIcon, backgroundImage: `url(${sort})` }}
          ></Box>

          <Select
            defaultValue={sortedItemsList[selectSortItem].id}
            onChange={(event, value) => handleChange(value as number)}
            sx={styles.select}
          >
            {sortedItemsList.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.value}
              </Option>
            ))}
          </Select>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default SortItemsDesktop;
