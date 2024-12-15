import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ ...product, id: Date.now().toLocaleString(), quantity: 1 })
    );
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
