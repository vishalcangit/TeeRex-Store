import React from "react";
import { useSelector } from "react-redux";
import styles from "./CartSummary.module.css";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  let cartTotal = 0;
  cartItems.map((cartItem) => (cartTotal += cartItem.price));
  console.log(cartTotal);

  return (
    <div className={styles.cartSummaryContainer}>
      <h3>Cart Summary</h3>
      <h2>Cart Total= Rs {cartTotal}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
