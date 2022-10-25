import React from "react";
import { Link } from "react-router-dom";
import Search from "../../assets/Search.png";
import Avatar from "../../assets/Avatar.png";
import ShoppingCart from "../../assets/ShoppingCart.png";

export default function AppHeader() {
  return (
    <header className="">
      <div className="">
        <img className="" src={Search} alt="Search button" />
      </div>
      <div>
        <Link to="">
          <img />
        </Link>
      </div>
      <div>
        <Link to="">
          <img />
        </Link>
      </div>
    </header>
  );
}
