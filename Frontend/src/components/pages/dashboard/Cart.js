import React, { createContext, useReducer, useEffect, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Cart.css";
import data from "./data";
import Items from "./Items";
import { CartManager } from "./CartManager";

export const CartContext = createContext();

const initialState = {
    item: data,
    totalAmount: 0,
    totalItem: 0,
};

const ContextCart = () => {
    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

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
            value={{ ...state, removeItem, clearCart, increment, decrement }}>
            <ContextCart />
        </CartContext.Provider>
    );
};

export default Cart;