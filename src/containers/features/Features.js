import React from "react";
import Feature from "../../components/feature/Feature";
import FeaturesData from "./FeaturesData";
import "./features.css";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {FeaturesData.map((val, index) => {
          return (
            <Feature
              title={val.title}
              text={val.text}
              key={val.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
