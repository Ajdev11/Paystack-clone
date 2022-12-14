import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/Paystack images/logo.png";

function Dropdown() {
  return (
    <div>
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
                    Paystack grows with your
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
  );
}

export default Dropdown;
