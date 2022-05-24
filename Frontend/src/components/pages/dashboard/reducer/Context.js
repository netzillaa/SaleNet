import { createContext } from "react";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

export default createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  deleteProductFromCart: (productID) => {},
  calcTotalPrice: () => {},
  clearCart: () => {},
});
