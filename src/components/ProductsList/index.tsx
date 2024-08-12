import ProductCard from "../ProductCard";
import { IProduct } from "../../types/types";

import { useState, useEffect } from "react";

import { BoxProductsList, ContainerProductsList } from "./styles";
import {
  BootstrapInput,
  Filter,
  FormControlCustom,
  MenuItemCustom,
} from "../ProductCard/styles";
import { useProducts } from "../../providers/Products";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const ProductsList = ({ products, isInTheCart = false }: ProductsListProps) => {
  const { getFilteredProducts, filteredProducts } = useProducts();

  const [filterValue, setFilterValue] = useState("Todos");

  useEffect(() => {
    getFilteredProducts(filterValue);
  }, [products, filterValue]);

  return (
    <BoxProductsList>
      <FormControlCustom variant="outlined">
        <Filter
          label="Filtro"
          value={filterValue}
          onChange={(e: any) => setFilterValue(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItemCustom value={"Todos"}>Todos</MenuItemCustom>
          <MenuItemCustom value={"Sanduíches"}>Sanduíches</MenuItemCustom>
          <MenuItemCustom value={"Bebidas"}>Bebidas</MenuItemCustom>
          <MenuItemCustom value={"Sobremesas"}>Sobremesas</MenuItemCustom>
        </Filter>
      </FormControlCustom>

      <ContainerProductsList>
        {filterValue === "Todos"
          ? products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInTheCart={isInTheCart}
              />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ContainerProductsList>
    </BoxProductsList>
  );
};

export default ProductsList;
