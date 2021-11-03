import Menu from "../../components/Menu";
import CartList from "../../components/CartList";
import { useCart } from "../../providers/Cart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <Menu />
      <CartList productsCart={cart} isInTheCart={true} />
    </>
  );
};

export default Cart;
