import React from "react";
import cart from './img/shopping-cart.png'

const CartWidget = () => {
  return (
    <div className="cart">
      <img src={cart} alt="" />
    </div>
  );
};

export default CartWidget;
