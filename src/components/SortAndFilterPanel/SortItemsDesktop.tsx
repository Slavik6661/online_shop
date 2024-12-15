import { Box, CssVarsProvider, Select, Option, Typography } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useEffect, useState } from "react";

import sortData from "../../jsonData/sortItems.json";
import sort from "../../assets/mobilIcons/filtersProductsIcons/sort.svg";
import {
  selectSortedItems,
  selectSortedProducts,
  setSortConfig,
} from "../../redux/slices/sortSlice";
import { stat } from "fs";

const SortItemsDesktop = () => {
  const dispatch = useAppDispatch();
  const sortItems = useAppSelector(selectSortedItems);
  const sortedProducts = useAppSelector(selectSortedProducts);

  //   const sortedProducts = useAppSelector((state) => state.sort.sortedProducts);

  const [seletctSortItem, setSelectedSortItem] = useState(0);
  const [newSortProducts, setNewSortProducts] = useState<any>(sortedProducts);

  const handleChange = (event: any, selectedSortId: any) => {
    const selectedSortItem = sortItems.find(
      (item) => item.id === selectedSortId
    );
    if (selectedSortItem) {
      console.log(selectedSortItem);

      dispatch(setSortConfig(selectedSortItem));
      setNewSortProducts(sortedProducts);
      console.log(newSortProducts);
    }
  };

  useEffect(() => {
    handleChange(null, sortData[seletctSortItem].id);
  }, []);
  return (
    <>
      <CssVarsProvider>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Кнопка сортировки */}
          <Box
            sx={{
              minWidth: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
            // onClick={handleOpenModalSort}
          >
            <Box
              sx={{
                width: "10%",
                height: "30px",
                backgroundImage: `url(${sort})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Select
              defaultValue={sortData[seletctSortItem].id}
              onChange={handleChange}
              sx={{
                flexGrow: 1,
              }}
            >
              {sortItems.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.value}
                </Option>
              ))}
            </Select>
          </Box>
        </Box>
      </CssVarsProvider>
    </>
  );
};

export default SortItemsDesktop;
