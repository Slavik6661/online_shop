import { FC } from "react";
import { Box, CssVarsProvider } from "@mui/joy";
import { Product } from "../../interfaces/products";
import {
  Smartphone,
  Laptop,
  Smartwatch,
  TV,
  Tablet,
  Headphones,
  GamingConsole,
  VacuumCleaner,
  Speaker,
} from "../../interfaces/types";

// Детализированные компоненты для каждого типа продукта
const SmartphoneDetails: FC<{ item: Smartphone }> = ({ item }) => (
  <>
    <p>Display: {item.display.resolution}</p>
    <p>Battery: {item.power.battery_capacity}</p>
  </>
);

const LaptopDetails: FC<{ item: Laptop }> = ({ item }) => (
  <>
    <p>Processor: {item.processor.model}</p>
    <p>Memory: {item.memory.capacity}</p>
  </>
);

const SmartwatchDetails: FC<{ item: Smartwatch }> = ({ item }) => (
  <>
    <p>Display: {item.display.resolution}</p>
    <p>Battery: {item.battery.capacity}</p>
  </>
);

const TVDetails: FC<{ item: TV }> = ({ item }) => (
  <>
    <p>Display: {item.display.resolution}</p>
    <p>Smart TV: {item.features.smart_TV ? "Yes" : "No"}</p>
  </>
);

// Аналогично создайте другие компоненты для других типов...

// Маппинг типов продуктов на их компоненты
const productDetailsMap = {
  smartphone: SmartphoneDetails,
  laptop: LaptopDetails,
  smartwatch: SmartwatchDetails,
  tv: TVDetails,
  // Добавьте маппинг для остальных типов...
} as const;

interface BasketCardProps {
  basketItem: Product;
}

const BasketCard: FC<BasketCardProps> = ({ basketItem }) => {
  const ProductDetailsComponent = productDetailsMap[basketItem.type];

  return (
    <CssVarsProvider>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "fit-content" }}>
          <Box
            component="img"
            src={basketItem.image[0]}
            alt={basketItem.name}
            sx={{ width: "200px", height: "200px", objectFit: "contain" }}
          />
        </Box>
        <Box sx={{ width: "fit-content" }}>
          <Box>{basketItem.name}</Box>
          <Box>{basketItem.price} ₽</Box>
          <p>Model: {basketItem.general.model}</p>
          <p>Release Year: {basketItem.general.release_year}</p>

          {/* Динамическое отображение деталей продукта */}
          {ProductDetailsComponent && (
            <ProductDetailsComponent item={basketItem as any} />
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default BasketCard;
