import { FC, ChangeEvent } from "react";

import { Product } from "../../interfaces/Iproducts/products";
import { Box } from "@mui/material";
import Header from "../HeaderComponents/Header";
import BackLinkCard from "../BackLinkCard/BackLinkCard";
import SortAndFilterPanel from "../SortAndFilterPanel/SortAndFilterPanel";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProductListCard from "../ProductList/ProductListCard";
import PaginationComponent from "../Pagination/Pagination";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";

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
    padding: "25px",
    cursor: "pointer",
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

interface MobileProductCatalogProps {
  currentItems: Product[];
  viewMode: "list" | "grid";
  totalPages: number;
  currentPage: number;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const MobileProductCatalog: FC<MobileProductCatalogProps> = ({
  currentItems,
  viewMode,
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentWrapper(true)}>
        <Header />
        <CustomBreadcrumbs />
        <Box sx={{ margin: "0px 25px" }}>
          <BackLinkCard isMobile text="Главная" link="/" />
        </Box>
        <CssVarsProvider>
          <SortAndFilterPanel />
        </CssVarsProvider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <ProductListCard items={currentItems} viewMode={viewMode} />
        </Box>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default MobileProductCatalog;
