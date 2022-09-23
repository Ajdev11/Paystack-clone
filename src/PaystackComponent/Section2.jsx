import React from 'react'
import { Dominos, Mtn, Bolt, Axa} from "./Image";
function Section2() {
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
  return (
    <div>
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
  )
}

export default Section2