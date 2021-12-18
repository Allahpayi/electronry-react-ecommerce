import { Route, Switch } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from './containers/Header';
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
