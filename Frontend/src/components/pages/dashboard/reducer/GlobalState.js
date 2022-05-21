import React, { useReducer } from "react";

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART, CLEAR_ALL_FROM_CART, CALC_TOTAL_PRICE } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";

export default function GlobalState(props) {

  useEffect(() => {
    getproduct();
  }, []);

  const [DBProducts, setProduct] = useState([]);
  const getproduct = async () => {
    await axios.get("http://localhost:4000/products/allProducts").then(res => {
      setProduct(res.data.productsData)
    }).catch(err => {
      console.log(err);
    })
  }

  const products = DBProducts;
  const newTotal = 0;

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  const deleteProductFromCart = (productID) => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: productID,
    });
  };

  const calcTotalPrice = (productID) => {
    dispatch({
      type: CALC_TOTAL_PRICE,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        newTotal: state.newTotal,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        deleteProductFromCart: deleteProductFromCart,
        calcTotalPrice: calcTotalPrice,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
