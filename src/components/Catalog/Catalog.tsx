import { Box, Typography, Button, useTheme } from "@mui/material";
import ScrollBarList from "../ScrollBarList/ScrollBarList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import {
  fetchCategories,
  selectCategories,
} from "../../redux/slices/categoriesSlice";

const Catalog: React.FC = () => {
  const categories = useAppSelector(selectCategories);

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <ScrollBarList title="Каталог">
        <Box
          sx={{
            width: { sx: "100%", md: "100%", sm: "100%" },
            display: "flex",
            flexWrap: "nowrap",
            gap: theme.spacing(2),
            padding: theme.spacing(2),
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: theme.shape.borderRadius,
            },
          }}
        >
          {/* Контейнер с прокруткой */}
          {categories.map((category) => (
            <Box
              key={category.id}
              onClick={() => navigate(`/catalog/${category.id}`)}
              sx={{
                flex: "0 0 auto",
                width: { sx: "100px", md: "200px", sm: "200px" },
                textAlign: "center",
                padding: theme.spacing(1.5),
                backgroundColor: theme.palette.action.hover,
                borderRadius: theme.shape.borderRadius,
                cursor: "pointer",
                transition: "transform 0.3s background-color 0.2s",
                "&:hover": {
                  backgroundColor: "rgba(222, 222, 222, 0.5)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.title}
                sx={{
                  width: { xs: "150px", md: "190px", sm: "168px" },
                  height: { xs: "150px", md: "190px", sm: "168px" },
                  marginBottom: theme.spacing(1),
                  objectFit: "contain",
                  borderRadius: theme.shape.borderRadius,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { sx: "12px", sm: "14px", md: "16px" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {category.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </ScrollBarList>
    </>
  );
};

export default Catalog;
