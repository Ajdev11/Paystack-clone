import React from 'react'
import {
    Dominos,
    Mtn,
    Bolt,
    Axa,
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
  } from "./Image";

function CompanyLogo() {
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
  return (
    <div>
        <div className="company-logos">
          <ul id="comp-logos">{ListImage2}</ul>
          <ul id="comp-logos">{ListImage3}</ul>
          <ul id="comp-logos">{ListImage4}</ul>
        </div>
    </div>
  )
}

export default CompanyLogo