import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ProductItem from "./ProductItem1";
import Grid from "@mui/material/Grid";
import { Grid2 } from "@mui/material";

interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "product");
      const productsSnapshot = await getDocs(productsCollection);
      const productList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productList);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <Grid2 container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid2>
  );
};

export default ProductList;
