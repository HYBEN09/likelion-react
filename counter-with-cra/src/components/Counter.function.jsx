import { useState } from "react";

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount);
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

  // const handleIncrement = () => {
  //   console.log("+");
  //   setCount(count + props.step);
  // };
  // const handleDecrement = () => {
  //   console.log("-");
  //   setCount(count - props.step);
  // };

  return (
    <div className="Counter">
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
