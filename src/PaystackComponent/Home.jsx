import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavLink, Link } from "react-router-dom";
import Dominos from "../asset/Paystack images/Dominos-Plain.svg";
import Mtn from "../asset/Paystack images/MTN-Plain.svg";
import Bolt from "../asset/Paystack images/Bolt-Stack-Blue_200304_153027.svg";
import Axa from "../asset/Paystack images/Axa-mansard.svg";
import global from "../asset/Paystack images/global.svg"
import entrepreneur from "../asset/Paystack images/entrepreneur.svg"
import corporation from "../asset/Paystack images/corporation.svg"
function Home() {
  const paystackImages = [
    {
      id: 1,
      title: "images",
    },
  ];
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
            <NavLink
              id="create-border"
              className="create-free"
              to="/create free account"
            >
              Create free account
            </NavLink>
            <NavLink className="sales-link" to="/contact Sales">
              Or Contact sales
            </NavLink>
          </div>
        </div>
        <div className="section-2">
          <p>
            Watch MTN Chief Transformation Officer, Olubayo <br />
            <span id="mtn-officer">
              AdeKamnbi discuss working with Paystack
            </span>
          </p>
          <h4>Trusted by over 60,000 businesses</h4>
          <ul className="images">
            {paystackImages.map((img) => (
              <li key="id">
                <img id="dominos" src={Dominos} alt="dominos-icon" />
                <img id="mtn" src={Mtn} alt="mtn-icon" />
                <img id="bolt" src={Bolt} alt="bolt-icon" />
                <img id="axa" src={Axa} alt="axa-icon" />
              </li>
            ))}
          </ul>
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
          <p>
            Give your customers the gift of modern, frictionless, <br />{" "}
            painless payments. Integrate Paystack once and let your <br />
            customers pay you however they want.
          </p>
          <div className="features-list">
            <ul>
              <li>Card</li>
              <li>Bank Account</li>
              <li>Bank Transfer</li>
              <li>USSD</li>
            </ul>
            <ul>
              <li>Apply Pay</li>
              <li>Visa QR</li>
              <li>Mobile Money</li>
              <li>POS (Coming soon)</li>
            </ul>
          </div>
          <h1>
            Enjoy phenomenal <br />
            transacion success rates
          </h1>
          <p>
            We automatically route payments through the most <br />
            optimal channels, ensuring the highest transaction <br />
            success rates in the market
          </p> <br /><br />
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
          <p>
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
          <p>
            Paystack's combination of automated and manual fraud <br />
            systems protect you from fraudulent transactions and <br />
            associated chargeback claims.
          </p>
          <h1 id="detailed">
            Detailed reporting for <br />
            accounting, reconciliation, <br />
            and audits
          </h1>
          <p>
            Undertsand your customers' purchase patterns and do <br />
            easy reconciliations with a robust data Dashboard and <br />
            easy exports
          </p>
        </div>
      </div>
      <div className="section-7">
      <div className="trusted">
       <h1>Trusted by 70,000+ businesses</h1>
       <p>Thousands of organization of all sizes trust Paystack to grow their <br />
       business.</p>
       </div>
       <div id="GEL">
          <div className="GEL">
            <img id="global-image" src={global} alt="" />
            <h2>Paystack for <br />
            Global Brands</h2>
            <p>We help global brands accept payments <br />
            from across Africa</p> <br />
            <Link id="gellink" to="/learn"> Learn</Link>
          </div>  
          <div className="GEL">
            <img id="global-image" src={entrepreneur} alt="" />
            <h2>Paystack for <br />
            Entrepreneurs</h2>
            <p>From startup to scale-up, we can support <br />
            you at every stage of your businesses <br />
            growth</p>
            <Link id="gellink" to="/learn"> Learn</Link>
          </div> 
          <div className="GEL">
            <img id="global-image" src={corporation} alt="" />
            <h2>Paystack for <br />
            Large Organization</h2>
            <p>Paystack helps many of the largest<br />
            corporate and government organizations <br /> 
            in Nigeria get paid quickly and securely </p>
            <Link id="gellink" to="/learn"> Learn</Link>
          </div>   
       </div>
      </div>
    </div>
  );
}

export default Home;
