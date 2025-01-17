import { useEffect, useState } from "react";
import { AccordionGroup } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { selectThisCategory } from "../../redux/slices/categoriesSlice";
import {
  fetchFilterProductData,
  filterProductSelector,
} from "../../redux/slices/filterProductSlice";
import { IFilterItem } from "../../interfaces/filterProduct/IfilterProduct";
import FilterItem from "./FilterItem";

const FilterGroup = () => {
  const dispatch = useAppDispatch();

  const thisCategory = useAppSelector(selectThisCategory);
  const filterData = useAppSelector(filterProductSelector);

  const [filterItem, setFilterItem] = useState<IFilterItem[]>([]);

  useEffect(() => {
    if (thisCategory?.type) {
      dispatch(fetchFilterProductData({ category: thisCategory.type }));
    }
  }, [dispatch, thisCategory?.type]);

  useEffect(() => {
    setFilterItem(filterData);
  }, [filterData]);

  return (
    <CssVarsProvider>
      <AccordionGroup sx={{ maxWidth: 400 }}>
        {filterItem.map((item) => (
          <FilterItem key={item.id} {...item} />
        ))}
      </AccordionGroup>
    </CssVarsProvider>
  );
};

export default FilterGroup;
