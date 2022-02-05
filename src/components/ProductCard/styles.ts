import { styled } from "@material-ui/styles";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputBase,
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
  padding: "20px",
});

export const CssBoxImgCart = styled(Box)({
  backgroundColor: "#E0E0E0",
  display: "flex",
  alignItems: "center",
});

export const CssBoxContentCart = styled(Box)({
  width: "128px",
  "@media (min-width:425px)": {
    width: "182px",
  },
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
  margin: "10px 20px",
  display: "flex",
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

//Filter Products

export const BootstrapInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: "#219653",
    border: "1px solid #219653",
    paddingTop: "2px",
    paddingBottom: "2px",

    "&:focus": {
      borderRadius: 4,
      borderColor: "#219653",
    },
  },
});

export const Filter = styled(Select)({
  color: "#fff",
  padding: "10px",
  fontSize: 12,
  background: "#219653",
  borderRadius: 4,
  width: 120,
});

export const MenuItemCustom = styled(MenuItem)({
  color: "#000",
  height: 40,
  fontSize: 12,
});

export const FormControlCustom = styled(FormControl)({
  marginTop: "28px",
  border: "none",
});
