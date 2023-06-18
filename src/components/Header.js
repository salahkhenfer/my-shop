import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/header-logo.png";
import searicon from "../image/searchIcon.png";
import shoppingcart from "../image/shopping-cart.png";
import "../components/style/header.css";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <img src={searicon} className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={user ? `/` : "/Login "}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLinetow">
              {!user ? "sign in" : "sign out"}
            </span>
          </div>
        </Link>
        <Link to="/Orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLinetow">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLinetow">Prime</span>
        </div>
        <Link to="/Basket">
          <div className="header-optionBasket">
            <img src={shoppingcart} />
            <div className="header-basketCount">{basket.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
