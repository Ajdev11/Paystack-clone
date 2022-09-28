import React from "react";
import { NavLink } from "react-router-dom";

function Section10() {
  return (
    <div>
      <div className="section-10">
        <div className="try">
          <p>Try Paytstack Now</p> <br />
          <h1 className="gsapElement">
            Start accepting payments in <br />
            just 30 minutes
          </h1>
        </div>
        <div className="sales2">
          <NavLink
            className="create-free"
            id="freeAccount"
            to="/create free account"
          >
            Create free account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Section10;
