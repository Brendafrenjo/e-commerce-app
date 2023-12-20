const initialState = {
  cart: [],
};

function handleCart(state = initialState, action) {
  const product = action.payload;

  switch (action.type) {
    case "ADD_ITEM":
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...product,
              qty: 1,
            },
          ],
        };
      }

    case "DELETE_ITEM":
      const exist1 = state.cart.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== exist1.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }

    default:
      return state;
  }
}

export default handleCart;
