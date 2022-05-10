import { getTableSortLabelUtilityClass } from "@mui/material";
import React, { useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../../css/Cart.css';

import useOnClickOutside from "./reducer/useOnClickOutside";

export default function Cart({
    carts,
    removeProductFromCart,
    deleteProductFromCart,
    addProductToCart,
    clearCart,
}) {

    const boughtProducts = carts.map(({ product, quantity }) => {

        let productTotalPrice;

        const getProductTotal = () => {
            productTotalPrice = product.productPrice * quantity;
        };

        const productFunctions = (action) => {
            if (action === "add") {
                addProductToCart(product)

            } else if (action === "remove") {
                removeProductFromCart(product.id)
            }
            else if (action === "delete") {
                deleteProductFromCart(product.id)
            }

            getProductTotal()
            getTotal(action, product, productTotalPrice)
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
        setTotal(0);
    }, []);

    const [totalPrice, setTotal] = useState()

    const getTotal = (action, product, productTotalPrice) => {
        if (action === "add") {
            setTotal(totalPrice + product.productPrice);
        } else if (action === "remove") {
            setTotal(totalPrice - product.productPrice);
        }
        else if (action === "delete") {
            setTotal(totalPrice - productTotalPrice);
        }
    };

    const clearTotal = () => {
        setTotal(0);
    };

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

    const postOrder = async () => {
        const completeOrder = JSON.stringify(order)
        await axios.post("http://localhost:4000/products/createOrder", {order, totalPrice}, config).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
      }

    function checkOut() {
        setOrder(carts)
        console.log(order);
        postOrder()
        // window.location.href = "http://localhost:3000/checkOut";
    }

    const [order, setOrder] = useState([]);

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
                        Cart Total : <span>RM {totalPrice}</span>
                    </h3>
                    <button onClick={() => checkOut()} >checkout</button>
                    <button className="clear-cart" onClick={() => clearTotal()}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
}