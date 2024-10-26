import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";
import { AppRoutes } from "./Routes/AppRoutes.tsx";
import { store, persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
