import React from "react";
import ReactDOM from "react-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Footer from "./components/Footer";
//import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./nayeem/pages/Home";
//import Page from "./views/Page";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
