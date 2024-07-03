import React, { useRef, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const ref = useRef();
  const [inputFocus, setInputFocus] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setInputFocus(false);
      } else {
        setInputFocus(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="w-full mb-44">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex items-center justify-end pt-6 ">
          <div
            className={`w-[400px] mr-8 h-[50px] rounded-3xl ${
              inputFocus
                ? "bg-transparent border-[1px] border-gray-200"
                : "border-gray-200 bg-gray-200 border "
            }  `}
          >
            <div className=" flex w-full h-full rounded-3xl">
              <input
                type="text"
                className="flex-1 text-[1rem] focus:bg-transparent bg-gray-200  outline-none h-full px-2  rounded-3xl"
                aria-label="Search"
                ref={ref}
              />
              <button
                className="text-gray-400 bg-gray-200 h-[47px] w-[50px] flex justify-center items-center rounded-full text-[1.5rem] hover:text-[var(--color-orange)]"
                aria-label="Submit Search"
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="w-[20%] flex items-center justify-between">
            <div className="flex justify-center items-center">
              <div className=" text-gray-300 hover:text-[var(--color-orange)] hover:bg-gray-300 w-[40px] flex justify-center items-center h-[40px] rounded-full text-2xl">
                <FaSearch />
              </div>
            </div>
            <div className=" w-[40%] flex justify-between items-center">
              <p>Filters</p>
              <div className=" w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center">
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className=" w-[90%] h-[1px] bg-gray-300 mt-6"></div>
      </div>
    </div>
  );
};

export default Search;
