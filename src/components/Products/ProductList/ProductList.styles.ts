import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive grid
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
}));
