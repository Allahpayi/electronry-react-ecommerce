import { Route, Switch } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from './containers/Header';
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
