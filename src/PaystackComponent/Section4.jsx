import React from "react";
import { NavLink } from "react-router-dom";

function Section4() {
  return (
    <div>
      <div className="section-4">
        <div id="section-4">
          <h1>icon here</h1>
        </div>
        <div>
          <h1>
            Delight customers with a <br /> seamless payments <br />
            experience
          </h1>
          <p id="Para">
            Give your customers the gift of modern, frictionless, <br />{" "}
            painless payments. Integrate Paystack once and let your <br />
            customers pay you however they want.
          </p>
          <div className="features-list">
            <ul id="Para">
              <li>Card</li>
              <li>Bank Account</li>
              <li>Bank Transfer</li>
              <li>USSD</li>
            </ul>
            <ul id="Para">
              <li>Apply Pay</li>
              <li>Visa QR</li>
              <li>Mobile Money</li>
              <li>POS (Coming soon)</li>
            </ul>
          </div>
          <h1 id="Enjoy">
            Enjoy phenomenal <br />
            transacion success rates
          </h1>
          <p id="Para">
            We automatically route payments through the most <br />
            optimal channels, ensuring the highest transaction <br />
            success rates in the market
          </p>
          <br />
          <br />
          <NavLink className="success-rate" to="/success Rate">
            Find out how we achieve high success rates
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Section4;
