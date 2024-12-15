import { FC, SetStateAction, useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Checkbox, List, ListItem } from "@mui/joy";

interface CheckBoxItemProps {
  options: { id: number; label: string; isChecked: boolean }[];
  searchBare: boolean;
  fileterName: string;
}

const CheckBoxItem: FC<CheckBoxItemProps> = ({
  options: initialOptions,
  searchBare,
  fileterName,
}) => {
  const [options, setOptions] = useState(initialOptions);
  const [filteredOptions, setFilteredOptions] = useState(initialOptions);
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const getFilterOptions = (searchBarText: string) => {
    setSearchValue(searchBarText);
    const filteredOption = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredOptions(filteredOption);
  };

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOptions((prev) => prev.map((option) => ({ ...option, isChecked })));
    setFilteredOptions((prev) =>
      prev.map((option) => ({ ...option, isChecked }))
    );
  };

  const handleCheckBoxChange = (id: number) => {
    setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, isChecked: !option.isChecked } : option
      )
    );
    setFilteredOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, isChecked: !option.isChecked } : option
      )
    );
  };

  return (
    <>
      {searchBare && (
        <>
          <SearchBar
            value={searchValue}
            id={fileterName}
            onChange={(e) => getFilterOptions(e.target.value)}
          />

          <ListItem sx={{ borderBottom: "1px solid #80808042" }}>
            <Checkbox label={"Выбрать все"} onChange={selectAll} />
          </ListItem>
        </>
      )}

      {filteredOptions.length > 0 ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxHeight: isExpanded ? "330px" : "290px",
            overflow: isExpanded ? "auto" : "hidden",
          }}
        >
          {filteredOptions.map((option: any) => (
            <ListItem key={option.id}>
              <Checkbox
                label={option.label}
                checked={option.isChecked}
                onChange={() => handleCheckBoxChange(option.id)}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxHeight: isExpanded ? "330px" : "290px",
            overflow: isExpanded ? "auto" : "hidden",
          }}
        >
          {options.map((option: any) => (
            <ListItem key={option.id}>
              <Checkbox
                label={option.label}
                checked={option.isChecked}
                onChange={() => handleCheckBoxChange(option.id)}
              />
            </ListItem>
          ))}
        </List>
      )}
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
    </>
  );
};
export default CheckBoxItem;
