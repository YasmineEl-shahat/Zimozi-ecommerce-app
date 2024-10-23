import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import store from "./redux/store.ts";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";
import { AppRoutes } from "./Routes/AppRoutes.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
