import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Fake Store</h1>
    </div>
  );
};

export default Logo;
