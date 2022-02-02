import styles from "./Filters.module.css";
import Select from "../Select/Select";
import useStore from "../../store/store";

const Filters = () => {
  const changeCategory = useStore((state) => state.changeCategory);
  const category = useStore((state) => state.category);

  return (
    <div className={styles.container}>
      <Select
        data={[
          "all",
          "electronics",
          "jewelery",
          "men's clothing",
          "women's clothing",
        ]}
        defaultValue={category}
        handleChange={changeCategory}
        label="Sort by category"
        name="categories"
      />
    </div>
  );
};

export default Filters;
