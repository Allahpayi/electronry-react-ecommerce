import { Route, Switch } from "react-router-dom";
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
    </>
  );
}

export default App;
