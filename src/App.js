import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { productAction } from "./store/productsSlice";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const data = await res.json();
    // setProducts(data);
    dispatch(productAction.setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="cart" exact element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
