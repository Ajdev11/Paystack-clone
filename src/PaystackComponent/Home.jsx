import React from "react";
import Logo from "./Logo";
import Name from "./Name";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="logo-name">
        <Logo />
        <Name />
        <Navigation />
      </div>
      <div className="section-1">
        <h1>
          Modern Online and Offline <br />
          Payments for Africa
        </h1>
        <p>
          Paystack helps businesses in Africa get paid by anyone, <br />
          anywhere in the world
        </p>
        <div id="links-create-sales">
        <NavLink id='create-border' className="create-free"  to="/create free account">Create free account</NavLink> 
        <NavLink className="sales-link" to="/contact Sales">Or Contact sales</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
