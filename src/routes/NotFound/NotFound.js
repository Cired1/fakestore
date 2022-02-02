import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound = () => {
  return (
    <section className="page">
      <div className={styles.container}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.desc}>Page Not Found</p>
        <Link to="/" className={styles.link}>
          <RiArrowGoBackFill />
          Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
