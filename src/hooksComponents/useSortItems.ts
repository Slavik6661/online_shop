import { useEffect, useState } from "react";
import {
  featchProduct,
  getProductsByCategorySlice,
} from "../redux/slices/getProductSlice";
import {
  featchSortItems,
  getSelectedSortItem,
  getSortedItems,
  setSelectedSortItem,
  setSortConfig,
} from "../redux/slices/sortSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { selectThisCategory } from "../redux/slices/categoriesSlice";

const useSortItems = () => {
  const dispatch = useAppDispatch();
  const ProductsSelectedCategory = useAppSelector(getProductsByCategorySlice);
  const selectedCategory = useAppSelector(selectThisCategory)?.type;
  const sortedItemsList = useAppSelector(getSortedItems);
  const selectSortItem = useAppSelector(getSelectedSortItem);

  useEffect(() => {
    dispatch(featchSortItems());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(featchProduct({ category: selectedCategory }));
    }
  }, [selectedCategory, dispatch]);

  const handleChange = (selectedSortId: number) => {
    dispatch(setSelectedSortItem(selectedSortId));
    const selectedSortItem = sortedItemsList.find(
      (item) => item.id === selectedSortId
    );

    if (selectedSortItem) {
      dispatch(
        setSortConfig({
          sortConfig: selectedSortItem,
          products: ProductsSelectedCategory,
        })
      );
    }
  };

  return {
    sortedItemsList,
    handleChange,
    selectSortItem,
    isLoading: sortedItemsList.length === 0,
  };
};

export default useSortItems;
