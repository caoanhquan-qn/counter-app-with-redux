export const increment = () => {
  return {
    type: 'increment',
  };
};

export const decrement = () => {
  return {
    type: 'decrement',
  };
};

export const reset = () => {
  return {
    type: 'reset',
    payload: 0,
  };
};

export const setDisabled = (disabled) => {
  return {
    type: 'disable',
    payload: disabled,
  };
};
