import styles from "./ProductList.module.css";
import { useQuery } from "react-query";
import { getAllProducts } from "../../services/products/getAllProducts";
import Grid from "../Grid/Grid";
import Spinner from "../Spinner/Spinner";
import useStore from "../../store/store";

const ProductList = () => {
  const category = useStore((state) => state.category);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(["products"], getAllProducts);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.container}>
      <Grid
        products={
          category === "all"
            ? products
            : [...products].filter((product) => product.category === category)
        }
      />
    </div>
  );
};

export default ProductList;
