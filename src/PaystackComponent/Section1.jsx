import {React, useEffect } from 'react'
import { gsap } from "gsap";
import { NavLink, Link } from "react-router-dom";
import logo from "../asset/Paystack images/logo.png";

function Section1() {
   
      useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".gsapElement", { opacity: 0, duration: 1, y: 100 });
      });
  return (
    <div>
        <div className="section-1">
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
            <div className="smallerIcons">
              <Link className="links" to="/">
                <img id="logoIcon" src={logo} alt="others" />
                <div className="developer">
                  <ul className="dropdown4">
                    <ul className="grid-1">
                      <li>
                        <h4>
                          Get paid from <span id="lagNig">Lagos,Nigeria</span>
                        </h4>
                        <span className="sell">
                          Sell locally with four different <br />
                          payment methods
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Link className="links" to="/">
              <img id="logoIcon2" src={logo} alt="others" />
              <div className="developer">
                <ul className="dropdown5">
                  <ul className="grid-1">
                    <li>
                      <h4>
                        Get paid from <span id="lagNig">Rio,Brazil</span>
                      </h4>
                      <span className="sell">
                        Sell to customers all over the
                        <br />
                        world
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>
            </Link>
          </div>
          <div className="smallerIcons2">
            <Link className="links" to="/">
              <img id="logoIcon3" src={logo} alt="others" />
              <div className="developer">
                <ul className="dropdown6">
                  <ul className="grid-1">
                    <li>
                      <h4>
                        Get paid from <span id="lagNig">Johannesburg</span>
                      </h4>
                      <span className="sell">
                        Pyatscak grows with your
                        <br />
                        business
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>
            </Link>
          </div>
          <div className="smallerIcons">
            <Link className="links" to="/">
              <img id="logoIcon4" src={logo} alt="others" />
              <div className="developer">
                <ul className="dropdown7">
                  <ul className="grid-1">
                    <li>
                      <h4>
                        Get paid from <span id="lagNig">Cairo,Egypt</span>
                      </h4>
                      <span className="sell">
                        Accept payment in any currency <br />
                        you want
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Section1