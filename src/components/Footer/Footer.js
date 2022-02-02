import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.center}>
        <small style={{color: "white"}}>Bryan Abundis © 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
