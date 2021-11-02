import { Button, Paper, Typography } from "@material-ui/core";

interface IProduct {
  image: string;
  name: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: IProduct;
  isInTheCart?: boolean;
}

const ProductCard = ({ product, isInTheCart = false }: ProductCardProps) => {
  const { image, name, category, price } = product;

  return (
    <Paper
      elevation={5}
      style={{ width: "300px", height: "346px", margin: "10px" }}
    >
      <img src={image} alt={name} width="200" height="200" />
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="subtitle1">{category}</Typography>
      <Typography variant="h6" color="primary">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      {isInTheCart ? (
        <Button
          variant="contained"
          color="secondary"
          //onClick={handleDeleteProduct}
        >
          Remover do Carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          //onClick={handleAddProduct}
        >
          Adicionar no Carrinho
        </Button>
      )}
    </Paper>
  );
};

export default ProductCard;
