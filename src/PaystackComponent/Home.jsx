import React from "react";
import Logo from "./Logo";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import { NavLink, Link } from "react-router-dom";
import {
  logo,
  Dominos,
  Mtn,
  Bolt,
  Axa,
  global,
  entrepreneur,
  corporation,
  AirPeace,
  filmHouse,
  Piggyvest,
  ibomAir,
  kuda,
  Lagos,
  carbon,
  Abia,
  GIGM,
  IrokoTV,
  Smile,
  Cowrywise,
  Ariiya,
  Stripe,
  Visa,
  ycombinator,
  patrick,
  michael,
  otto,
  suiteAPI,
} from "./Image";
import { useEffect } from "react";
import Footer from "./footer";
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
  const PaystackImg = [
    {
      id: 5,
      Title: <img src={AirPeace} alt="Airpeace" />,
    },
    {
      id: 6,
      Title: <img src={filmHouse} alt="FilmHouse" />,
    },
    {
      id: 7,
      Title: <img src={Piggyvest} alt="piggyvest" />,
    },
    {
      id: 8,
      Title: <img src={ibomAir} alt="ibomair" />,
    },
    {
      id: 9,
      Title: <img src={kuda} alt="Kuda" />,
    },
    {
      id: 10,
      Title: <img src={Ariiya} alt="ariiya" />,
    },
  ];
  const ListImage2 = PaystackImg.map((img2) => (
    <li key={img2.id}>{img2.Title}</li>
  ));
  const PaystackImg2 = [
    {
      id: 11,
      Title: <img src={Dominos} alt="dominos" />,
    },
    {
      id: 12,
      Title: <img src={Mtn} alt="mtn" />,
    },
    {
      id: 13,
      Title: <img src={Lagos} alt="lagos" />,
    },
    {
      id: 14,
      Title: <img src={Bolt} alt="bolt" />,
    },
    {
      id: 15,
      Title: <img src={Mtn} alt="mtn" />,
    },
    {
      id: 16,
      Title: <img src={carbon} alt="carbon" />,
    },
  ];
  const ListImage3 = PaystackImg2.map((img3) => (
    <li key={img3.id}>{img3.Title}</li>
  ));
  const PaystackImg3 = [
    {
      id: 12,
      Title: <img src={Axa} alt="Axamansard" />,
    },
    {
      id: 13,
      Title: <img src={Abia} alt="Abia" />,
    },
    {
      id: 14,
      Title: <img src={GIGM} alt="GiGm" />,
    },
    {
      id: 15,
      Title: <img src={IrokoTV} alt="irokoTv" />,
    },
    {
      id: 16,
      Title: <img src={Smile} alt="smile" />,
    },
    {
      id: 17,
      Title: <img src={Cowrywise} alt="cowrywise" />,
    },
  ];
  const ListImage4 = PaystackImg3.map((img4) => (
    <li key={img4.id}>{img4.Title}</li>
  ));
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".section-1", { opacity: 0, duration: 1, y: 100 });
  });
  return (
    <div>
      <div className="bg-color">
        <div className="logo-name">
          <Logo />
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
      <div className="section-8">
        <h1>
          Powering growth for amazing <br /> businesses
        </h1>
        <p id="Para">
          Paystack is a great engine for a new generation of innovatives, <br />
          forward-looking organizations operating in Africa.
        </p>
        <div className="company-logos">
          <ul id="comp-logos">{ListImage2}</ul>
          <ul id="comp-logos">{ListImage3}</ul>
          <ul id="comp-logos">{ListImage4}</ul>
        </div>
        <h1 id="globalPartner">
          Backed by strong global <br />
          partners
        </h1>
        <p id="Para">
          Paystack is backed by notable investors as well as some of the best{" "}
          <br />
          payments companies on the planet.
        </p>
      </div>
      <div className="section-9">
        <div className="stripeVisaY">
          <img id="Stripe" src={Stripe} alt="stripeIcon" />
          <p>
            Paystack is highly technical and financially
            <br />
            customer oriented. We're excited to back <br />
            such people in one of the world's fastest- <br />
            growing regions.
          </p>
          <div className="ceoTitle">
            <img id="ceoIcon" src={patrick} alt="patrickIcon" />
            <div className="pat-ceo">
              <h3>Patrick Collison</h3>
              <h6>CEO, Stripe</h6>
            </div>
          </div>
        </div>
        <div className="stripeVisaY">
          <img id="visa" src={Visa} alt="" />
          <p>
            Our investment in Paystack aligns with the
            <br />
            kind of investments we look for- those that <br />
            will help extend our reach into the global <br />
            commerce ecosystem.
          </p>
          <div className="ceoTitle">
            <img id="ceoIcon" src={otto} alt="visa" />
            <div className="pat-ceo">
              <h3>Otto Williams</h3>
              <h6>
                Head of Strategic Partnerships, Fintech & <br />
                Ventures CEMEA, Visa
              </h6>
            </div>
          </div>
        </div>
        <div className="stripeVisaY">
          <img id="y" src={ycombinator} alt="Y" />
          <p>
            As YC's first Nigerian startup Paystack
            <br />
            leads the charge of great companies <br />
            coming out of Africa, powering modern <br />
            payments for an entire contienent.
          </p>
          <div className="ceoTitle">
            <img id="ceoIcon" src={michael} alt="michael" />
            <div className="pat-ceo">
              <h3>Michael Seibel</h3>
              <h6>CEO, Partner, Y Combinator</h6>
            </div>
          </div>
        </div>
      </div>
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
