/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART, CLEAR_ALL_FROM_CART, CALC_TOTAL_PRICE } from "./types";

const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.productID === product.productID);

  if (curItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[curItemIndex] };
    copyItem.quantity++;
    copy[curItemIndex] = copyItem;
    
  }

  // # always update your state, and update whatever you did
  return { ...state, carts: copy };
};

const removeProductFromCart = (state, productID) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.productID === productID);

  const curItem = { ...copy[curItemIndex] };
  curItem.quantity--;

  if (curItem.quantity <= 0) {
    copy.splice(curItemIndex, 1);
  } else {
    copy[curItemIndex] = curItem;
  }

  return { ...state, carts: copy };
};

const deleteProductFromCart = (state, productID) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.productID === productID);

  const curItem = { ...copy[curItemIndex] };
  curItem.quantity = 0;

  if (curItem.quantity <= 0) {
    copy.splice(curItemIndex, 1);
  } else {
    copy[curItemIndex] = curItem;
  }

  return { ...state, carts: copy };
};

const calcTotalPrice = (state) => {
  const copy = [...state.carts];
  let newTotal = 0;

  for (let i = 0; i < copy.length; i++) {
    const copyItem = { ...copy[i] };
    newTotal += copyItem.product.productPrice * copyItem.quantity;
  }

  return { ...state, newTotal: newTotal };
};

const clearCart = (state) => {
  return {
    ...state,
    carts: [],
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeProductFromCart(state, action.payload);
    case DELETE_FROM_CART:
      return deleteProductFromCart(state, action.payload);
    case CALC_TOTAL_PRICE:
      return calcTotalPrice(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    default:
      return state;
  }
};
