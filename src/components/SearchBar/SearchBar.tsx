import React, { useRef } from "react";
import { TextField, Input, FormControl, IconButton } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ id, value, onChange }) => {
  return (
    <Input
      placeholder="Поиск"
      id={id}
      value={value}
      onChange={onChange}
      size="md"
      variant="soft"
      startDecorator={<SearchIcon />}
      //   endDecorator={
      //     <IconButton variant="plain" size="sm">
      //       {/* <SearchIcon /> */}
      //     </IconButton>
      //   }
      sx={{
        backgroundColor: "#f2f2f2",
        borderRadius: "8px",
        padding: "4px 8px",
        boxShadow: "sm",
        "--Input-focusedThickness": "1px",
        "&:hover": {
          boxShadow: "md",
        },
        "&.MuiSvgIcon-root": {
          color: "#9e9e9e",
        },
      }}
    />
  );
};

export default SearchBar;
