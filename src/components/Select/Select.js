import styles from "./Select.module.css";

const Select = ({ data, defaultValue, handleChange, label, name }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.title}>
        {label}
      </label>
      <select
        name={name}
        onChange={handleChange}
        className={styles.select}
        defaultValue={defaultValue}
      >
        {data.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
