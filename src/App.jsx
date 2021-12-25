import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import styled from "styled-components";

const Cart = React.lazy(() => import("./pages/Cart"));
const Home = React.lazy(() => import("./pages/Home"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Loading = styled(Loader)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
function App() {
  return (
    <Suspense
      fallback={
        <Loading
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      }
    >
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
