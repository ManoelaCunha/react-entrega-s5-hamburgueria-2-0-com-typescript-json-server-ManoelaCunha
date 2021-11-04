import { ContainerProductsList } from "./styles";
import { IProduct } from "../../types/types";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const ProductsList = ({ products, isInTheCart = false }: ProductsListProps) => {
  return (
    <ContainerProductsList>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInTheCart={isInTheCart}
        />
      ))}
    </ContainerProductsList>
  );
};

export default ProductsList;
