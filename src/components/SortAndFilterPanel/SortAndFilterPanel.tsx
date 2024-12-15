import { useState } from "react";
import { Box, Typography } from "@mui/joy";
import sort from "../../assets/mobilIcons/filtersProductsIcons/sort.svg";
import filter from "../../assets/mobilIcons/filtersProductsIcons/filter.svg";
import { CssVarsProvider } from "@mui/joy";
import DrawerFilter from "./DriverComponentMobile/DrawerFilter";
import ModalSort from "./sortProductModalMobile/ModalSort";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { openModal } from "../../redux/slices/uiSlice";

const sortData = [
  "Сначала популярные",
  "Сначала недорогие",
  "Сначала дорогие",
  "По скидке(%)",
  "По количеству отзывов",
  "Сначала с лучшей оценкой",
];

const SortAndFilterPanel = () => {
  const dispatch = useAppDispatch();
  const [seletctSortItem, setSelectedSortItem] = useState(0);

  const handleOpenModalSort = () => {
    dispatch(openModal("sortModal"));
  };
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
            marginBottom: "35px",
            borderBottom: "1px solid #dbc8c8",
          }}
        >
          {/* Кнопка сортировки */}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
            onClick={handleOpenModalSort}
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
            <Typography sx={{ width: "90px" }}>
              {sortData[seletctSortItem]}
            </Typography>
          </Box>

          {/* Кнопка фильтра */}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
            onClick={() => dispatch(openModal("filterModal"))}
          >
            <Box
              sx={{
                width: "10%",
                height: "30px",
                backgroundImage: `url(${filter})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Typography>Фильтры</Typography>
          </Box>
        </Box>
        {/* Модалка  */}
        <ModalSort setSelectedSortItem={setSelectedSortItem} />
        {/* Фильтры */}
        <DrawerFilter />
      </CssVarsProvider>
    </>
  );
};

export default SortAndFilterPanel;
