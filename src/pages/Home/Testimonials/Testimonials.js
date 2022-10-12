import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "./Reviews";

const reviews = [
  {
    id: 1,
    name: "Test Name",
    location: "California",
    img: people1,
  },
  {
    id: 2,
    name: "Test Name",
    location: "California",
    img: people2,
  },
  {
    id: 3,
    name: "Test Name",
    location: "California",
    img: people3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-primary font-bold">Testimonials</h3>
          <h2 className="text-3xl">What Our Client Says</h2>
        </div>
        <div>
          <img className="lg:w-48 w-24" src={quote} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Reviews key={review.id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
