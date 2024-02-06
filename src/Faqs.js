import React from "react";
import "./Faqs.css";

export default function Faqs() {
  return (
    <div className="Faqs" id="faqs">
      <div class="container">
        <h1>
          <span class="faq-icon">
            <i class="fa-solid fa-star"></i>
          </span>
          <span> FAQ</span>
        </h1>
        <div class="faq">
          <div class="accordion-question">
            <h2>How can I place an order on Frenjo Fashions?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              Placing an order with Frenjo Fashions is easy! Simply browse
              through our collection, select the items you love, and add them to
              your shopping cart. Once you're ready, proceed to checkout, where
              you'll provide your shipping details and payment information.
              After confirming your order, you'll receive an email confirmation
              with all the details.
            </p>
          </div>
        </div>
        <div class="faq">
          <div class="accordion-question">
            <h2>What payment methods does Frenjo Fashions accept?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              Frenjo Fashions accepts a variety of payment methods to ensure a
              convenient shopping experience. We currently accept major
              credit/debit cards, including Visa, MasterCard, and American
              Express. Additionally, we offer secure payment through PayPal and
              Mpesa for added flexibility.
            </p>
          </div>
        </div>
        <div class="faq">
          <div class="accordion-question">
            <h2>How can I track my order from Frenjo Fashions?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              Tracking your order is simple! Once your order is shipped, you
              will receive a confirmation email with a tracking number and a
              link to the carrier's website. You can use this information to
              monitor the status and location of your package in real-time.
            </p>
          </div>
        </div>
        <div class="faq">
          <div class="accordion-question">
            <h2>What is Frenjo Fashions' return policy?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              At Frenjo Fashions, we want you to be completely satisfied with
              your purchase. If for any reason you're not happy with your order,
              you can return it within 30 days of receiving it. Please visit our
              "Returns & Exchanges" page for detailed instructions on initiating
              a return or exchange.
            </p>
          </div>
        </div>
        <div class="faq">
          <div class="accordion-question">
            <h2>How does Frenjo Fashions handle shipping costs?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              We offer free standard shipping on all orders within the
              continental United States. For international orders or expedited
              shipping options, shipping costs may apply. You can view the
              shipping fees during the checkout process before finalizing your
              purchase.
            </p>
          </div>
        </div>
        <div class="faq">
          <div class="accordion-question">
            <h2>Can I modify or cancel my order after placing it?</h2>
            <span>
              <i class="fa-solid fa-plus plus-icon"></i>
              <i class="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div class="accordion-answer">
            <p>
              We process orders quickly to ensure timely delivery. Once an order
              is placed, modifications or cancellations may not be possible.
              Please contact our customer support team as soon as possible, and
              we'll do our best to assist you. Keep in mind that once an order
              has been shipped, it cannot be modified or canceled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
