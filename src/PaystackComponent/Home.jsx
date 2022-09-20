import React from "react";
import Logo from "./Logo";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import { NavLink, Link } from "react-router-dom";
import {
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
} from "./Image";
import { useEffect } from "react";

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
      Title: <img src={AirPeace} alt="" />,
    },
    {
      id: 6,
      Title: <img src={filmHouse} alt="" />,
    },
    {
      id: 7,
      Title: <img src={Piggyvest} alt="" />,
    },
    {
      id: 8,
      Title: <img src={ibomAir} alt="" />,
    },
    {
      id: 9,
      Title: <img src={kuda} alt="" />,
    },
    {
      id: 10,
      Title: <img src={Ariiya} alt="" />,
    },
  ];
  const ListImage2 = PaystackImg.map((img2) => (
    <li key={img2.id}>{img2.Title}</li>
  ));
  const PaystackImg2 = [
    {
      id: 11,
      Title: <img src={Dominos} alt="" />,
    },
    {
      id: 12,
      Title: <img src={Mtn} alt="" />,
    },
    {
      id: 13,
      Title: <img src={Lagos} alt="" />,
    },
    {
      id: 14,
      Title: <img src={Bolt} alt="" />,
    },
    {
      id: 15,
      Title: <img src={Mtn} alt="" />,
    },
    {
      id: 16,
      Title: <img src={carbon} alt="" />,
    },
  ];
  const ListImage3 = PaystackImg2.map((img3) => (
    <li key={img3.id}>{img3.Title}</li>
  ));
  const PaystackImg3 = [
    {
      id: 12,
      Title: <img src={Axa} alt="" />,
    },
    {
      id: 13,
      Title: <img src={Abia} alt="" />,
    },
    {
      id: 14,
      Title: <img src={GIGM} alt="" />,
    },
    {
      id: 15,
      Title: <img src={IrokoTV} alt="" />,
    },
    {
      id: 16,
      Title: <img src={Smile} alt="" />,
    },
    {
      id: 17,
      Title: <img src={Cowrywise} alt="" />,
    },
  ];
  const ListImage4 = PaystackImg3.map((img4) => (
    <li key={img4.id}>{img4.Title}</li>
  ));

  useEffect(() => {
    const tl = gsap
      .timeline()
      .from(".section-1", { opacity: 0, duration: 1, y: 300 });
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
          <NavLink className="paymentAPI" to="/paymentAPI">
            Payments API Quickstart
          </NavLink>
        </div>
        <div>
          <h1>Icon here</h1>
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
      <footer id="homeFooter">
        <div className="footer1">
          <ul>
            <li>
              <h4>Why Paystack</h4>
            </li>
            <li>
              <Link id="footer-links" to="/whyPaystack">
                Why Choose Paystack
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/success">
                Success Rate
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/entrepreneur">
                For Entrepreneurs
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/corporate">
                For Corporate
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/international">
                For International Companies
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/startups">
                For Startup
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/fintech">
                For Fintech
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/school">
                For Schools
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/bet">
                For Betting
              </Link>
            </li>
          </ul>
          <ul id="ctn">
            <li>
              <h4>Contact</h4>
            </li>
            <li>
              <Link id="hello" to="/hello">
                hello@paystack.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer2">
          <ul>
            <li>
              <h4>Pricing</h4>
            </li>
            <li>
              <Link id="footer-links" to="/nigeria">
                Nigeria
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/ghana">
                Ghana
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/south">
                South Africa
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <h4>Customers</h4>
            </li>
            <li>
              <Link id="footer-links" to="/testimonial">
                Testimonials
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <h4>Learn</h4>
            </li>
            <li>
              <Link id="footer-links" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/guides">
                Guides
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/video">
                Video Tutorials
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/decode">
                Decode Fintech
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/commerce">
                Commerce
              </Link>
            </li>
          </ul>
          <ul id="lagos">
            <li>
              <h4>Lagos</h4>
            </li>
            <li>126 Joel Ogunnaike Street,</li>
            <li>Ikeja GRA, Ikeja</li>
            <li>Lagos, Nigeria</li>
            <li>+234 163 16160</li>
          </ul>
          <br />
          <ul>
            <li>
              <h4>Accra</h4>
            </li>
            <li>AfricaWorks,</li>
            <li>35 Patrice Lumumba Road,</li>
            <li>Airport Residential Area</li>
            <li>Accra, Ghana</li>
          </ul>
        </div>
        <div className="footer3">
          <ul>
            <li>
              <h4>Developers</h4>
            </li>
            <li>
              <Link id="footer-links" to="/overview">
                Overview
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/documentation">
                Documentation
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/integration">
                Integrations
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/status">
                Status Page
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <h4>Community</h4>
            </li>
            <li>
              <Link id="footer-links" to="/nigeria">
                Nigeria, Lagos
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <h4>Support</h4>
            </li>
            <li>
              <Link id="footer-links" to="/help">
                Help Desk
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/contatct">
                Contact Us
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/debited">
                Why was i debited?
              </Link>
            </li>
          </ul>
          <ul id="san">
            <li>
              <h4>San Francisco</h4>
            </li>
            <li>354 Oyster Point Blvd,</li>
            <li>South San Francisco,</li>
            <li>CA 94080</li>
            <li>United States</li>
          </ul>
        </div>
        <div className="footer4">
          <ul>
            <li>
              <h4>About</h4>
            </li>
            <li>
              <Link id="footer-links" to="/company">
                Company
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/subscribe">
                Subscribe
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/compliant">
                Compliance
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/career">
                Careers
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/media">
                Media Kits
              </Link>
            </li>
            <li>
              <Link id="footer-links" to="/privacy">
                Privacy & Terms
              </Link>
            </li>
          </ul>
          <ul id="capetown">
            <li>
              <h4>Cape Town</h4>
            </li>
            <li>HOUSE_OF,</li>
            <li>Elkay House(4th Floor)</li>
            <li>186 Loop St, Cape Town City</li>
            <li>Centre,</li>
            <li>Cape Town, 8001</li>
            <li>South Africa</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
