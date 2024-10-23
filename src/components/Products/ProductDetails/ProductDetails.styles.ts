import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  maxWidth: 600,
  margin: "0 auto",
}));

export const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  maxHeight: 400,
  borderRadius: 8,
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
