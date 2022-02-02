import styles from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleProduct } from "../../services/products/getSingleProduct";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Stars from "../../components/Stars/Stars";
import Spinner from "../../components/Spinner/Spinner";
import useStore from "../../store/store";

const ProductDetails = () => {
  const addCart = useStore((state) => state.addCart);
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery(["product", id], () => getSingleProduct(id));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  return (
    <section className="page">
      <Link to="/products" className={styles.backLink}>
        <RiArrowGoBackFill />
        Back to the list of products
      </Link>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.containerRight}>
          <h2>{product.title}</h2>
          <Stars stars={product.rating.rate} reviews={product.rating.count} />
          <h3>$ {product.price} USD</h3>
          <p>{product.description}.</p>
          <p>
            Category: <strong>{product.category}</strong>
          </p>
          <Link
            to="/cart"
            className={styles.btnAdd}
            onClick={() =>
              addCart({ ...product, amount: 1})
            }
          >
            <FiShoppingCart /> Add to cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
