import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navBars">
      <div className="name">
        <Link id="Names" to="/">
          paystack
        </Link>
      </div>
      <div className="NavLinks">
        <Link className="links" to="/whyPaystack">
          WhyPaystack
        </Link>
        <Link className="links" to="/customers">
          Customers
        </Link>
        <Link className="links" to="/pricing">
          Pricing
        </Link>
        <Link className="links" to="/learn">
          Learn
        </Link>
      </div>
      <div className="NavLinks2">
        <Link id="right-nav" to="/developers">
          Developers
        </Link>
        <Link id="right-nav" to="/support">
          Support
        </Link>
        <Link id="right-nav" to="/login">
          Login
        </Link>
        <Link
          id="create-border"
          className="create-free"
          to="/create free account"
        >
          Create free account
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
