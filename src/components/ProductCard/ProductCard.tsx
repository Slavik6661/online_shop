import { FC, useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaginationCardImg from "../PaginationCardImg/PginationCardImg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addItem,
  removeItem,
  selectBasketItems,
  selectBasketTotalPrice,
} from "../../redux/slices/basketSlice";

import { Product } from "../../interfaces/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectBasketItems);
  const totalPrice = useAppSelector(selectBasketTotalPrice);

  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();

    const positionX = clientX - left;
    const newIndex = Math.floor((positionX / width) * product.image.length);
    setCurrentImage(
      Math.min(newIndex, product.image.length - 1) === -1 ? 0 : newIndex
    );
  };

  useEffect(() => {}, [items]);

  const handleAddToCart = () => {
    console.log("Add to cart");
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        oldPrice: 0,
        inStock: false,
      })
    );
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
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
      {product.discount && (
        <Box
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            textAlign: "center",
            top: theme.spacing(1),
            right: theme.spacing(1),
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            borderRadius: "5px",
            padding: theme.spacing(0.5),
            zIndex: 1,
            fontSize: "18px",
          }}
        >
          {product.discount}
        </Box>
      )}

      <Box
        sx={{
          position: "relative",
          height: "300px",
          transition: "transform 0.3s background-color 0.2s",
          "&:hover": {
            backgroundColor: "rgba(222, 222, 222, 0.5)",
            transform: "scale(1.05)",
          },
        }}
      >
        {product.image.map((img, index) => (
          <CardMedia
            onMouseMove={handleMouseMove}
            key={index}
            component="img"
            height="270px"
            image={img}
            alt={product.name}
            sx={{
              borderRadius: "10px 10px 0 0",
              padding: "15px",
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              opacity: currentImage === index ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        ))}
        {/* {Пагинация} */}
        <PaginationCardImg product={product} currentImage={currentImage} />
        {/* {Пагинация} */}
      </Box>

      <CardContent sx={{ padding: theme.spacing(2) }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>

        {/* **************************************Блок Новая цена старая цена************************************* */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginBottom: theme.spacing(2),
          }}
        >
          {/* ////////////////////////////////////////Новая цена//////////////////////////////////////////// */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              marginRight: theme.spacing(1),
              color: theme.palette.primary.main,
            }}
          >
            {product.price.toLocaleString()}₽
          </Typography>
          {/* ////////////////////////////////////////Новая цена//////////////////////////////////////////// */}

          {/* ////////////////////////////////////////Старая цена//////////////////////////////////////////// */}
          {product.old_price && (
            <Typography
              variant="h6"
              component="div"
              sx={{
                textDecoration: "line-through",
                color: theme.palette.text.disabled,
              }}
            >
              {product.old_price?.toLocaleString()} ₽
            </Typography>
          )}
          {/* ////////////////////////////////////////Старая цена//////////////////////////////////////////// */}
        </Box>
        {/* **************************************Блок Новая цена старая цена************************************* */}

        {/* **************************************Вналичии************************************** */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color={product.in_stock ? "success.main" : "error.main"}>
            {product.in_stock ? "В наличии" : "Нет в наличии"}
          </Typography>

          <IconButton
            onClick={handleToggleFavorite}
            sx={{ color: isFavorite ? theme.palette.error.main : "inherit" }}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        {/* **************************************Вналичии************************************** */}

        {items.find((item) => item.id === product.id) ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => dispatch(removeItem({ id: product.id }))}
            sx={{ marginTop: theme.spacing(2), borderRadius: "20px" }}
          >
            Удалить из корзины
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToCart}
            sx={{ marginTop: theme.spacing(2), borderRadius: "20px" }}
            disabled={!product.in_stock}
          >
            В корзину
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
