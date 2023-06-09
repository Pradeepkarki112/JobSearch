import React from "react";

export default function NabBar() {
  return (
    <div className=" navBar flex items-center justify-between p-12 ">
      <div className=" logoDiv ">
        <h1 className="logo cursor-pointer text-[25px] text-[#2a68ff] ">
          <strong>Job</strong>search
        </h1>
      </div>

      <div className="mainDiv flex gap-8 ">
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none ">Jobs</li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">
          Companies
        </li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">
          About
        </li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">
          Contact
        </li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">Blog</li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">
          Login
        </li>
        <li className=" menuList text-[#676767] hover:text-[#2a68ff] list-none">
          Register
        </li>
      </div>
    </div>
  );
}
