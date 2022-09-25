import React from 'react'
import {
    Stripe,
    Visa,
    ycombinator,
    patrick,
    michael,
    otto,
  } from "./Image";

function Section9() {
  return (
    <div>
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
    </div>
  )
}

export default Section9