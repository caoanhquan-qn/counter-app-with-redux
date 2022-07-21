import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import './App.scss';
import { decrement, increment, reset, setDisabled } from './redux/action';

function App() {
  const counter = useSelector((state) => state.counter);
  const disabled = useSelector((state) => state.disabled);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter === 0) {
      dispatch(setDisabled(true));
    } else {
      dispatch(setDisabled(false));
    }
  }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
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
