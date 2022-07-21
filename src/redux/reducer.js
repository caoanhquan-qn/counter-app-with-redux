const initialState = { counter: 0, disabled: true };
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'reset':
      return {
        ...state,
        counter: 0,
      };
    case 'disable':
      return {
        ...state,
        disabled: action.payload,
      };
    default:
      return { ...state };
  }
};
