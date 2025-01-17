import { TextField } from "@mui/material";
import theme from "../../theme";

const SearchField = () => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder="Поиск..."
      sx={{
        bgcolor: "white",
        borderRadius: 1,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.grey[300],
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
          },
        },
      }}
    />
  );
};
export default SearchField;
