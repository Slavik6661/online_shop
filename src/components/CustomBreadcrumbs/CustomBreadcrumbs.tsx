import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

import { selectCategoriesItems } from "../../redux/slices/categoriesSlice";
import { useAppSelector } from "../../redux/hooks/hooks";

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const categories = useAppSelector(selectCategoriesItems);
  const pathnames = location.pathname.split("/").filter((x) => x);

  const filteredPathnames = pathnames.filter((value) =>
    categories.some((cat: any) => cat.id === +value)
  );

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px" }}>
      {/* Главная страница */}
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        color="inherit"
        sx={{ textDecoration: "none" }}
      >
        Главная
      </Link>

      {/* Динамические части пути */}
      {filteredPathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Находим название категории по id
        const category = categories.find((cat: any) => cat.id === +value);
        const title = category?.title || value;

        return isLast ? (
          <Typography key={to} color="text.primary.main">
            {title}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="hover"
            color="blue"
            sx={{ textDecoration: "none" }}
          >
            {title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
