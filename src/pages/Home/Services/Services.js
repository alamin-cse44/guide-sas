import React from "react";
import flouride from "../../../assets/images/service1.png";
import cavity from "../../../assets/images/service2.png";
import whitening from "../../../assets/images/service3.png";
import ServicesShow from "../ServicesShow/ServicesShow";
import treatment from "../../../assets/images/place2.jpg";
import PrimaryButton from "../../Shared/PrimaryButton";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Hire Local Guide",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: flouride,
  },

  {
    id: 2,
    title: "Join as a Guide",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: cavity,
  },

  {
    id: 3,
    title: "Promote Others",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: whitening,
  },
];

const Services = () => {
  return (
    <>
      <div className="">
        <h5 className="mt-12 text-center font-bold text-teal-400">
          Our Services
        </h5>

        <h3 className="mt-2 text-2xl text-center font-medium">You Are Able To</h3>
      </div>

      <div className="px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServicesShow key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-20 px-12 justify-center items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <img className="rounded" src={treatment} width="420px " alt="" />
        </div>
        <div>
          <h2 className="lg:text-4xl font-bold">
            Exceptional Tour <br /> Care, on Your Terms
          </h2>
          <p className="my-8 text-justify lg:text-base sm:text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appointment">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
