import React from 'react'
import { Link } from 'react-router-dom';
import {
    global,
    entrepreneur,
    corporation,
  } from "./Image";

function Section7() {
  return (
    <div>
           <div className="section-7">
        <div className="trusted">
          <h1>Trusted by 70,000+ businesses</h1>
          <p id="Para">
            Thousands of organization of all sizes trust Paystack to grow their{" "}
            <br />
            business.
          </p>
        </div>
        <div id="GEL">
          <div className="GEL">
            <img id="global-image" src={global} alt="" />
            <h2>
              Paystack for <br />
              Global Brands
            </h2>
            <p>
              We help global brands accept payments <br />
              from across Africa
            </p>
            <br />
            <br />
            <Link id="gellink" to="/learn">
              Learn
            </Link>
          </div>
          <div className="GEL">
            <img id="global-image" src={entrepreneur} alt="" />
            <h2>
              Paystack for <br />
              Entrepreneurs
            </h2>
            <p>
              From startup to scale-up, we can support <br />
              you at every stage of your businesses <br />
              growth
            </p>
            <br />
            <Link id="gellink" to="/learn">
              Learn
            </Link>
          </div>
          <div className="GEL">
            <img id="global-image" src={corporation} alt="" />
            <h2>
              Paystack for <br />
              Large Organization
            </h2>
            <p>
              Paystack helps many of the largest
              <br />
              corporate and government organizations <br />
              in Nigeria get paid quickly and securely{" "}
            </p>
            <Link id="gellink" to="/learn">
              Learn
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7