import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Styles/PaystackHome.css";
import "./Styles/Footer.css";
import {
  Learn,
  Developers,
  Pricing,
  Support,
  Login,
  WhyPaystack,
  Customers,
  CreateFreeAccount,
  Home,
} from "./PaystackComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/developers" element={<Developers />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/create free account"
          element={<CreateFreeAccount />}
        />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/whyPaystack" element={<WhyPaystack />} />
        <Route exact path="/flag" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
