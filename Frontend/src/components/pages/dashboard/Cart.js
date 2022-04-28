import React, { createContext, useReducer, useEffect, useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Cart.css";
import data from "./data";
import Items from "./Items";
import { CartManager } from "./CartManager";

export const CartContext = createContext();



const initialState = {
    //if item:data it will start with mapping all items
    item: [],
    totalAmount: 0,
    totalItem: 0,
};

export const addToCart = (productID) => {
    // for (var i = 0; i < data.length; i++) {
        // if (data[i].id == productID) {
            console.log("asdasdasda"+productID);

            // addProductToCart(data[i]);
        // }
    // }
}

const ContextCart = () => {
    const { clearCart, totalItem, totalAmount, addItem } = useContext(CartContext);
    const [item, setItems] = useState([]);

    const addProductToCart = (itemInfo) => {
        for (var i = 0; i < item.length; i++) {
            if (item[i].id == itemInfo.id) {
                
            }
            setItems([...item, itemInfo])
        }
    }

    return (
        <>
            <section className="main-cart-section">
                <h6>Shopping Cart</h6>
                <p className="total-items">
                    you have <span className="total-items-count">{totalItem} </span> items
                    in shopping cart
                </p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem} />;
                            })}
                        </Scrollbars>
                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : <span>RM {totalAmount}</span>
                    </h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
};

const Cart = () => {
    // const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(CartManager, initialState);
    const addItem = (id) => {
        return dispatch({
            type: "ADD_ITEM",
            payload: id,
        });
    }
    // to delete the indv. elements from an Item Cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    // clear the cart
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    // increment the item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    // decrement the item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    // we will use the useEffect to update the data
    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        // console.log("Awesome");
    }, [state.item]);

    return (
        <CartContext.Provider
            value={{ ...state, removeItem, clearCart, increment, decrement, addItem }}>
            <ContextCart />
        </CartContext.Provider>
    );
};

export default Cart;