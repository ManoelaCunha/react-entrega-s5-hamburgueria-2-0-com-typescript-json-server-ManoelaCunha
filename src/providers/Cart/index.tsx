import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import api from "../../services";
import { toast } from "react-toastify";
import { IProduct } from "../../types/types";
import { useAuth } from "../Auth";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: IProduct[];
  cartTotal: number;
  cleanCart: () => void | {};
  getProductsCart: () => void;
  addProduct: (product: IProduct) => void;
  deleteProduct: (id: number) => void;
  totalSale: (price: number) => void;
  updateTotalSale: (price: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);
  const [cartTotal, setCartTotal] = useState(0);

  const { userId, authToken } = useAuth();

  const getProductsCart = () => {
    api
      .get(`cart?userId=${userId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  const addProduct = (product: IProduct) => {
    api
      .post("cart", product, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((_) => {
        getProductsCart();
        toast.success("Produto adicionado no carrinho!");
      })
      .catch((error) => {
        console.error(error);
        toast.warning("Produto já foi adicionado no carrinho!");
      });
  };

  const deleteProduct = (id: number) => {
    api
      .delete(`cart/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((_) => {
        getProductsCart();
        toast.success("Produto excluído do carrinho!");
      })
      .catch((error) => console.error(error));
  };

  const totalSale = (price: number) => {
    const totalPrice = cart.reduce((acc, currentValue) => {
      return acc + currentValue.price;
    }, price);

    setCartTotal(totalPrice);
  };

  const updateTotalSale = (price: number) => {
    setCartTotal(cartTotal + price);
  };

  const cleanCart = async () => {
    setTimeout(
      () => toast.success("Todos os produtos foram removidos do carrinho!"),
      1000
    );
    for (const product of cart) {
      await api
        .delete(`cart/${product.id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((_) => {
          setCart([]);
          setCartTotal(0);
        })
        .catch((error) => console.error(error));
    }
  };

  const value = useMemo(
    () => ({
      cart,
      cartTotal,
      cleanCart,
      totalSale,
      addProduct,
      deleteProduct,
      getProductsCart,
      updateTotalSale,
    }),
    [cart, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
