import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "rgba(255, 255, 255, 0.9)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 16,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          },
        },
      },
    },
  },
});

export default theme;
