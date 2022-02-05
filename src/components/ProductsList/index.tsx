import ProductCard from "../ProductCard";
import { IProduct } from "../../types/types";

import { useState, useEffect } from "react";
import { useCart } from "../../providers/Cart";

import { Box } from "@material-ui/core";
import { ContainerProductsList } from "./styles";
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
  const { cart, getProductsCart } = useCart();
  const { getFilteredProducts, filteredProducts } = useProducts();

  const [filterValue, setFilterValue] = useState("Todos");

  useEffect(() => {
    getProductsCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    getFilteredProducts(filterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, filterValue]);

  return (
    <Box>
      <FormControlCustom variant="outlined">
        <Filter
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={filterValue}
          label="Filtro"
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
    </Box>
  );
};

export default ProductsList;
