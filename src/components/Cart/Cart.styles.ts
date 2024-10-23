import { styled } from "@mui/material/styles";
import { Box, Card, TextField, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  transition: "box-shadow 0.2s",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.error.light,
  },
}));

export const ItemImage = styled("img")({
  width: "100%",
  borderRadius: "8px",
});

export const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

export const ItemPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  transition: "color 0.2s",
  "&:hover": {
    color: theme.palette.error.dark,
  },
}));
