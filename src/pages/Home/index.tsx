import ProductsList from "../../components/ProductsList";
import { useProducts } from "../../providers/Products";

const Home = () => {
  const { products } = useProducts();

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default Home;
