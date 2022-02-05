import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "../../services";
import { IProduct } from "../../types/types";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: IProduct[];
  getProducts: () => void;
  filteredProducts: IProduct[];
  getFilteredProducts: (filterValue: string) => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(
    [] as IProduct[]
  );

  const getProducts = () => {
    api
      .get("products")
      .then((response) => {
        setProducts([...products, ...response.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilteredProducts = (filterValue: string) => {
    if (filterValue === "Sanduíches") {
      setFilteredProducts(
        products.filter((product) => product.category === "Sanduíches")
      );
    }
    if (filterValue === "Bebidas") {
      setFilteredProducts(
        products.filter((product) => product.category === "Bebidas")
      );
    }
    if (filterValue === "Sobremesas") {
      setFilteredProducts(
        products.filter((product) => product.category === "Sobremesas")
      );
    }
  };

  return (
    <ProductsContext.Provider
      value={{ getProducts, products, getFilteredProducts, filteredProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
