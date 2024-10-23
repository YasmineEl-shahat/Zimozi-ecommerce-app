import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const StyledHeader = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px 48px 0 !important",
  minHeight: 0,
}));

export const StyledLogo = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: 50,
}));
