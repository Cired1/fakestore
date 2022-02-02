import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = ({ id, image, price, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.containerBottom}>
        <h5 className={styles.title}>{title}</h5>
        <p>$ {price} USD</p>
        <Link to={`/products/${id}`} className={styles.link}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
