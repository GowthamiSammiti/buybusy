import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between p-8 bg-[#7064e5] text-[#fff] shadow-xl shadow-gray-100">
        <section className="text-xl font-bold">BusyBuy</section>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="text-xl font-semibold">Home</li>
          </Link>
          <Link to="/cart">
            <li className="text-xl font-semibold">Cart</li>
          </Link>

          <Link to="/orders">
            <li className="text-xl font-semibold">Order</li>
          </Link>
          <Link to="/signIn">
            <li className="text-xl font-semibold">SignIn</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
