import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import Header from "../components/HeaderComponents/Header";
import Filter from "../components/FilterMenu/Filter";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { Box } from "@mui/material";
import BackLinkCard from "../components/BackLinkCard/BackLinkCard";
import { Pagination, useMediaQuery, useTheme } from "@mui/material";
import SortAndFilterPanel from "../components/SortAndFilterPanel/SortAndFilterPanel";
import ProductListCard from "../components/ProductList/ProductListCard";
import PaginationComponent from "../components/Pagination/Pagination";
import vid1 from "../assets/ViewingModeIcons/list-1.svg";
import vid2 from "../assets/ViewingModeIcons/list.svg";
import SortItemsDesktop from "../components/SortAndFilterPanel/SortItemsDesktop";
import { selectSortedProducts } from "../redux/slices/sortSlice";

const ProductCatalog = () => {
  const dispatch = useAppDispatch();
  // const { items, status } = useAppSelector((state) => state.categories);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sortedProducts = useAppSelector(selectSortedProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = useMemo(
    () => Math.ceil(sortedProducts.length / itemsPerPage),
    [sortedProducts, itemsPerPage]
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = useMemo(
    () => sortedProducts.slice(startIndex, endIndex),
    [sortedProducts, startIndex, endIndex]
  );

  // useEffect(() => {
  //   dispatch(fetchCategories());
  //   console.log(items);
  // }, [items]);

  return (
    <>
      {isMobile ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
              flexDirection: "column",
              paddingBottom: isMobile ? "60px" : "0px",
            }}
          >
            <Header />
            <Box>
              <Box>
                <CustomBreadcrumbs />
                <Box sx={{ margin: "0px 25px" }}>
                  <BackLinkCard isMobile text="Главная" link="/" />
                </Box>
                <SortAndFilterPanel />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "сolumn", md: "row" },
                    gap: "40px",
                  }}
                >
                  <ProductListCard items={currentItems} />
                </Box>
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(event, page) => setCurrentPage(page)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "90vw",
              justifyContent: "center",
              flexDirection: "column",
              paddingBottom: isMobile ? "60px" : "0px",
            }}
          >
            <Header />
            <Box>
              <Box>
                <CustomBreadcrumbs />
                <BackLinkCard isMobile text="Главная" link="/" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingBottom: "25px",
                  }}
                >
                  <SortItemsDesktop />
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      padding: "25px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={vid2} alt="arrowLeft" />
                    <img src={vid1} alt="arrowLeft" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "сolumn", md: "row" },
                    gap: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Filter />
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      borderTop: "1px solid #bebdfff2",
                      paddingTop: "16px",
                    }}
                  >
                    <ProductListCard items={currentItems} />
                    <Pagination
                      onChange={(event, page) => setCurrentPage(page)}
                      count={totalPages}
                      page={currentPage}
                      color="primary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "30px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductCatalog;

{
  /* <ProductPageLayout isMobile={isMobile}>
{isMobile ? (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: isMobile ? "60px" : "0px",
      }}
    >
      <Header />
      <Box>
        <Box>
          <CustomBreadcrumbs />
          <Box sx={{ margin: "0px 25px" }}>
            <BackLinkCard isMobile text="Главная" link="/" />
          </Box>
          <SortAndFilterPanel />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "сolumn", md: "row" },
              gap: "40px",
            }}
          >
            <ProductListCard items={currentItems} />
          </Box>
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(event, page) => setCurrentPage(page)}
          />
        </Box>
      </Box>
    </Box>
  </Box>
) : (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box
      sx={{
        display: "flex",
        width: "90vw",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: isMobile ? "60px" : "0px",
      }}
    >
      <Header />
      <Box>
        <Box>
          <CustomBreadcrumbs />
          <BackLinkCard isMobile text="Главная" link="/" />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "сolumn", md: "row" },
              gap: "40px",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Filter />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <ProductListCard items={currentItems} />
              <Pagination
                onChange={(event, page) => setCurrentPage(page)}
                count={totalPages}
                page={currentPage}
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)}
</ProductPageLayout> */
}
