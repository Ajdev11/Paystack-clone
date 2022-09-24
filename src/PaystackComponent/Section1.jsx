import { React, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function Section1() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".gsapElement", { opacity: 0, duration: 1, y: 100 });
  });
  return (
    <div>
      <div className="section-1">
        <div>
          <h1 className="gsapElement">
            Modern Online and Offline <br />
            Payments for Africa
          </h1>
          <p className="gsapElement">
            Paystack helps businesses in Africa get paid by anyone, <br />
            anywhere in the world
          </p>
          <div id="links-create-sales" className="gsapElement">
            <div>
              <NavLink
                className="create-free"
                id="freeAccount"
                to="/create free account"
              >
                Create free account
              </NavLink>
            </div>
            <div>
              <NavLink className="sales-link" to="/contact Sales">
                Or Contact sales
              </NavLink>
            </div>
          </div>
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Section1;
