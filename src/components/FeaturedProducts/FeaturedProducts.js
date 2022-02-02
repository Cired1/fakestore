import styles from "./FeaturedProducts.module.css";
import { useQuery } from "react-query";
import { getAllProducts } from "../../services/products/getAllProducts";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";

const FeaturedProducts = () => {
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
    <section className={styles.container}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.featured}>
        {[...products]
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(6, 9)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
      <Link to="/products" className={styles.link}>
        All products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
