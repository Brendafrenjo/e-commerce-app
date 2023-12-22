import { toast } from "react-toastify";

const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      //Check if Product is Already Exist//
      const existingProduct = state.find((x) => x.id === product.id);
      if (existingProduct) {
        //Increase the Quantity//
        toast.info(`${existingProduct.title} cart quantity increased`, {
          position: "bottom-left",
        });
        const updatedState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedState));
        return updatedState;
      } else {
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });

        const updatedState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem("cartItems", JSON.stringify(updatedState));
        return updatedState;
      }

    case "DELETE_ITEM":
      const existProductToDelete = state.find((x) => x.id === product.id);
      if (existProductToDelete.qty === 1) {
        return state.filter((x) => x.id !== existProductToDelete.id);
      } else {
        const updatedState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedState));
        return updatedState;
      }

    default:
      return state;
  }
}

export default handleCart;
