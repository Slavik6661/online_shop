import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

import { Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

import {
  selectSortedProducts,
  featchSortItems,
} from "../redux/slices/sortSlice";
import { selectThisCategory } from "../redux/slices/categoriesSlice";
import MobileProductCatalog from "../components/ProductCatalog/MobileProductCatalog";
import DesktopProductCatalog from "../components/ProductCatalog/DesktopProductCatalog";

import {
  viewModeGridActive,
  viewModeGridNotActive,
  viewModeListActive,
  viewModeListNotActive,
} from "../assets/ViewingModeIcons";
import { featchProduct } from "../redux/slices/getProductSlice";
import { smartphoneFilterSelector } from "../redux/slices/filtersProductSlice/smartphoneFilter";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },

  contentWrapper: (isMobile: boolean) => ({
    display: "flex",
    width: isMobile ? "100vw" : "90vw",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: isMobile ? "60px" : "0px",
  }),

  viewModeSwitcher: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    cursor: "pointer",
  },

  viewModeSwitcherItem: {
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#cfc5c170",
      borderRadius: "5px",
    },
  },

  productListContainer: {
    flexGrow: 1,
    borderTop: "1px solid #bebdfff2",
    paddingTop: "16px",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
  },
};

const ProductCatalog = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  //сделать так то бы сорт продукт принимал в себя массив продуктов и сортировал иначе сортировл стандартный массив
  const sortedProducts = useAppSelector(selectSortedProducts);
  const filterListSmartphones = useAppSelector(smartphoneFilterSelector);
  const selectedCategory = useAppSelector(selectThisCategory)?.type;

  //Вынести логику в Store
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filteredProducts = useMemo(() => {
    return sortedProducts;
    // return filterListSmartphones.length === 0
    //   ? sortedProducts
    //   : filterListSmartphones;
  }, [sortedProducts, filterListSmartphones, selectedCategory]);

  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
    [filteredProducts, ITEMS_PER_PAGE]
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = useMemo(
    () => filteredProducts.slice(startIndex, endIndex),
    [filteredProducts, startIndex, endIndex]
  );

  useEffect(() => {
    if (selectedCategory) {
      dispatch(featchProduct({ category: selectedCategory }));
    }
  }, []);

  useEffect(() => {
    dispatch(featchSortItems());
  }, []);

  //Вынести логику в Store
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const ViewModeSwitcher = () => (
    <Box sx={styles.viewModeSwitcher}>
      <Box
        component="img"
        src={viewMode === "list" ? viewModeListActive : viewModeListNotActive}
        alt="list-arrowLeft"
        onClick={() => setViewMode("list")}
        sx={styles.viewModeSwitcherItem}
      />
      <Box
        component="img"
        src={viewMode === "grid" ? viewModeGridActive : viewModeGridNotActive}
        alt="grid-arrowLeft"
        onClick={() => setViewMode("grid")}
        sx={styles.viewModeSwitcherItem}
      />
    </Box>
  );

  return isMobile ? (
    <MobileProductCatalog
      currentItems={currentItems}
      totalPages={totalPages}
      currentPage={currentPage}
      viewMode={viewMode}
      handlePageChange={handlePageChange}
    />
  ) : (
    <DesktopProductCatalog
      currentItems={currentItems}
      totalPages={totalPages}
      currentPage={currentPage}
      ViewModeSwitcher={ViewModeSwitcher}
      viewMode={viewMode}
      handlePageChange={handlePageChange}
    />
  );
};

export default ProductCatalog;

{
  /* <Box>
{filterListSmartphones &&
  filterListSmartphones.map((filter) => (
    <div key={filter.id}>
      <p>{filter.name}</p>
      <p>{filter.price}</p>
    </div>
  ))}
</Box> */
}
