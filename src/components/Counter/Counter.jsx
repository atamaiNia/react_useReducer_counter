import { useReducer } from 'react';
import './Counter.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 100);

  return (
    <div className="Counter">
      <span className="Counter__value">{count}</span>
      <div className="Counter__controls">
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          Збільшити на 1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          Зменшити на 1
        </button>
      </div>
    </div>
  );
}
