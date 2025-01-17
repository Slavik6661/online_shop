import { FC, useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addItem,
  removeItem,
  selectBasketItems,
} from "../../redux/slices/basketSlice";

import { Product } from "../../interfaces/Iproducts/products";
import ImageCarousel from "./ImageCarousel";
import PriceDisplay from "./PriceDisplay";
import StockStatus from "./StockStatus";
import ActionButton from "./ActionButton";
import DiscountBadge from "./DiscountBage";
// import { setProducts } from "../../redux/slices/selectProductSlice";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

type ProductCategory =
  | "tv"
  | "headphones"
  | "smartPhones"
  | "notebooks"
  | "smartwatches"
  | "tablets"
  | "gamingConsoles"
  | "vacuumCleaners"
  | "speakers";

export const ProductCard: FC<ProductCardProps> = ({ product, viewMode }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectBasketItems);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {}, [items]);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem({ id: product.id }));
  };

  const isProductInBasket = () =>
    !!items.find((item) => item.id === product.id);

  const handleClickOpenCard = () => {
    navigate(`/product/${product.type}/${product.id}`);
    // dispatch(setProducts(product));
  };

  return viewMode === "grid" ? (
    <Card
      sx={{
        width: "250px",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(222, 222, 222, 0.5)",
        },
      }}
    >
      {product.discount && <DiscountBadge discount={product.discount} />}
      <Box onClick={handleClickOpenCard}>
        <ImageCarousel product={product} />
      </Box>

      <CardContent sx={{ padding: theme.spacing(2) }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1.10rem",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
          onClick={handleClickOpenCard}
        >
          {product.name}
        </Typography>

        <PriceDisplay price={product.price} oldPrice={product.old_price} />
        <StockStatus inStock={product.in_stock} product={product} />

        <ActionButton
          inBasket={isProductInBasket}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
          disabled={!product.in_stock}
        />
      </CardContent>
    </Card>
  ) : (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(222, 222, 222, 0.5)",
        },
      }}
    >
      <Box sx={{ width: "28%" }}>
        <ImageCarousel product={product} />
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingTop: "25px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.name}
          </Typography>

          <Box>
            <Box>
              <PriceDisplay
                price={product.price}
                oldPrice={product.old_price}
              />
              <StockStatus inStock={product.in_stock} product={product} />
            </Box>

            <Box>
              <ActionButton
                inBasket={isProductInBasket}
                onAdd={handleAddToCart}
                onRemove={handleRemoveFromCart}
                disabled={!product.in_stock}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
