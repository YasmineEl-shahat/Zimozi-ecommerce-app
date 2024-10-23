import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import store from "./redux/store.ts";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Auth/Login.tsx";
import Register from "./pages/Auth/Register.tsx";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile.tsx";
import ProductDetails from "./pages/ProductDetailsPage.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
