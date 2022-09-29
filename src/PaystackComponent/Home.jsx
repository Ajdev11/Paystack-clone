import { React, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Footer from "./footer";
import logo2 from "../asset/Paystack images/logo2.png";


function Home() {
 // const[navbarOpen, setNavbarOpen] = useState(false)
useEffect(()=>{
  const menu_btn = document.querySelector('.menu_bar');
  //const mobile_menu = document.querySelector('.mobile-nav');
      menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
    //  mobile_menu.classList.toggle('is-active');
  });
}, [])

  return (
    <div>
      <div className="fixed-header">
        <div className="menu-border">
          <img className="logo2" src={logo2} alt="mobile-logo" />
          <button className="menu_bar">
            <div className="bar"></div>
          </button>
        </div>
        <div className="header-border"></div>
      </div>
      <div className="bg-color">
        <div className="logo-name">
          <Logo />
          <Navigation />
        </div>
        <Section1 />
        <Section2 />
      </div>
      <div className="section-3">
        <h1>Simple, easy payments</h1>
        <p>Building a business is hard. Getting paid shouldn't be.</p>
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
}

export default Home;
