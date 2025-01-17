import { Box, Typography, useMediaQuery } from "@mui/material";
import BackLinkCard from "../components/BackLinkCard/BackLinkCard";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs/CustomBreadcrumbs";
import Header from "../components/HeaderComponents/Header";
import { CardMedia } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import {
  fetchSelectedProduct,
  selectProduct,
} from "../redux/slices/selectProductSlice";
import theme from "../theme";
import {
  Headphones,
  Laptop,
  Smartphone,
  Smartwatch,
  Tablet,
} from "../interfaces/Iproducts/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectThisCategory } from "../redux/slices/categoriesSlice";
import ProductImages from "../components/MainCardProductComponents/ProductImages";
import SmartphoneDetails from "../components/MainCardProductComponents/SmartphoneDetails";
import DescriptionProduct from "../components/MainCardProductComponents/DescriptionProduct";
import SpecificationsProduct from "../components/MainCardProductComponents/SpecificationsProduct";
import { Description } from "@mui/icons-material";

type Product = Smartphone | Laptop | Tablet | Headphones | Smartwatch;

const styles = {
  productName: {
    fontWeight: "400",
    color: "#2e2d2d",
    padding: "0 0 20px 45px",
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    width: "95vw",
    margin: "0 auto",
    borderRadius: "10px",
    gap: 2,
    border: "1px solid #ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "95vw",
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      paddingLeft: "0",
    },
  },
  productImage: {
    width: "25rem",
    height: "25rem",
    [theme.breakpoints.up("xs")]: {
      width: "17rem",
      height: "17rem",
    },
  },
  detailsContainer: {
    width: "95vw",
    margin: "0 auto",
    marginTop: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  downloadSection: {
    width: "30%",
    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
  descriptionSection: {
    width: "70%",
  },
  downloadTitle: {
    fontWeight: "bold",
    color: "#2e2d2d",
    padding: "17px",
  },
};

const MainCardProduct = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const category = useAppSelector(selectThisCategory)?.type;
  const product = useAppSelector(selectProduct);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (id && category) {
      setIsLoading(true);
      dispatch(fetchSelectedProduct({ id: Number(id), category })).then(() => {
        setIsLoading(false);
      });
    }
  }, [category, id]);

  const renderProduct = () => {
    switch (category) {
      case "smartphone":
        return <SmartphoneDetails product={product as Smartphone} />;
      // case "laptop":
      //   return <LaptopDetails product={product as Laptop} />;
      // case "tablet":
      //   return <TabletDetails product={product as Tablet} />;
      // case "headphone":
      //   return <HeadphonesDetails product={product as Headphones} />;
      // case "smartwatche":
      //   return <SmartwatchDetails product={product as Smartwatch} />;
      default:
        return <Typography variant="h5">Такого продукта нет</Typography>;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <CustomBreadcrumbs />
      <BackLinkCard isMobile={isMobile} text="Главная" link="/" />
      <Box>
        <Typography variant="h4" sx={styles.productName}>
          {product.name}
        </Typography>
      </Box>

      <Box>
        <Box sx={styles.productContainer}>
          <Box sx={styles.imageContainer}>
            <Box
              sx={{
                [theme.breakpoints.down("sm")]: {
                  display: "flex",
                },
              }}
            >
              <ProductImages images={product.image} />
            </Box>
            <CardMedia
              component="img"
              src={product.image[0]}
              alt={product.name}
              sx={styles.productImage}
            ></CardMedia>
          </Box>

          <Box>{renderProduct()}</Box>
        </Box>

        <Box sx={styles.detailsContainer}>
          <Box
            sx={{
              display: "flex",

              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                paddingBottom: "60px",
              },
            }}
          >
            <Box sx={styles.downloadSection}>
              <Typography variant="h5" sx={styles.downloadTitle}>
                Файлы для скачивания
              </Typography>
            </Box>

            <Box sx={{ width: "70%" }}>
              <DescriptionProduct product={product} />
              <SpecificationsProduct product={product as Smartphone} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainCardProduct;
