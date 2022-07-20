import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (counter === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [counter]);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
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
