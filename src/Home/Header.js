import React from "react";
import Nav from "./Nav";
import logo1 from "../img/logo1.jpg";

function Header() {
  return (
    <header>
      <img src={logo1} alt="Hot-dogs" />
      <Nav />
    </header>
  );
}
export default Header;
