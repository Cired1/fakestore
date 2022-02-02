import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useStore from "../../store/store";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const totalItems = useStore((state) => state.totalItems);

  return (
    <div className={styles.container}>
      <NavLink to="/cart" className={styles.link}>
        <FaShoppingCart />
        <span className={styles.counter}>{totalItems}</span>
      </NavLink>
    </div>
  );
};

export default CartButton;
