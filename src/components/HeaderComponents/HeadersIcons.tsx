import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Box } from "@mui/material";
import HeaderIconMenu from "./HeaderIconMenu";
import {
  favoriteIcon,
  basketIcon,
  orderIcon,
  profileIcon,
} from "../../assets/header";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectBasketItems } from "../../redux/slices/basketSlice";
import { favoriteSliceItems } from "../../redux/slices/favoriteSlice";
import theme from "../../theme";

const HeaderIcons = () => {
  const navigate = useNavigate();
  const basketItems = useAppSelector(selectBasketItems);
  const favoriteItems = useAppSelector(favoriteSliceItems);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "40px",
        paddingLeft: 2,
        justifyContent: "space-evenly",
        [theme.breakpoints.down("md")]: {
          width: "80%",
        },
      }}
    >
      <Badge color="secondary" badgeContent={favoriteItems.length} max={99}>
        <HeaderIconMenu
          iconSrc={favoriteIcon}
          onClick={() => navigate("/favorit")}
        />
      </Badge>

      <Badge color="secondary" badgeContent={basketItems.length} max={99}>
        <HeaderIconMenu
          iconSrc={basketIcon}
          onClick={() => navigate("/basket")}
        />
      </Badge>

      <Badge color="secondary" badgeContent={0}>
        <HeaderIconMenu
          iconSrc={orderIcon}
          onClick={() => navigate("/order")}
        />
      </Badge>

      <HeaderIconMenu
        iconSrc={profileIcon}
        onClick={() => navigate("/profile")}
      />
    </Box>
  );
};

export default HeaderIcons;
