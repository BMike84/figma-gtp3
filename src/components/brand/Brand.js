import React from "react";
import "./brand.css";
import BrandLogos from "./BrandLogos";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {BrandLogos.map((val, key) => {
        return (
          <div>
            <img src={val.img} alt="google" />
          </div>
        );
      })}
    </div>
  );
};

export default Brand;
