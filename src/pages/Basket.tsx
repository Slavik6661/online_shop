import { Box } from "@mui/joy";
import { useAppSelector } from "../redux/hooks/hooks";
import { selectBasketItems } from "../redux/slices/basketSlice";
import theme from "../theme";
import BackLinkCard from "../components/BackLinkCard/BackLinkCard";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs/CustomBreadcrumbs";
import BasketCard from "../components/BasketCard/BasketCard";
import { Product } from "../interfaces/products";

const Basket = () => {
  const basketItems = useAppSelector(selectBasketItems);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
        }}
      >
        <CustomBreadcrumbs />
        <BackLinkCard isMobile text="Карзина" link="/" />
        {basketItems.map((item) => (
          <BasketCard basketItem={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Basket;
