import { FC, useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  addToFavorite,
  removeFavoriteItems,
  favoriteSliceItems,
} from "../../redux/slices/favoriteSlice";
import { Product } from "../../interfaces/Iproducts/products";

interface FavoriteButtonProps {
  product: Product;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector(favoriteSliceItems);
  const [isFavorite, setIsFavorite] = useState(
    !!favoriteItems.find((item) => item.id === product.id)
  );

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    !isFavorite
      ? dispatch(addToFavorite(product))
      : dispatch(removeFavoriteItems(product.id));
  };

  return (
    <IconButton
      onClick={handleToggleFavorite}
      sx={{
        color: isFavorite ? "red" : "inherit",
        "&:hover": {
          color: isFavorite ? "#d32f2f" : "#666",
        },
      }}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
