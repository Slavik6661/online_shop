import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getSortedItems, setSortConfig } from "../../redux/slices/sortSlice";
import { Modal, Select, Option, Box, IconButton, Typography } from "@mui/joy";
import sort from "../../assets/mobilIcons/filtersProductsIcons/sort.svg";
import { getProductsByCategorySlice } from "../../redux/slices/getProductSlice";
import useSortItems from "../../hooksComponents/useSortItems";
import ModalSort from "./sortProductModalMobile/ModalSort";
import { openModal } from "../../redux/slices/uiSlice";
import theme from "../../theme";
import { useMediaQuery } from "@mui/material";

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 2,
  },
  select: {
    width: "100%",
  },
  iconButton: {
    width: 19,
    height: 30,
  },
};

const SortItemsMobile = () => {
  const dispatch = useAppDispatch();
  const { sortedItemsList, handleChange, selectSortItem, isLoading } =
    useSortItems();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (sortedItemsList.length > 0) {
      handleChange(sortedItemsList[selectSortItem].id);
    }
  }, [sortedItemsList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        onClick={() => dispatch(openModal("sortModal"))}
      >
        {!isXs && <Typography>Сортировка</Typography>}
        <IconButton>
          <Box component="img" src={sort} sx={styles.iconButton} />
        </IconButton>
      </Box>
      <ModalSort />
    </>
  );
};

export default SortItemsMobile;

{
  /* <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.modal}>
          <Select
            defaultValue={sortedItemsList[0].id}
            onChange={(event, value) => {
              handleChange(value as number);
              setOpen(false);
            }}
            sx={styles.select}
          >
            {sortedItemsList.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.value}
              </Option>
            ))}
          </Select>
        </Box>
      </Modal> */
}
