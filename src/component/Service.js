import React from "react";
import logo1 from "../Assets/logo(1).png";
import logo2 from "../Assets/logo(5).png";
import logo3 from "../Assets/logo(6).png";
import backgroundImage from "../Assets/back.jpg";

const Service = () => {
  return (
    <div className="mx-10">
      <div className="font-bold text-3xl w-1/3 pt-12">
        The value that holds us true and to account
      </div>
      <div className="flex justify-between flex-wrap pt-10 ">
        <div className="w-64 px-4 hover:bg-blue-200 rounded-lg py-2">
          <div className="flex items-center">
            <img src={logo1} alt="" className="w-[40%] h-[50%]"></img>
            <span className="font-semibold">Simplicity</span>
          </div>
          <p className="font-thin text-xs text-[#252b36]">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className="w-64 px-4 hover:bg-purple-200 rounded-lg py-2">
          <div className="flex items-center">
            <img src={logo2} alt="" className="w-[40%] h-[50%]"></img>
            <span className="font-semibold">Social Good</span>
          </div>
          <p className="font-thin text-xs text-[#252b36]">
            We believe in making things better for everyone.
          </p>
        </div>

        <div className="w-64 px-4 hover:bg-yellow-200 rounded-lg py-2">
          <div className="flex items-center">
            <img src={logo3} alt="" className="w-[40%] h-[50%]"></img>
            <span className="font-semibold">Trust</span>
          </div>
          <p className="font-thin text-xs text-[#252b36]">
            We work on the basis of creating trust which can be nurtured.
          </p>
        </div>
      </div>

      <div
        className="mt-20 p-16 rounded-xl justify-between flex bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <div className="text-blue-500 text-3xl font-bold">
            Ready to switch carrer?
          </div>
          <div className="font-bold text-2xl ">Let's get started!</div>
        </div>
        <button className="py-4 px-10 rounded-lg border border-blue-500 hover:bg-blue-300 text-blue-500">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Service;
