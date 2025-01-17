import { useAppSelector } from "../redux/hooks/hooks";
import { favoriteSliceItems } from "../redux/slices/favoriteSlice";
import {
  CardMedia,
  FormControlLabel,
  Typography,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import Header from "../components/HeaderComponents/Header";
import FavoriteEmpty from "../components/FavoriteComponents/FavoriteEmpti";
import { Smartphone } from "../interfaces/Iproducts/IsmartPhone/smartPhone";
import theme from "../theme";
import FavoriteButton from "../components/ProductCard/FavoriteButton";
import SortAndFilterPanel from "../components/SortAndFilterPanel/SortAndFilterPanel";
import { CssVarsProvider } from "@mui/joy/styles";

const FavoritProducts = () => {
  const items = useAppSelector(favoriteSliceItems);
  const FavoriteProductsHeader = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 2,
          borderRadius: "5px",
          padding: "0 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography sx={{ fontSize: "x-large" }}>
          Всего товаров: {items.length} на сумму{" "}
          {items.reduce((acc, items) => acc + items.price, 0)}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              width: "12rem",
              height: "40px",
              border: "1px solid #916a6a3d",
              display: "flex",
              alignItems: "center",
              boxShadow: "sm",
              padding: "5px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "rgba(222, 222, 222, 0.5)",
              },
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Выбрать все" />
          </Box>
          <CssVarsProvider>
            <SortAndFilterPanel />
          </CssVarsProvider>
          <Button
            sx={{
              width: "180px",
              color: "white",
              backgroundColor: "#007DFF",
              "&:hover": {
                backgroundColor: "#0b6bcbeb",
              },
            }}
          >
            Купить
          </Button>
        </Box>
      </Box>
    );
  };

  const renderSmartphoneDetails = (item: Smartphone) => {
    return (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          key={item.id}
          sx={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            gap: 1,
            p: 2,
            borderRadius: 2,
            border: "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {item.name}
            </Box>
            <Box sx={{ color: "#666" }}>{item.display?.diagonal}</Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {item.memory?.internal_storage && (
              <Box sx={{ bgcolor: "#f5f5f5", p: 1, borderRadius: 1 }}>
                Память: {item.memory.internal_storage}
              </Box>
            )}

            {item.memory?.RAM && (
              <Box sx={{ bgcolor: "#f5f5f5", p: 1, borderRadius: 1 }}>
                ОЗУ: {item.memory.RAM}
              </Box>
            )}

            {item.OS_and_processor?.core_count &&
              item.OS_and_processor?.max_frequency && (
                <Box sx={{ bgcolor: "#f5f5f5", p: 1, borderRadius: 1 }}>
                  Процессор: {item.OS_and_processor.core_count}x{" "}
                  {item.OS_and_processor.max_frequency}
                </Box>
              )}
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {item.display?.technology && (
              <Box sx={{ color: "#666" }}>Экран: {item.display.technology}</Box>
            )}

            {item.display?.resolution && (
              <Box sx={{ color: "#666" }}>{item.display.resolution}</Box>
            )}

            {item.display?.refresh_rate && (
              <Box sx={{ color: "#666" }}>{item.display.refresh_rate}</Box>
            )}
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {item.main_camera?.megapixels && (
              <Box sx={{ color: "#666" }}>
                Камера: {item.main_camera.megapixels}
              </Box>
            )}

            {item.power?.battery_capacity && (
              <Box sx={{ color: "#666" }}>
                Батарея: {item.power.battery_capacity}
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "30%",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "18px",
              alignItems: "flex-end",
              flexDirection: "column",
              gap: 1,
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "1.3rem",
                fontWeight: "400",
                color: "#2e2d2d",
              }}
            >
              Цена: {item.price} ₽
            </Box>
            <Box display="flex" gap={2}>
              <FavoriteButton product={item} />
              <Button
                variant="outlined"
                sx={{
                  width: "140px",
                  height: "3rem",
                  backgroundColor: "#007DFF",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  // [theme.breakpoints.down("md")]: {
                  //   width: "30%",
                  // },
                  [theme.breakpoints.down("xs")]: {
                    width: "90%",
                  },
                  "&:hover": {
                    backgroundColor: "#0b6bcbeb",
                  },
                }}
              >
                Купить
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h2">Избранные товары</Typography>
          {items.length === 0 ? (
            <FavoriteEmpty countProducts={items.length} />
          ) : (
            <>
              <FavoriteProductsHeader />

              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    borderRadius: "5px",
                    backgroundColor: "#ffffff",
                    [theme.breakpoints.down("sm")]: {
                      flexDirection: "column",
                      alignItems: "center",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Checkbox />
                  </Box>
                  <CardMedia
                    component="img"
                    image={item.image[0]}
                    alt={item.name}
                    sx={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                  {renderSmartphoneDetails(item as Smartphone)}
                </Box>
              ))}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default FavoritProducts;
