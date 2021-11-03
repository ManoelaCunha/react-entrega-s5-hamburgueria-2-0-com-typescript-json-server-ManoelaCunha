import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "../../services";

interface IProduct {
  image: string;
  name: string;
  category: string;
  price: number;
  id: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cartToken: string;
  cart: IProduct[];
  getProductsCart: () => void;
  addProduct: (product: IProduct) => void;
  deleteProduct: (id: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);
  console.log(cart);

  const [cartToken] = useState(
    () => localStorage.getItem("@HamburgueriaKenzie:token") || ""
  );

  const getProductsCart = () => {
    api
      .get("cart", {
        headers: { Authorization: `Bearer ${cartToken}` },
      })
      .then((response) => {
        setCart([...cart, ...response.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  const addProduct = (product: IProduct) => {
    api
      .post("cart", product, {
        headers: { Authorization: `Bearer ${cartToken}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id: number) => {
    api
      .delete(`cart/${id}`, {
        headers: { Authorization: `Bearer ${cartToken}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider
      value={{ cartToken, cart, addProduct, deleteProduct, getProductsCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
