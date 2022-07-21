export const increment = (counter) => {
  return {
    type: 'increment',
    payload: counter + 1,
  };
};

export const decrement = (counter) => {
  return {
    type: 'decrement',
    payload: counter - 1,
  };
};

export const reset = () => {
  return {
    type: 'reset',
    payload: 0,
  };
};
