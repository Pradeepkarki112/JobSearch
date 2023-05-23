import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

export const Searchbar = () => {
  return (
    <div className="bg-[#F1F4F8] p-12 grid">
      <form>
        <div>
          <div className="flex bg-white rounded-[10px] gap-10 justify-between items-center shadow-lg">
            <div className="flex gap-2 items-center p-4">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
              <input
                placeholder="Search Job Here..."
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiFillCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>
            <div className="flex gap-2 items-center p-4">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
              <input
                placeholder="Search Job Here..."
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiFillCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>
            <div className="flex gap-2 items-center p-4">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
              <input
                placeholder="Search Job Here..."
                className="outline-none bg-transparent w-[100%]"
              ></input>
              <AiFillCloseCircle className="text-2xl text-[#676767] hover:text-[black]" />
            </div>
            <div className="text-2xl cursor-pointer p-5 px-10 rounded-[10px] text-white bg-blue-600 hover:bg-blue-300 ">
              <button>Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
