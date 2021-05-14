import React from "react";
import Logo from "./robinhood.svg";
import "./Header.css";
function Header() {
  return (
    <div className="header_wrapper">
      {/*logo*/}
      <div className="header__logo">
        <img src={Logo} width={25} alt="" />
      </div>
      {/*search*/}
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/*menu-items*/}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Accounts</a>
      </div>
    </div>
  );
}

export default Header;
