import React from "react";
import { Link } from "react-router-dom";
import naija from "../asset/Paystack images/naija.png";
import ghana from "../asset/Paystack images/ghana.png";
import sa from "../asset/Paystack images/sa.png";
import logo from "../asset/Paystack images/logo.png";

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
          <div className="developer">
            <ul className="dropdown">
              <ul className="flex-1">
                <li>
                  <img id="flag" src={naija} alt="" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img id="flag" src={naija} alt="" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img id="flag" src={naija} alt="" />
                </li>
                <li>
                  <Link id="wcp" to="/">
                    Why Choose Paystack
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    Over 70,000 businesses trust <br />
                    Paystack.Here's why.
                  </p>
                  <br />
                  <br />
                  <Link id="wcp" to="/">
                    Success Rate
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    Get the best transaction success
                    <br />
                    rate in the industry.
                  </p>
                  <br />
                  <Link id="wcp" to="/">
                    Demo
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    See the Paystack checkout from
                    <br />
                    and dashboard in action.
                  </p>
                </li>
                <li>
                  <h5>YOUR GROWTH STAGE</h5>
                  <Link id="wcp" to="/">
                    For Entrepreneurs
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    For Corporate
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    For Global Brands
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    For Startups
                  </Link>{" "}
                  <br />
                  <br />
                  <br />
                  <h5>YOUR BUSINESS GROWTH</h5>
                  <Link id="wcp" to="/">
                    For Fintechs
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    For Schools
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    For Betting
                  </Link>{" "}
                  <br />
                </li>
              </ul>
            </ul>
          </div>
        </Link>
        <Link className="links" to="/customers">
          Customers
        </Link>
        <Link className="links" to="/pricing">
          Pricing
        </Link>
        <Link className="links" to="/learn">
          Learn
          <div className="developer">
            <ul className="dropdown">
              <ul className="flex-1">
                <li>
                  <img id="flag" src={naija} alt="" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img id="flag" src={naija} alt="" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img id="flag" src={naija} alt="" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img id="flag" src={naija} alt="" />
                </li>
                <li>
                  <Link id="wcp" to="/">
                    Blog
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    Original lessons about making the
                    <br />
                    internet work for your business.
                  </p>
                  <br />
                  <br />
                  <Link id="wcp" to="/">
                    Guides
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    Big ideas in payments, explained in
                    <br />
                    simple English.
                  </p>
                  <br />
                  <Link id="wcp" to="/">
                    Video Tutorials
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    Quick video tutorials on hhow to use
                    <br />
                    Paystack.
                  </p>
                  <br />
                  <Link id="wcp" to="/">
                    Decode Fintech
                  </Link>{" "}
                  <br />
                  <p className="paragraph">
                    The trade email newsletter and
                    <br />
                    podcast for leaders in African <br />
                    fintech.
                  </p>
                </li>
                <li>
                  <h5>COMPANY</h5>
                  <Link id="wcp" to="/">
                    About Us
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Subscribe
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Compliances
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Careers
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Brands
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Media Kits
                  </Link>{" "}
                </li>
              </ul>
            </ul>
          </div>
        </Link>
      </div>
      <div className="NavLinks2">
        <Link id="right-nav" className="links" to="/developers">
          Developers
          <div className="developer">
            <ul className="dropdown2">
              <ul className="grid-1">
                <li>
                  <Link id="wcp" to="/">
                    Overview
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Documentation
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Integration
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Status Page
                  </Link>{" "}
                </li>
              </ul>
            </ul>
          </div>
        </Link>
        <Link className="links" id="right-nav" to="/support">
          Support
          <div className="developer">
            <ul className="dropdown2">
              <ul className="grid-1">
                <li>
                  <Link id="wcp" to="/">
                    QuickHelp
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Contact Us
                  </Link>{" "}
                  <br />
                  <Link id="wcp" to="/">
                    Why Was i <br />
                    debited?
                  </Link>{" "}
                </li>
              </ul>
            </ul>
          </div>
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
      <div className="nation-icon">
        <Link className="links" to="/flag">
          <img id="flag" src={naija} alt="NigeriaFlag" />
          <div className="developer">
            <ul className="dropdown3">
              <ul className="grid-1">
                <li>
                  <Link to="/">
                    <img id="flag" src={ghana} alt="GhanaFlag" />
                  </Link>{" "}
                </li>
                <li>
                  <h4>Ghana</h4>
                </li>
              </ul>
              <ul className="grid-1">
                <li>
                  <Link to="/">
                    <img id="flag" src={sa} alt="SAFlag" />
                  </Link>{" "}
                </li>
                <li>
                  <h4>S.Africa</h4>
                </li>
              </ul>
              <ul className="grid-1">
                <li>
                  <Link to="/">
                  <img id="flag" src={logo} alt="others" />
                  </Link>{" "}
                </li>
                <li>
                  <h4>Others</h4>
                </li>
              </ul>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
