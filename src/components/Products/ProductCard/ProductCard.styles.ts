import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  padding: `0 ${theme.spacing(2)}`,
  borderRadius: "8px", // Rounded corners
  boxShadow: theme.shadows[3], // Shadow effect
  transition: "transform 0.2s, box-shadow 0.2s", // Transition for hover effect
  "&:hover": {
    transform: "scale(1.05)", // Scale effect on hover
    boxShadow: theme.shadows[6], // Deeper shadow on hover
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap", // Prevent text from wrapping
  maxWidth: "100%", // Ensure it doesn't exceed card width
  fontSize: "1rem",
}));

export const IconContainer = styled("div")<{ inCart: boolean }>(
  ({ theme, inCart }) => ({
    backgroundColor: inCart
      ? theme.palette.primary.main
      : theme.palette.background.paper,
    borderRadius: "50%",
    padding: theme.spacing(0.5),
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  })
);
