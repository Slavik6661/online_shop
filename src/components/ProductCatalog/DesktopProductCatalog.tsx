import { FC, ChangeEvent, useState } from "react";
import { Box } from "@mui/material";

import Header from "../HeaderComponents/Header";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import BackLinkCard from "../BackLinkCard/BackLinkCard";
import Filter from "../FilterMenu/Filter";
import ProductListCard from "../ProductList/ProductListCard";

import { Product } from "../../interfaces/Iproducts/products";
import PaginationComponent from "../Pagination/Pagination";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import SortAndFilterPanel from "../SortAndFilterPanel/SortAndFilterPanel";

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
    paddingBottom: isMobile ? "60px" : "40px",
    minHeight: "100vh",
    position: "relative",
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
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: "15px",
    minHeight: 0,
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
  },
};

interface DesktopProductCatalogProps {
  currentItems: Product[];
  viewMode: "list" | "grid";
  totalPages: number;
  currentPage: number;
  ViewModeSwitcher: () => JSX.Element;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const DesktopProductCatalog: FC<DesktopProductCatalogProps> = ({
  currentItems,
  viewMode,
  totalPages,
  currentPage,
  ViewModeSwitcher,
  handlePageChange,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentWrapper(false)}>
        <Header />
        <CustomBreadcrumbs />
        <BackLinkCard isMobile={false} text="Главная" link="/" />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingBottom: "10px",
          }}
        >
          <CssVarsProvider>
            <SortAndFilterPanel />
          </CssVarsProvider>
          <ViewModeSwitcher />
        </Box>

        <Box sx={{ display: "flex", gap: "40px" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Filter />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={styles.productListContainer}>
              <ProductListCard items={currentItems} viewMode={viewMode} />
              {totalPages > 1 && (
                <Box>
                  <PaginationComponent
                    onPageChange={handlePageChange}
                    totalPages={totalPages}
                    currentPage={currentPage}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopProductCatalog;
