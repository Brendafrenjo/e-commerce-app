export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INITIALIZE_CART = "INITIALIZE_CART";

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

//Clear cart
export function clearCart() {
  return {
    type: "CLEAR_CART",
  };
}

export function clearCartAfterOrder() {
  return {
    type: "CLEAR_CART_AFTER_ORDER",
  };
}

//Initialize the shopping cart from local storage
export const initializeCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  return {
    type: "INITIALIZE_CART",
    payload: storedCart,
  };
};
