import { toast } from "react-toastify";

const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      //Check if Product is Already Exist//
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increase the Quantity//
        toast.info(`${exist.title} cart quantity increased`, {
          position: "bottom-left",
        });
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
}

export default handleCart;
