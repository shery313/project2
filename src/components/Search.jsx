import React, { useRef, useState, useEffect } from "react";
import { FaCross, FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const[search,setSearch]=useState('')
  const navigate=useNavigate()
  const ref2 = useRef();
  const ref1 = useRef();
  const [inputFocus, setInputFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange=(event)=>{
    setSearch(event.target.value)
    
  }
  const handleSubmit=(event)=>{
    navigate(`/search/?query=${search}`)


  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref2.current && !ref2.current.contains(event.target)) {
        if (ref1.current && ref1.current.contains(event.target)) {
          setInputFocus(false);
        } else {
          setInputFocus(false);
        }
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
  }, [ref2, ref1]);
  console.log(inputFocus);
  console.log(ref1);

  return (
    <div className="w-full bg-gray-400">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex items-center justify-end pt-6 sm:h-[55px] ">
          {open && (
            <>
              <div
                className={`w-[64%] sm:w-[50%] mr-2 sm:mr-8 h-[40px] sm:h-[50px] rounded-3xl ${
                  inputFocus
                    ? "bg-transparent border-[1px] border-gray-200"
                    : "border-gray-200 bg-gray-200 border "
                }  `}
              >
                <div
                  className={`flex w-full h-full rounded-3xl ${
                    inputFocus ? "bg-transparent" : "bg-gray-200 "
                  }`}
                >
                  <input
                    type="text"
                    className=" w-[80%] sm:flex-1 text-[1rem] focus:bg-transparent bg-gray-200  outline-none h-full px-2  rounded-3xl"
                    aria-label="Search"
                    placeholder="Search for ..."
                    ref={ref2}
                    onChange={handleChange}
                  />

                  <button
                    className="text-gray-400 w-[20%] bg-gray-200 h-[100%] sm:h-[47px] sm:w-[50px] flex justify-center items-center rounded-full text-[1.5rem] hover:text-[var(--color-orange)]"
                    aria-label="Submit Search" onClick={handleSubmit}
                  >
                    <IoSearchOutline size={30} />
                  </button>
                </div>
              </div>
            </>
          )}
          <div className=" w-[33%] sm:w-[20%] flex items-center justify-between">
            <div className="flex justify-center items-center">
              <div
                className={` w-[40px] flex justify-center items-center h-[40px] rounded-full text-2xl ${
                  open
                    ? "bg-gray-300 text-[var(--color-orange)]"
                    : "text-gray-300 hover:text-[var(--color-orange)] hover:bg-gray-300"
                } `}
                ref={ref1}
                onClick={() => setInputFocus(false)}
              >
                {open ? (
                  <MdOutlineClose size={30} onClick={() => setOpen(false)} />
                ) : (
                  <IoSearchOutline size={30} onClick={() => setOpen(true)} />
                )}
              </div>
            </div>
            <div className=" w-[60%] sm:w-[40%] flex justify-end sm:justify-between items-center">
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
