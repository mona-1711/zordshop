import React from "react";
import Card from "./Card";

const Hero = ({ data }) => {
  return (
    <div>
      <section>
        <div className="hero">
          <div className="container">
            <Card data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;