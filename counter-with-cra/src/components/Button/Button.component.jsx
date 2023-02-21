import styles from "./Button.module.css";

function Button() {
  return (
    <div className={styles.container}>
      <button type="button">ON</button>
      <button type="button">OFF</button>
    </div>
  );
}

export default Button;
