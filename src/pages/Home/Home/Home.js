import React from "react";
import Footer from "../../Shared/Footer";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import HomePic from "../HomePic/HomePic";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <HomePic></HomePic>
      <HomeAppointment></HomeAppointment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
