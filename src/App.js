import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Paystack.css";
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
      <Home />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/developers" element={<Developers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create free account" element={<CreateFreeAccount />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/whyPaystack" element={<WhyPaystack />} />
      </Routes>
    </div>
  );
}

export default App;
