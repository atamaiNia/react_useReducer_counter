import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(100);

  const handleIncrement = () => {
    setCount(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <div className="Counter">
      <span className="Counter__value">{count}</span>
      <div className="Counter__controls">
        <button type="button" onClick={handleIncrement}>
          Збільшити на 1
        </button>
        <button type="button" onClick={handleDecrement}>
          Зменшити на 1
        </button>
      </div>
      <button type="button" onClick={() => setCount(100)}>
        Reset
      </button>
    </div>
  );
}
