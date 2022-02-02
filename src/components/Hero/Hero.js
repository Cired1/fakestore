import styles from "./Hero.module.css";
import {Link} from "react-router-dom"
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerLeft}>
        <small>Welcome</small>
        <h2 className={styles.title}>
          <span>Discover</span>
          <span>our</span>
          <span>products</span>
        </h2>
        <Link to="/products" className={styles.btnShopNow}>Shop now</Link>
      </div>
      <div className={styles.containerRight}>
        <img src={heroImage} alt="banner" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
