import { toast } from "react-toastify";

const cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      // Check if the product is already in the cart//
      const existingProduct = state.find((x) => x.id === product.id);
      if (existingProduct) {
        // If the product is in the cart, increase its quantity//
        toast.info(`${existingProduct.title} cart quantity increased`, {
          position: "bottom-left",
        });
        // Update the state by mapping through the existing items
        // and incrementing the quantity of the matching product
        const updatedState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );

        // Update the local storage with the updated state
        localStorage.setItem("cartItems", JSON.stringify(updatedState));
        // Return the updated state
        return updatedState;
      } else {
        // If the product is not in the cart, add it with quantity 1
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });

        // Create a new state array by spreading the existing items
        // and adding a new item with quantity 1
        const updatedState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];

        // Update the local storage with the updated state
        localStorage.setItem("cartItems", JSON.stringify(updatedState));

        // Return the updated state
        return updatedState;
      }

    case "DELETE_ITEM":
      // Check if the product to be deleted exists in the state
      const existProductToDelete = state.find((x) => x.id === product.id);

      // If the quantity of the product to be deleted is 1, remove it from the state
      if (existProductToDelete.qty === 1) {
        return state.filter((x) => x.id !== existProductToDelete.id);
      } else {
        // If the quantity is greater than 1, decrement the quantity
        const updatedState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );

        // Update the local storage with the updated state
        localStorage.setItem("cartItems", JSON.stringify(updatedState));

        // Return the updated state
        return updatedState;
      }

    default:
      return state;
  }
}

export default handleCart;
