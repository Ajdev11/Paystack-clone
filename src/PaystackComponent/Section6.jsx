import React from "react";
import advanced from "../asset/Paystack images/advanced.mp4"


function Section6() {
  return (
    <div>
      <div className="section-6">
        <div className="video-section">
        <video className="video"  autoPlay loop muted >
            <source src={advanced} type="video/mp4" />
        </video>
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
    </div>
  );
}

export default Section6;
