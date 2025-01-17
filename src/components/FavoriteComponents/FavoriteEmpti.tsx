import { FC } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button } from "@mui/joy";
import { CardMedia, Typography } from "@mui/material";
import emptyIcon from "../../assets/emptyBascket/basketEmpty.svg";
import theme from "../../theme";
import { fontGrid } from "@mui/material/styles/cssUtils";

interface IFavoriteEmpty {
  countProducts: number;
}

const FavoriteEmpty: FC<IFavoriteEmpty> = ({ countProducts }) => {
  return (
    <>
      {countProducts === 0 ? (
        <Box
          sx={{
            height: "65vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Typography
              sx={{
                fontSize: "xx-large",
                display: "flex",
                gap: "5px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "large",
                  gap: "5px",
                },
              }}
            >
              У вас нет избранных товаров
              <Typography
                sx={{
                  color: "red",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "large",
                  },
                }}
              >
                ❤
              </Typography>
            </Typography>
            <CardMedia
              component="img"
              image={emptyIcon}
              sx={{
                width: "75%",
                [theme.breakpoints.down("md")]: {
                  width: "65%",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
            />

            <Button
              startDecorator={<FavoriteBorder />}
              sx={{
                width: "270px",
                height: "50px",
                fontSize: "larger",
              }}
            >
              За покупками !
            </Button>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export default FavoriteEmpty;
