import React from "react";
import "./TestimonialSection.css"; // Assuming your CSS is in this file

const testimonialsData = [
  {
    quote:
      "The Shirts come in all sizes. I am a little shorter than the average guy, but PCT had the sizes to meet my needs.",
    name: "Tyrion Lannister",
    jobTitle: "Hand of the King",
    portrait: "images/testimonials/tyrion.png",
  },
  {
    quote:
      "Prairie Custom Threads provides the best customer service. Me and my twin brother ordered many matching sets for each other, and my support team was right on top with the order.",
    name: "Cersei Lannister",
    jobTitle: "Queen",
    portrait: "images/testimonials/cersei.png",
  },
  {
    quote:
      "I use this company for apparel needs all the time. I was a teacher and bought shirts for my students. Then I worked in chemistry and bought my team matching pants.",
    name: "Walter White",
    jobTitle: "Chemist/ Teacher",
    portrait: "images/testimonials/walter.png",
  },
  {
    quote:
      "Me and my husband run a small law shop with one other crew member. We were able to order just 3 custom polo shirts to give a little identity as members of a company, really convenient!",
    name: "Kimberley Wexler",
    jobTitle: "Lawyer",
    portrait: "images/testimonials/kimberley.png",
  },
  {
    quote:
      "I am part of a band with 4 other members. We have bought amazing polo from here as well as created our first fan merch through the customizer.",
    name: "Liam Payne",
    jobTitle: "Singer/ Songwriter",
    portrait: "images/testimonials/liam.png",
  },
  {
    quote:
      "I am on tour across the world, and Prairie Custom Threads has created our Custom Apparel for all the unique locations, shipping the products in a timely manner, neat!",
    name: "Tate McCrae",
    jobTitle: "Singer Musician",
    portrait: "images/testimonials/tate.png",
  },
  {
    quote:
      "I live on an island that’s very hard to get to. Luckily for me Prairie Custom Threads can ship their products anywhere around the world.",
    name: "Jon Locke",
    jobTitle: "Island Leader",
    portrait: "images/testimonials/jon.png",
  },
  {
    quote:
      "Prairie Custom Threads is a great tool for you to use. You can have shirts, you can receive shipping for personal bookings, email services as well.",
    name: "Mikasa Ackermann",
    jobTitle: "Titan",
    portrait: "images/testimonials/mikasa.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="testimonials-section">
      <p className="section-title">Customer Testimonials</p>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>
              <div className="testimonial-signature">
                <img
                  src={testimonial.portrait}
                  alt={testimonial.name}
                  className="testimonial-portrait"
                />
                <div>
                  <div className="testimonial-person">{testimonial.name}</div>
                  <div className="testimonial-job-title">
                    {testimonial.jobTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
