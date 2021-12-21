import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./globalStyles";
import "swiper/css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
