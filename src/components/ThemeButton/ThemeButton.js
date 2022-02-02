import styles from "./ThemeButton.module.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import useStore from "../../store/store";

const ThemeButton = () => {
  const changeTheme = useStore((state) => state.changeTheme);
  const theme = useStore((state) => state.theme);

  return (
    <button className={styles.btnTheme} onClick={changeTheme}>
      {theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
    </button>
  );
};

export default ThemeButton;
