import { Button, Typography } from "@material-ui/core";
import { useCart } from "../../providers/Cart";
import { IProduct } from "../../types/types";
import ProductCard from "../ProductCard";
import {
  BoxCartList,
  ContainerCartList,
  ContainerText,
  ContainerTitle,
  ContainerTotalPrice,
} from "./styles";

interface CartListProps {
  productsCart: IProduct[];
  isInTheCart?: boolean;
}

const CartList = ({ productsCart, isInTheCart = false }: CartListProps) => {
  const { cart, cartTotal, cleanCart, getProductsCart } = useCart();

  const styleBtn = {
    width: "300px",
    color: "#828282",
    marginTop: "8px",
    marginBottom: "20px",
    backgroundColor: "#E0E0E0",
  };

  const styleTitle = {
    color: "#333333",
    padding: "5px",
  };

  const styleSubtitle = {
    color: "#828282",
  };

  return (
    <>
      {cart.length === 0 ? (
        <ContainerText>
          <Typography variant="h5" style={styleTitle}>
            Seu carrinho está vazio!
          </Typography>
          <Typography variant="subtitle1" style={styleSubtitle}>
            Adicione Itens
          </Typography>
        </ContainerText>
      ) : (
        <>
          <BoxCartList>
            <ContainerTitle>
              <Typography variant="h6">Carrinho de Compras</Typography>
            </ContainerTitle>
            <ContainerCartList>
              {productsCart.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  isInTheCart={isInTheCart}
                />
              ))}
            </ContainerCartList>
            <ContainerTotalPrice>
              <Typography variant="subtitle1">Total: </Typography>
              <Typography variant="subtitle1">
                {cartTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
            </ContainerTotalPrice>
            <Button variant="contained" onClick={cleanCart} style={styleBtn}>
              Remover Tudo
            </Button>
          </BoxCartList>
        </>
      )}
    </>
  );
};

export default CartList;
