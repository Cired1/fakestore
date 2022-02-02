import styles from "./Spinner.module.css"
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
    return (
      <div className={styles.container}>
        <FaSpinner size={60} />
      </div>
    );
  };

export default Spinner