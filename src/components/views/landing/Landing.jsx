import React from "react";
import './landing.css'
import Header from "./section-1/Header";
import Basic from "../../atoms/Basic";
import Section2 from "./section-2/Section-2";
import Section3 from "./section-3/Section-3";
import Section4 from "./section-4/Section-4";
import Section1 from "./section-1/Section-1";

function Landing() {
  return (
    <div className="section-container">
      <section className=" row section-components">
        <Header />
        <Basic />
      </section>
      <section className=" row section-components">
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section className=" row section-components">
        <Section3 />
      </section>
      <section className=" row section-components">
        <Section4 />
      </section>
    </div>
  );
}

export default Landing;
