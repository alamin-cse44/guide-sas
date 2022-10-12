import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import BookingModal from "../../pages/Appointment/BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppoinments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  // const {
  //   data: services,
  //   isLoading,
  //   refetch,
  // } = useQuery(["available", formattedDate], () =>
  //   fetch(
  //     `https://lit-wave-92560.herokuapp.com/available?date=${formattedDate}`
  //   ).then((res) => res.json())
  // );


  // if (isLoading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);

  return (
    <div className="my-18">
      <h2 className="font-bold text-xl text-primary text-center">
        Available Guider on {format(date, "PP")} in
      </h2>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          key={treatment._id}
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
