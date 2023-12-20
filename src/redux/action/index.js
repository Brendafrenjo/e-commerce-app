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