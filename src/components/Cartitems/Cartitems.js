import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../store/cartSlice";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./Cartitems.module.css";

const Cartitems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.length;
  console.log(cartItems);

  const removeFromCartHandler = (product) => {
    dispatch(cartAction.removeFromCart(product));
  };

  return (
    <>
      {cartCount ? (
        <div className={styles.cartItemsContainer}>
          <div className={styles.leftSide}>
            {cartItems.map((cartItem) => (
              <div className={styles.cartItem} key={cartItem.id}>
                <img className={styles.cartItemImage} src={cartItem.imageURL} />
                <div>
                  <h2>{cartItem.name}</h2>
                  <h4>Rs {cartItem.price}</h4>
                </div>
                <div className={styles.qtyBtns}>
                  <button className={styles.decreaseItemQtyBtn}>
                    <RemoveCircleOutlineIcon sx={{ fontSize: 30 }} />
                  </button>
                  <span className={styles.qtyCount}>1</span>
                  <button className={styles.increaseItemQtyBtn}>
                    <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
                  </button>
                </div>
                <button
                  className={styles.deleteBtn}
                  onClick={() => removeFromCartHandler(cartItem.id)}
                >
                  <DeleteIcon sx={{ fontSize: 40 }} />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.rightSide}>
            <CartSummary />
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.emptyError}>Why so empty??????</h1>
          <Link to="/">
            <h6 className={styles.redirectHome}>
              Click here to return to home to add something to cart
            </h6>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cartitems;
