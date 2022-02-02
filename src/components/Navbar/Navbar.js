import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import CartButton from "../CartButton/CartButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import MenuButton from "../MenuButton/MenuButton";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.center}>
        <Logo />

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/products" className={styles.link}>
              Products
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>

        <div className={styles.options}>
          <CartButton />
          <ThemeButton />
          <MenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
