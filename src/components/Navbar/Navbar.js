import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.NavbarContainer}>
      <NavLink to="/" className={styles.logo}>
        {" "}
        TeeRex Store
      </NavLink>

      <NavLink to="cart" className={styles.cartBtn}>
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
        <p className={styles.cartCount}>{cart.length}</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
