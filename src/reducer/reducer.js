export const reducer = (state, action) => {
  switch (action.type) {
    case "BOOK":
      return { available: !state.available };
    default:
      return state;
  }
};
