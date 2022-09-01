import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const addToCardHandler = (product) => {
    console.log(product);
    dispatch(cartAction.addToCart(product));
  };

  // console.log(products);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContainer}>hie</div>
      <div className={styles.rightContainer}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search...."
          ></input>
          <button className={styles.searchBtn}>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.productList}>
          {products.map((product) => (
            <div className={styles.productContainer} key={product.id}>
              <img src={product.imageURL} />
              <span className={styles.productName}>{product.name}</span>
              <div className={styles.info}>
                <p className={styles.productPrice}>Rs {product.price}/.</p>
                <button
                  onClick={() => addToCardHandler(product)}
                  className={styles.addToCartBtn}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
