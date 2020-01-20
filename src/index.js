import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";
//import "../../css/swiper.css";
//import "./css/dark.css";
import "./css/font-icons.css";
//import "../../css/animate.css";
//import "../../css/magnific-popup.css";
import "./css/responsive.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
