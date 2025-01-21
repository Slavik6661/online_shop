import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/joy";
import FilterPrice from "./FilterPrice";
import CheckBoxItem from "./CheckBoxItem";
import RadioItem from "./RadioItem";

interface Option {
  id: number;
  label: string;
  isChecked: boolean;
}

interface FilterItemProps {
  label: string;
  filterName: string;
  options?: Option[];
  priceRange?: number[];
  type: string;
  searchBare?: boolean;
}

const FilterItem: React.FC<FilterItemProps> = React.memo(
  ({ label, filterName, priceRange, options, type, searchBare }) => {
    return (
      <Accordion defaultExpanded>
        <AccordionSummary>{label}</AccordionSummary>
        <AccordionDetails sx={{ overflow: "auto" }}>
          {type === "range" && <FilterPrice rangePrice={priceRange || []} />}

          {type === "radio" && options && (
            <RadioItem options={options} filterName={filterName} />
          )}

          {type === "checkbox" && options && (
            <CheckBoxItem
              options={options}
              searchBare={Boolean(searchBare)}
              fileterName={filterName}
            />
          )}
        </AccordionDetails>
      </Accordion>
    );
  }
);
export default FilterItem;
