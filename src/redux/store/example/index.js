const defaultState = {
  text: ''
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case `EXAMPLE_DISPATCHED`:
      return {
        ...state,
        text: `Clicked!`
      };
  }

  return state;
};