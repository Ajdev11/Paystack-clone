import React from "react";
import { NavLink } from "react-router-dom";
import { suiteAPI } from "./Image";

function Section5() {
  return (
    <div>
      <div className="section-5">
        <div>
          <h1>
            Build custom payments <br /> experience with well- <br /> documented
            APIs
          </h1>
          <p id="Para">
            Developers love out thorough, well-documented APIs <br />
            that let you to build everything from simple weekend <br />
            projects, to complex financial products serving hundreds <br />
            of thousands of customer. If you can imagine it, you can <br />
            build it with Paystack
          </p>
          <ul className="feature-2">
            <li>
              Collect one--time and recurring payments from your app <br />
              or websites
            </li>
            <li>Make instant transfers</li>
            <li>Retrieve all your transaction and customer data</li>
            <li>Verify the identity of customers</li>
          </ul>
          <div className="payAPI">
            <NavLink className="paymentAPI" to="/paymentAPI">
              Payments API Quickstart
            </NavLink>
          </div>
        </div>
        <div>
          <img id="suiteAPI" src={suiteAPI} alt="RobustSuiteApi" />
        </div>
      </div>
    </div>
  );
}

export default Section5;
