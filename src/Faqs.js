import React, { useState } from "react";
import "./Faqs.css";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I place an order on Frenjo Fashions?",
      answer:
        "Placing an order with Frenjo Fashions is easy! Simply browse through our collection, select the items you love, and add them to your shopping cart. Once you're ready, proceed to checkout, where you'll provide your shipping details and payment information. After confirming your order, you'll receive an email confirmation with all the details.",
    },
    {
      question: "What payment methods does Frenjo Fashions accept?",
      answer:
        "Frenjo Fashions accepts a variety of payment methods to ensure a convenient shopping experience. We currently accept major credit/debit cards, including Visa, MasterCard, and American Express. Additionally, we offer secure payment through PayPal and Mpesa for added flexibility.",
    },
    {
      question: "How can I track my order from Frenjo Fashions?",
      answer:
        "Tracking your order is simple! Once your order is shipped, you will receive a confirmation email with a tracking number and a link to the carrier's website. You can use this information to monitor the status and location of your package in real-time.",
    },
    {
      question: "What is Frenjo Fashions' return policy?",
      answer:
        "At Frenjo Fashions, we want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return it within 30 days of receiving it. Please visit our 'Returns & Exchanges' page for detailed instructions on initiating a return or exchange.",
    },
    {
      question: "How does Frenjo Fashions handle shipping costs?",
      answer:
        "We offer free standard shipping on all orders within the continental United States. For international orders or expedited shipping options, shipping costs may apply. You can view the shipping fees during the checkout process before finalizing your purchase.",
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "We process orders quickly to ensure timely delivery. Once an order is placed, modifications or cancellations may not be possible. Please contact our customer support team as soon as possible, and we'll do our best to assist you. Keep in mind that once an order has been shipped, it cannot be modified or canceled.",
    },
  ];

  function toggleChange(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="Faqs" id="faqs">
      <div className="container">
        <h1>
          <span className="faq-icon">
            <i className="fa-solid fa-star"></i>
          </span>
          <span> FAQs</span>
        </h1>
        {faqs.map((faq, index) => (
          <div
            className={`faq ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleChange(index)}
          >
            <div className="question">
              <h2>{faq.question}</h2>
              <span>
                <i
                  className={`fa-solid fa-plus plus-icon text-white ${
                    activeIndex === index ? "active" : ""
                  }`}
                ></i>
                <i
                  className={`fa-solid fa-minus minus-icon text-white ${
                    activeIndex === index ? "active" : ""
                  }`}
                ></i>
              </span>
            </div>
            <div className="answer text-muted">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
