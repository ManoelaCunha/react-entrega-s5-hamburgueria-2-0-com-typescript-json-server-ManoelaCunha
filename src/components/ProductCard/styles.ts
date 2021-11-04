import { styled } from "@material-ui/styles";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";

export const CssPaper = styled(Paper)({
  width: "300px",
  margin: "10px",
  "&:hover": {
    boxShadow: "0em 0em 0.1em #219653",
  },
});

export const CssPaperCart = styled(Paper)({
  margin: "10px",
  display: "flex",
});

export const CssBoxImg = styled(Box)({
  backgroundColor: "#E0E0E0",
});

export const CssTypographyTitle = styled(Typography)({
  color: "#333333",
  textAlign: "left",
  margin: "10px 20px",
  fontWeight: "bold",
});

export const CssTypographyCategory = styled(Typography)({
  color: "#828282",
  textAlign: "left",
  margin: "10px 20px",
});

export const CssTypographyPrice = styled(Typography)({
  color: "#219653",
  textAlign: "left",
  margin: "10px 20px",
});

export const CssTypographyCount = styled(Typography)({
  minWidth: "30px",
  color: "#333333",
  backgroundColor: "#E0E0E0",
});

export const CssButtonGroup = styled(ButtonGroup)({
  minWidth: "35px",
  margin: "5px 20px",
  marginRight: "10px",
});

export const CssButtonAdd = styled(Button)({
  color: "white",
  textAlign: "left",
  marginBottom: "20px",
  backgroundColor: "#828282",
  "&:hover": {
    backgroundColor: "#219653",
  },
});

export const CssIconButton = styled(IconButton)({
  padding: "6px",
});

export const CssButton = styled(Button)({
  minWidth: "35px",
  padding: "2px",
});
