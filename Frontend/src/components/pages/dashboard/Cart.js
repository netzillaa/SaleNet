import React, { useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import '../../../css/Cart.css';

import useOnClickOutside from "./reducer/useOnClickOutside";

export default function Cart({
    isToggle,
    setToggle,
    carts,
    removeProductFromCart,
    deleteProductFromCart,
    addProductToCart,
    clearCart,
}) {

    const boughtProducts = carts.map(({ product, quantity }) => {
        return (
            <div>
                <div
                    key={product.id}
                />
                <div className="items-info">
                    <div className="title">
                        <h4>{product.productName}</h4>
                    </div>

                    <div className="add-minus-quantity">
                        <i className="fas fa-minus minus" onClick={() => removeProductFromCart(product.id)}>-</i>
                        <input type="text" placeholder={quantity} disabled />
                        <i className="fas fa-plus add" onClick={() => addProductToCart(product)}>+</i>
                    </div>

                    <div className="price">
                        <h4>RM{product.productPrice * quantity}</h4>
                    </div>

                    <div className="remove-item">
                        <i
                            className="fas fa-trash-alt remove"
                            onClick={() => deleteProductFromCart(product.id)}> X </i>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <section className="main-cart-section">
                <h6>Shopping Cart</h6>
                <p className="total-items">
                    you have <span className="total-items-count">{carts.length} </span> items
                    in shopping cart
                </p>
                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {boughtProducts}
                        </Scrollbars>
                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : <span>RM {}</span>
                    </h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={() => clearCart()}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
}