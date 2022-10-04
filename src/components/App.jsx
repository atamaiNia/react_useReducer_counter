import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <div className="container">
      <h1>React - counter</h1>
      <Counter initialValue={50} />;
    </div>
  );
};
