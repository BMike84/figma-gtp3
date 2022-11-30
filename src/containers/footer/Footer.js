import React from "react";
import FooterData from "./FooterData";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {FooterData.map((val, index) => {
          return (
            <div className="gpt3__footer-links_div" key={index}>
              <h4>{val.header}</h4>
              <p>{val.p1}</p>
              <p>{val.p2}</p>
              <p>{val.p3}</p>
              <p>{val.p4}</p>
            </div>
          );
        })}
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
