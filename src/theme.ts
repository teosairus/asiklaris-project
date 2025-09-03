import { createTheme } from "@mui/material/styles";

// Define your custom palette, typography, spacing, etc.
const theme = createTheme({
  palette: {
    primary: {
      main: "#e5e3de",
      light: "#42a5f5",
      dark: "#8e7674",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e5e3de",
      light: "#CFBA9C",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#8e7674",
      secondary: "#e5e3de",
      disabled: "#bdbdbd",
    },
  },

  typography: {
    fontFamily: `'Unageo','Montserrat', 'Quicksand', 'Playfair Display', sans-serif`,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.01562em",
    },
    h2: { fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.00833em" },
    h3: {
      fontFamily: `'SalonikiaVKF','Atsalia',  sans-serif`,
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "0em",
    },
    h4: { fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.00735em" },
    h5: { fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0em" },
    h6: { fontSize: "1rem", fontWeight: 700, letterSpacing: "0.0075em" },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.00714em",
    },
    body1: { fontSize: "1rem", fontWeight: 400, letterSpacing: "0.03125em" },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.01786em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
      letterSpacing: "0.08929em",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.16667em",
      textTransform: "uppercase",
    },
  },

  spacing: 8, // default spacing unit (8px)

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    // Add other component overrides here...
  },
});

export default theme;
