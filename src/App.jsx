import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { getProducts } from "./redux/actions/productActions";
import { getCategories } from "./redux/actions/categoryActions";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const dispatch = useDispatch();
  const fetchAllProducts = async () => {
    const response = await axios
      .get("http://localhost:3000/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getProducts(response.data));
  };

  const fetchAllCategories = async () => {
    const response = await axios
      .get("http://localhost:3000/categories")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getCategories(response.data));
  };
  useEffect(() => {
    fetchAllProducts();
    fetchAllCategories();
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
