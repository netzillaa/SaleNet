import { getTableSortLabelUtilityClass } from "@mui/material";
import React, { useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../../css/Cart.css';

import useOnClickOutside from "./reducer/useOnClickOutside";

export default function Cart({
    carts,
    newTotal,
    removeProductFromCart,
    deleteProductFromCart,
    addProductToCart,
    calcTotalPrice,
    clearCart,
}) {

    const boughtProducts = carts.map(({ product, quantity }) => {
        const productFunctions = (action) => {
            if (action === "add") {
                addProductToCart(product)

            } else if (action === "remove") {
                removeProductFromCart(product.id)
            }
            else if (action === "delete") {
                deleteProductFromCart(product.id)
            }

            calcTotalPrice()
        };

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
                        <i className="fas fa-minus minus" onClick={() => productFunctions("remove")}>-</i>
                        <input type="text" placeholder={quantity} disabled />
                        <i className="fas fa-plus add" onClick={() => productFunctions("add")}>+</i>
                    </div>

                    <div className="price">
                        <h4>RM{product.productPrice * quantity}</h4>
                    </div>

                    <div className="remove-item">
                        <i
                            className="fas fa-trash-alt remove"
                            onClick={() => productFunctions("delete")}> X </i>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        calcTotalPrice();
    }, []);

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const userInfo = localStorage.getItem("userInfo");

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload).shop;
    }

    const shopData = parseJwt(userInfo);

    const postOrder = async () => {
        await axios.post("http://localhost:4000/products/createOrder", { carts, newTotal, shopData }, config).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    function checkOut() {
        postOrder()
        window.location.href = "http://localhost:3000/orderDetails";
    }


    const clearCartAndTotalPrice = () => {
        clearCart()
        calcTotalPrice()
    };

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
                        Cart Total : <span>RM {newTotal}</span>
                    </h3>
                    <button onClick={() => checkOut()} >checkout</button>
                    <button className="clear-cart" onClick={() => clearCartAndTotalPrice()}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
}