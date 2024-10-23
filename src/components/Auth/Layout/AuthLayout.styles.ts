import { styled } from "@mui/material/styles";
import { Container, Box, TextField, Button } from "@mui/material";
import backgroundImage from "../../../assets/images/login-background.webp";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  padding: theme.spacing(1),
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  backdropFilter: "blur(10px)",
  width: "100%",
  maxWidth: 400,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
}));
