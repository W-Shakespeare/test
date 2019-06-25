import React from "react";
import ReactDOM from "react-dom";
import "./css/Home.css";
import "./css/Contact.css";
import "./css/media-Home.css";
import "./css/media-Contact.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";

function Wrapper() {
  return (
    <div className="root2">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
