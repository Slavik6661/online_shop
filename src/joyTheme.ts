import { extendTheme } from "@mui/joy/styles";

const joyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#f5f5f5",
        },
        primary: {
          solidBg: '#1976d2',
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "#303030",
        },
        primary: {
          solidBg: '#90caf9',
        },
      },
    },
  },
});

export default joyTheme;