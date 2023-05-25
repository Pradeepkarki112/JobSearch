import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Data from "./Data";

export const Jobbar = () => {
  return (
    <div>
      <div className="flex flex-wrap py-10 items-center gap-10 justify-center">
        {Data.map(({ id, image, time, location, desc, company, title }) => {
          return (
            <div
              key={id}
              className="w-64 p-5 bg-white rounded-[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8]-700 hover:shadow-lg group"
            >
              <span className="flex justify-between gap-4 items-center">
                <h1 className="font-semibold text-[#252b36] group-hover:text-white text-[16px] ">{title}</h1>
                <span className="flex items-center gap-1 text-[#ccc]">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p className=" flex-wrap tex-[13px] pt-[20px] mt-[20px] text-[#959595] border-t-[2px] group-hover:text-white">
                {desc}
              </p>
              <div className="flex gap-2 items-center">
                <img src={image} alt="Company Name" className=" w-[30%] " />
                <div className="text-[14px] py-4 group-hover:text-white">
                  {company}
                </div>
              </div>
              <button className=" border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#252b36] group-hover:text-[#252b36] hover:bg-white  ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobbar;
