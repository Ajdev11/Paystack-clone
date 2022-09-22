import { React, useEffect } from "react";
import Logo from "./Logo";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import { NavLink, Link } from "react-router-dom";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Footer from "./footer";

import { logo, Dominos, Mtn, Bolt, Axa, suiteAPI } from "./Image";
function Home() {
  const paystackImages = [
    {
      id: 1,
      Title: <img id="dominos" src={Dominos} alt="dominos-icon" />,
    },
    {
      id: 2,
      Title: <img id="mtn" src={Mtn} alt="mtn-icon" />,
    },
    {
      id: 3,
      Title: <img id="bolt" src={Bolt} alt="bolt-icon" />,
    },
    {
      id: 4,
      Title: <img id="axa" src={Axa} alt="dominos-icon" />,
    },
  ];
  const listIcons = paystackImages.map((img) => (
    <li key={img.id}>{img.Title}</li>
  ));
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".gsapElement", { opacity: 0, duration: 1, y: 100 });
  });
  return (
    <div>
      <div className="header">
        <p>
          New: Sell your digital products with Storefronts and Products Links
        </p>
      </div>
      <div className="bg-color">
        <div className="logo-name">
          <Logo />
          <Navigation />
        </div>
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
        <div className="section-2">
          <div>
            <h4>Trusted by over 60,000 businesses</h4>
            <ul className="images">{listIcons}</ul>
          </div>
          <p>
            Watch MTN Chief Transformation Officer, Olubayo <br />
            <span id="mtn-officer">
              AdeKamnbi discuss working with Paystack
            </span>
          </p>
        </div>
      </div>
      <div className="section-3">
        <h1>Simple, easy payments</h1>
        <p>Building a business is hard. Getting paid shouldn't be.</p>
      </div>
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
      <div className="section-6">
        <div>
          <h1>Icon here</h1>
        </div>
        <div>
          <h1>
            Protect yourself and your <br />
            customers with advanced <br />
            fraud detection
          </h1>
          <p id="Para">
            Paystack's combination of automated and manual fraud <br />
            systems protect you from fraudulent transactions and <br />
            associated chargeback claims.
          </p>
          <h1 id="detailed">
            Detailed reporting for <br />
            accounting, reconciliation, <br />
            and audits
          </h1>
          <p id="Para">
            Undertsand your customers' purchase patterns and do <br />
            easy reconciliations with a robust data Dashboard and <br />
            easy exports
          </p>
        </div>
      </div>
      <Section7 />
      <Section8 />
      <Section9 />
      <div className="section-10">
        <div className="try">
          <p>Try Paytstack Now</p> <br />
          <h1>
            Start accepting payments in <br />
            just 30 minutes
          </h1>
        </div>
        <div>
          <NavLink
            className="create-free"
            id="freeAccount"
            to="/create free account"
          >
            Create free account
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
