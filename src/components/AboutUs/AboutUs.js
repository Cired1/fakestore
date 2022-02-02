import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What We Do</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Link to="/about" className={styles.btnAboutUs}>Learn more</Link>
    </section>
  );
};

export default AboutUs;
