import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../theme";
import FavoriteButton from "../ProductCard/FavoriteButton";
import { Smartphone } from "../../interfaces/Iproducts/IsmartPhone/smartPhone";
interface SmartphoneDetailsProps {
  product: Smartphone;
}
const renderSmartphoneDetails: FC<SmartphoneDetailsProps> = ({ product }) => {
  return (
    <Box
      key={product.id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
        padding: 2,
        borderRadius: 2,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignproducts: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "auto",
          height: "fit-content",
          flexWrap: "wrap",
          fontSize: "medium",
          gap: "5px",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
          {product.specifications.display?.diagonal}
        </Box>

        {product.specifications.memory.internal_storage && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            Память: {product.specifications.memory.internal_storage}
          </Box>
        )}
        {product.specifications.memory.RAM && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            ОЗУ: {product.specifications.memory.RAM}
          </Box>
        )}
        {product.specifications.OS_and_processor?.max_frequency && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            Процессор: {product.specifications.OS_and_processor.core_count}x{" "}
            {product.specifications.OS_and_processor.max_frequency}
          </Box>
        )}

        {product.specifications.display.technology && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            Экран: {product.specifications.display.technology}
          </Box>
        )}
        {product.specifications.display.resolution && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            {product.specifications.display.resolution}
          </Box>
        )}
        {product.specifications.display.refresh_rate && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            {product.specifications.display.refresh_rate}
          </Box>
        )}

        {product.specifications.main_camera?.megapixels && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            Камера: {product.specifications.main_camera.megapixels}
          </Box>
        )}
        {product.specifications.power?.battery_capacity && (
          <Box sx={{ bgcolor: "#f5f5f5", height: "min-content" }}>
            Батарея: {product.specifications.power?.battery_capacity}
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignproducts: "end",
          // width: "30%",
          alignItems: "flex-end",
          width: "fit-content",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            alignItems: "flex-end",
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "400", color: "#2e2d2d" }}>
          Цена: {product.price} ₽
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <FavoriteButton product={product} />
          <Button
            variant="contained"
            sx={{
              width: "140px",
              height: "3rem",
              backgroundColor: "#007DFF",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
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
  );
};
export default renderSmartphoneDetails;
