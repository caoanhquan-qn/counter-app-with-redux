const initialState = { counter: 0 };
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
    default:
      return { ...state };
  }
};
