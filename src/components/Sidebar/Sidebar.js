import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import Logo from "../Logo/Logo";
import { FaHome, FaInfo, FaShoppingCart, FaTimes, FaTshirt } from "react-icons/fa";

const Sidebar = () => {
  const sidebar = useStore((state) => state.sidebar);
  const closeSidebar = useStore((state) => state.closeSidebar);

  return (
    <aside className={styles.container}>
      <div
        className={
          sidebar
            ? `${styles.sidebar} ${styles.sidebarShow}`
            : `${styles.sidebar}`
        }
      >
        <div className={styles.header}>
          <Logo />
          <button className={styles.btnClose} onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className={styles.links}>
          <li>
            <Link to="/" onClick={closeSidebar}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeSidebar}>
              <FaTshirt /> Products
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeSidebar}>
              <FaShoppingCart /> Cart
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              <FaInfo /> About
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
