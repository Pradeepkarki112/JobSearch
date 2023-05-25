import React from "react";
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className="mx-10 bg-blue-700 flex mt-12 mb-4 justify-around rounded-xl text-white p-16">
      <div className="w-48">
        <div className="pb-8 text-2xl"><strong>Job</strong>Search</div>
        <p className="opacity-70">
          We always make our seekers and companies find the best jobs and employers
          find the best candidates.
        </p>
      </div>

      <div>
        <div className="pb-5 font-semibold">Company</div>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">About Us</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Features</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">News</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">FAQ</li>
      </div>

      <div>
        <div className="pb-5 font-semibold">Resource</div>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Support Center</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Feedback</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Contact Us</li>
      </div>

      <div>
        <div className="pb-5 font-semibold">Support</div>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Events</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Promo</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Req Demo</li>
        <li className="opacity-70 hover:opacity-100 list-none cursor-pointer p-1">Careers</li>
      </div>

      <div>
        <div className="pb-5 font-semibold">Contact Info</div>
        <div className="opacity-70 hover:opacity-100 cursor-pointer p-1">jobsearch@outlook.com</div>
        <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram
              className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full  cursor-pointer 
                text-[#2a68ff] "
            />
            <BsFacebook
              className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full cursor-pointer 
                text-[#2a68ff]  "
            />
            <AiOutlineTwitter
              className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full cursor-pointer 
                text-[#2a68ff]  "
            />
          </div>
      </div>
    </div>
  );
};

export default Footer;
