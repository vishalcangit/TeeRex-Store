import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction, productSlice } from "./store/productsSlice";

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

  return <div className="App"></div>;
}

export default App;
