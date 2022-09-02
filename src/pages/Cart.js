import React from "react";
import Cartitems from "../components/Cartitems/Cartitems";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      <Cartitems />
    </div>
  );
};

export default Cart;
