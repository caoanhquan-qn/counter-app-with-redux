import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import './App.scss';
import { decrement, increment, reset } from './redux/action';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (counter === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [counter]);
  const handleIncrement = () => {
    dispatch(increment(counter));
  };
  const handleDecrement = () => {
    dispatch(decrement(counter));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div className="button-container">
        <Button type="primary" onClick={handleDecrement} disabled={disabled}>
          Decrement
        </Button>
        <Button type="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button type="primary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
