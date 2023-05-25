import React from "react";
import logo1 from "../Assets/logo(1).png"
import logo2 from "../Assets/logo(2).png"
import logo3 from "../Assets/logo(3).png"

const Service = () => {
  return (
    <div>
      <div className="font-semibold text-3xl w-96">
        The value that holds us true and to account
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="w-64 p-5">
          <div className="flex gap-4 p-3">
            <div className="">
              <img src={logo1} alt="" className="w-[70%]"></img>
            </div>
            <span>Simplicity</span>
          </div>
          <div className="font-semibold text-lg text-[#252b36]">
            Things being made beautiful simple are at the heart of everything we
            do.
          </div>
        </div>

        <div className="w-64 p-5">
          <div className="flex gap-4 p-3">
          <div className="">
              <img src={logo2} alt="" className="w-[70%]"></img>
            </div>
            <span>Social Good</span>
          </div>
          <div>
            We believe in making things better for everyone, even if just by a
            bit!
          </div>
        </div>

        <div className="w-64 p-5">
          <div className="flex gap-4 p-3">
          <div className="">
              <img src={logo3} alt="" className="w-[70%]"></img>
            </div>
            <span>Trust</span>
            </div>
            <div>
            We work on the basis of creating trust which can be nurtured through
            authenicity and transparency.
          </div>
        </div>
      </div>
      <div className="pt-20">Ready to switch carrer</div>
    </div>
  );
};

export default Service;
