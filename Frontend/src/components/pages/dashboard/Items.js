import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="title">
          <h4>{title}</h4>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}>-</i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}>+</i>
        </div>

        <div className="price">
          <h4>RM{price}</h4>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}> X </i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;