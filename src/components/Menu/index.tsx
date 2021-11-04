import { Badge, IconButton } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import img from "../../assets/Mask Group.png";

import {
  CssAppBar,
  CssBoxIcon,
  CssBoxImg,
  CssExitToApp,
  CssShoppingCart,
  CssToolbar,
} from "./styles";

const Menu = () => {
  const history = useHistory();
  const { Logout } = useAuth();
  const { cart } = useCart();

  const length = cart.length;

  const sendTo = (path: any) => {
    history.push(path);
  };

  return (
    <CssAppBar position="static">
      <CssToolbar>
        <CssBoxImg>
          <Link to="/home">
            <img src={img} alt="logo" width="150" />
          </Link>
        </CssBoxImg>

        <CssBoxIcon>
          <IconButton color="inherit" onClick={() => sendTo("/cart")}>
            <Badge badgeContent={length} color="error">
              <CssShoppingCart />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={() => Logout(history)}>
            <CssExitToApp />
          </IconButton>
        </CssBoxIcon>
      </CssToolbar>
    </CssAppBar>
  );
};

export default Menu;
