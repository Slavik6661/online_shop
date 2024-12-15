import { FC } from "react";
import { AccordionGroup } from "@mui/joy";
import filterData from "../../jsonData/filterData.json";
import { CssVarsProvider } from "@mui/joy/styles";
import FilterItem from "./FilterItem";

interface FilterGroupProps {
  filterData: {
    id: number;
    filterName: string;
    label: string;
    options?: { id: number; label: string; isChecked: boolean }[];
    priceRange?: number[];
    type: string;
    searchBare?: boolean;
  }[];
}

const FilterGroup: FC<FilterGroupProps> = ({ filterData }) => {
  console.log("filterData", filterData);
  return (
    <CssVarsProvider>
      <AccordionGroup sx={{ maxWidth: 400 }}>
        {filterData.map((item) => (
          <FilterItem key={item.id} {...item} />
        ))}
      </AccordionGroup>
    </CssVarsProvider>
  );
};

export default FilterGroup;
