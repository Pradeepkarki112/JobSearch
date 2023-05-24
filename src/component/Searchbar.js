import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineCloseCircle,
} from "react-icons/ai";

export const Searchbar = () => {
  return (
    <div className="bg-[#F1F4F8] p-12 gap-10 rounded-xl grid">
      <form>
        <div>
          <div className="flex bg-white rounded-[10px] gap-10 p-5 justify-between items-center shadow-lg">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
              <input
                placeholder="Search Job Here"
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiOutlineCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>

            <div className="flex gap-2 items-center p-4">
              <AiOutlineHome className="text-2xl cursor-pointer" />
              <input
                placeholder="Search by Company"
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiOutlineCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>

            <div className="flex gap-2 items-center p-4">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
              <input
                placeholder="Search by Location"
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiOutlineCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>

            <div className="text-2xl cursor-pointer p-5 px-10 rounded-[10px] text-white bg-blue-600 hover:bg-blue-300 ">
              <button>Search</button>
            </div>
          </div>
        </div>
      </form>

      <div className="flex items-center justify-center gap-10">
        <div className="flex gap-2 items-center">
          <div>Sort by:</div>
          <select>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <div>Type:</div>
          <select>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <div>Level:</div>
          <select>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
