import { Box } from "@material-ui/core";
import { Remove, Add, Delete } from "@material-ui/icons";

import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import { IProduct } from "../../types/types";

import {
  CssBoxImg,
  CssButtonAdd,
  CssButtonGroup,
  CssPaper,
  CssPaperCart,
  CssIconButton,
  CssTypographyCategory,
  CssTypographyCount,
  CssTypographyPrice,
  CssTypographyTitle,
  CssButton,
} from "./styles";

interface ProductCardProps {
  product: IProduct;
  isInTheCart?: boolean;
}

const ProductCard = ({ product, isInTheCart = false }: ProductCardProps) => {
  const { image, name, category, price, id } = product;
  const { addProduct, deleteProduct, totalSale, updateTotalSale } = useCart();
  const { userId } = useAuth();

  const [count, setCount] = useState(1);

  const handleAddProduct = () => {
    product["userId"] = Number(userId);
    addProduct(product);
    totalSale(price);
  };

  const handleDeleteProduct = () => {
    deleteProduct(id);
    totalSale(-price);
  };

  return (
    <>
      {isInTheCart ? (
        <CssPaperCart elevation={5}>
          <CssBoxImg>
            <img src={image} alt={name} width="135" height="135" />
          </CssBoxImg>

          <Box>
            <CssTypographyTitle variant="subtitle1">{name}</CssTypographyTitle>
            <CssTypographyPrice variant="h6">
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </CssTypographyPrice>

            <CssButtonGroup>
              <CssButton
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                  count > 1 && updateTotalSale(-price);
                }}
              >
                <Remove fontSize="small" />
              </CssButton>

              <CssTypographyCount variant="h6">{count}</CssTypographyCount>

              <CssButton
                onClick={() => {
                  setCount(count + 1);
                  updateTotalSale(price);
                }}
              >
                <Add fontSize="small" />
              </CssButton>
            </CssButtonGroup>
          </Box>

          <Box>
            <CssIconButton onClick={handleDeleteProduct}>
              <Delete />
            </CssIconButton>
          </Box>
        </CssPaperCart>
      ) : (
        <CssPaper elevation={5}>
          <CssBoxImg>
            <img src={image} alt={name} width="200" height="200" />
          </CssBoxImg>
          <CssTypographyTitle variant="h6">{name}</CssTypographyTitle>
          <CssTypographyCategory variant="subtitle1">
            {category}
          </CssTypographyCategory>
          <CssTypographyPrice variant="h6">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CssTypographyPrice>

          <CssButtonAdd variant="contained" onClick={handleAddProduct}>
            Adicionar
          </CssButtonAdd>
        </CssPaper>
      )}
    </>
  );
};

export default ProductCard;
