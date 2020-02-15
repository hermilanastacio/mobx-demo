import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//This will populate our store into all children
import { Provider } from "mobx-react";
//We imported our global store which is BirdStore
import BirdStore from "./store/BirdStore";

//This is just a convention to add it in Root const first
const Root = (
  <Provider BirdStore={BirdStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
