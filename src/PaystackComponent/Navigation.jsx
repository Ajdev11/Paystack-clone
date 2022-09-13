import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="NavLinks">
      <NavLink className="links" to="/"></NavLink>
      <NavLink className="links" to="/whyPaystack">WhyPaystack</NavLink>
      <NavLink className="links" to="/customers">Customers</NavLink>
      <NavLink className="links"to="/pricing">Pricing</NavLink>
      <NavLink className="links"to="/learn">Learn</NavLink>
      </div>
      <div className="NavLinks2">
      <NavLink  id="right-nav" to="/developers"> Developers</NavLink>
      <NavLink  id="right-nav" to="/support">Support</NavLink>
      <NavLink  id="right-nav" to="/login">Login</NavLink>
      <NavLink  id='create-border' className="create-free"  to="/create free account">Create free account</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
