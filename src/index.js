import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

import "./styles.scss";
import "./mediaquery.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <Body />
    <Footer />
  </StrictMode>,
  rootElement
);
