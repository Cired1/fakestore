import { FaBars } from "react-icons/fa";
import useStore from "../../store/store";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const openSidebar = useStore((state) => state.openSidebar);

  return (
    <button className={styles.btnMenu} onClick={openSidebar}>
      <FaBars />
    </button>
  );
};

export default MenuButton;
