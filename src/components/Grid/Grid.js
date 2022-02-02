import styles from "./Grid.module.css";
import Product from "../Product/Product";

const Grid = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Grid;
