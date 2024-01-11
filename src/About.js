import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container-fluid">
        <h2>Who we are and what we do</h2>
        <h4>
          Redefining Fashion with Timeless Elegance and Innovative Designs.
        </h4>
        <div className="row descriptions-content justify-content-center">
          <div className="col-md-4 border rounded descriptions">
            <i className="fa-solid fa-people-group icon"></i>
            <h3>Who We Are</h3>
            <p>
              Welcome to Frenjo Fashions, a dynamic blend of creativity and
              commitment. Our brand embodies the essence of contemporary
              fashion, weaving stories through every design.
            </p>
          </div>
          <div className="col-md-4 border rounded descriptions">
            <i className="fa-solid fa-question question-icon"></i>
            <h3>Why Choose Us</h3>
            <p>
              Choose Frenjo for an unparalleled fusion of timeless elegance and
              sustainable practices. Impeccable craftsmanship,
              customer-centricity, and a dedication to responsible fashion make
              us the preferred choice.
            </p>
          </div>
          <div className="col-md-4 border rounded descriptions mb-4">
            <i className="fa-solid fa-lightbulb icon"></i>
            <h3>What We Do</h3>
            <p>
              At Frenjo, we curate diverse collections, ranging from Men's and
              Women's Wear to Jewelry and Electronics. Each piece reflects our
              passion for innovation and tradition, ensuring a unique and
              compelling fashion experience.
            </p>
          </div>
        </div>
        <div className="about-us">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="./Images/clothes-in-a-rack.jpg"
                className="clothes-rack-img img-fluid"
                alt="Background"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="who-we-are">Who is Frenjo Fitness</h2>
              <p className="about-company">
                Welcome to Frenjo Fashions, where style meets sophistication
                across a diverse array of categories. Explore our meticulously
                crafted collections, including Men's Wear, Women's Wear,
                Jewelry, and Electronics. Each category is designed to cater to
                your unique tastes, ensuring a comprehensive shopping experience
                that seamlessly blends fashion and technology. Discover the
                perfect ensemble in every department, as we redefine the
                boundaries of style and innovation at Frenjo Fashions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
