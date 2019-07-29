import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById("app")
);
