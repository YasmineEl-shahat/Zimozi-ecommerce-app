import React from "react";
import Header from "../Header/Header.tsx";
import { Box, Container } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box>
    <Header />
    <Container sx={{ mt: 4 }}>{children}</Container>
  </Box>
);

export default MainLayout;
