import React from "react";
import { useCounterContext } from "../context/counterContext";


const Counter: React.FC = () => {
  const { count, setCount, countFromObj, setCountFromObj } = useCounterContext();

  return (
    <div>
      {/* タプル形式の状態管理 */}
      <h2>タプル形式のカウンター</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* オブジェクト形式の状態管理 */}
      <h2>オブジェクト形式のカウンター</h2>
      <p>Count from Object: {countFromObj}</p>
      <button onClick={() => setCountFromObj(countFromObj + 1)}>
        Increment Count (Object)
      </button>
    </div>
  );
};

export default Counter;
