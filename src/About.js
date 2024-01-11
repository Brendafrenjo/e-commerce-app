import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <h2>Who we are and what we do</h2>
        <h4>
          Redefining
          Fashion with Timeless Elegance and Innovative Designs.
        </h4>
        <div className="row">
          <div className="col-lg-4">
            <i className="fa-solid fa-people-group"></i>
            <h3>Who We Are</h3>
            <p>
              Welcome to Frenjo Fashions, a dynamic blend of creativity and
              commitment. Our brand embodies the essence of contemporary
              fashion, weaving stories through every design.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fa-solid fa-question"></i>
            <h3>Why Choose Us</h3>
            <p>
              Choose Frenjo for an unparalleled fusion of timeless elegance and
              sustainable practices. Impeccable craftsmanship,
              customer-centricity, and a dedication to responsible fashion make
              us the preferred choice.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fa-solid fa-lightbulb"></i>
            <h3>What We Do</h3>
            <p>
              At Frenjo, we curate diverse collections, ranging from Men's and
              Women's Wear to Jewelry and Electronics. Each piece reflects our
              passion for innovation and tradition, ensuring a unique and
              compelling fashion experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
