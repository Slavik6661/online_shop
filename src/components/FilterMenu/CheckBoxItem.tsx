import { FC, useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Checkbox, List, ListItem } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { selectSortedProducts } from "../../redux/slices/sortSlice";
import {
  filterSmartphones,
  smartphoneFilterSelector,
  updateFilter,
} from "../../redux/slices/filtersProductSlice/smartphoneFilter";
import { Box } from "@mui/material";

interface CheckBoxItemProps {
  options: { id: number; label: string; isChecked: boolean }[];
  searchBare: boolean;
  filterName: string;
}

interface OptionFilter {
  priceRange: number[];
  memoryOptions: string[];
  storageOptions: string[];
  brands: string[];
  numberCores: string[];
  years: string[];
}

const CheckBoxItem: FC<CheckBoxItemProps> = ({
  options: initialOptions,
  searchBare,
  filterName,
}) => {
  const sortedProducts = useAppSelector(selectSortedProducts);
  const dispach = useAppDispatch();

  const [options, setOptions] = useState(initialOptions);
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (searchBarText: string) => {
    setSearchValue(searchBarText.trim());
  };

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const udatedOptions = options.map((option) => ({ ...option, isChecked }));
    setOptions(udatedOptions);

    const selectedValues = isChecked
      ? udatedOptions.map((option) => option.label)
      : [];
    dispach(updateFilter({ filterName, value: selectedValues }));
    dispach(filterSmartphones(sortedProducts));
  };

  const handleCheckBoxChange = (id: number) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, isChecked: !option.isChecked } : option
    );
    setOptions(updatedOptions);

    const selectedValues = updatedOptions
      .filter((item) => item.isChecked)
      .map((item) => item.label);

    console.log("selectedValues", selectedValues);
    dispach(updateFilter({ filterName, value: selectedValues }));
    dispach(filterSmartphones(sortedProducts));
  };

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [options, searchValue]);

  const displayedOptions =
    filteredOptions.length > 0 ? filteredOptions : options;

  return (
    <>
      {searchBare && (
        <>
          <SearchBar
            value={searchValue}
            id={filterName}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <ListItem sx={{ borderBottom: "1px solid #80808042" }}>
            <Checkbox label={"Выбрать все"} onChange={selectAll} />
          </ListItem>
        </>
      )}

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxHeight: isExpanded ? "330px" : "290px",
          overflow: isExpanded ? "auto" : "hidden",
        }}
      >
        {displayedOptions.map((option: any) => (
          <ListItem key={option.id}>
            <Checkbox
              label={option.label}
              checked={option.isChecked}
              onChange={() => handleCheckBoxChange(option.id)}
            />
          </ListItem>
        ))}
      </List>

      {options.length > 8 && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: 1,
            alignSelf: "flex-start",
            cursor: "pointer",
            color: "#0d61af",
            borderBottom: "1px dashed #5b5a9f",
          }}
        >
          {isExpanded ? "Скрыть" : "Показать все"}
        </span>
      )}
    </>
  );
};
export default CheckBoxItem;
