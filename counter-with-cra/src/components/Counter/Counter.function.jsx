import { useState } from "react";
import styles from "./Counter.module.css";

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount);
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <output>{count}</output>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

// static
// Counter.defaultProps = {
//   count: 1,
//   min: 1,
//   max: 10,
//   step: 1,
// };

export default Counter;
