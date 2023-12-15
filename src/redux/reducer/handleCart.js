const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_ITEM":
      return {
        items: [...state.items.filter((item) => item !== action.payload)],
      };
    default:
      return state;
  }
}

export default handleCart;
