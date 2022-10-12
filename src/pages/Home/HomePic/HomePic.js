import React from "react";
import laptop from "../../../assets/images/digital_laptop.jpg";
import accessories from "../../../assets/images/digital_accessories.jpg";
import watch from "../../../assets/images/digital_watch.jpg";
import camera from "../../../assets/images/digital_camera.jpg";

const HomePic = () => {
  return (
    <>
      <div className="mt-16 px-12">
        <h2 className="text-center font-normal text-teal-400 text-2xl">
          Testing Product
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        <div className="">
          <img
            className="w-11/12  mb-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            src={laptop}
            alt=""
          />
        </div>
        <div className="grid grid-rows-2 gap-7">
          <div className="grid lg:grid-cols-2 gap-7">
            <div>
              <img
                className="lg:w-9/12 w-11/12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                src={accessories}
                alt=""
              />
            </div>
            <div>
              <img
                className="lg:w-9/12 w-11/12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                src={watch}
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              className="w-11/12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              src={camera}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePic;
