import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light:"#fff"
    },
    secondary: {
      main: "#f5f5f5",
    },
    background: {
      default: "#272727"
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 400,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          padding: 0,
          backgroundColor: "transparent",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
          flexDirection: "row",
          backgroundColor: "#272727",
          boxShadow: "none",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1680,
    },
  },
});
