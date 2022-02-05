import { createContext, useContext, useState, ReactNode } from "react";
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
  cleanCart: () => void;
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
      .catch((error) => console.log(error));
  };

  const addProduct = (product: IProduct) => {
    api
      .post("cart", product, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((_) => {
        toast.success("Produto adicionado no carrinho!");
      })
      .catch((_) => {
        toast.warning("Produto já foi adicionado no carrinho!");
      });
  };

  const deleteProduct = (id: number) => {
    api
      .delete(`cart/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((_) => {
        toast.success("Produto excluído do carrinho!");
      })
      .catch((error) => console.log(error));
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

  const cleanCart = () => {
    cart.map((product) => {
      return api
        .delete(`cart/${product.id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((_) => {
          toast.success("Seu carrinho está limpo!");
          setCartTotal(0);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cleanCart,
        totalSale,
        addProduct,
        deleteProduct,
        getProductsCart,
        updateTotalSale,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
