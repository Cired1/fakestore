import styles from "./Products.module.css";
import Filters from "../../components/Filters/Filters";
import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  return (
    <section className="page">
      <Filters />
      <ProductList />
    </section>
  );
};

export default Products;
