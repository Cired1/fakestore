import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styles from "./Stars.module.css";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.stars}>{tempStars}</div>
      <p>{reviews} reviews</p>
    </div>
  );
};

export default Stars;
