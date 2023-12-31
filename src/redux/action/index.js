//Add item to cart//

export function addCart(product) {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
}

//Delete item from cart//

export function deleteCart(product) {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
}

// Remove item from cart
export function removeFromCart(productId) {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
}

export function clearCart() {
  return {
    type: "CLEAR_CART"
  }
}

export const INITIALIZE_CART = "INITIALIZE_CART";

export const initializeCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  return {
    type: "INITIALIZE_CART",
    payload: storedCart,
  };
};
