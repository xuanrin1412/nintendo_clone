import logo from "@/assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { PiCaretDownBold } from "react-icons/pi";
import support from "@/assets/support.svg"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { items } from "@/data/items";
import { IoIosCloseCircle } from "react-icons/io";
import { games, options, trendingTopics } from "@/data/header";

export const Header = () => {
  const [toggleOption, setToggleOption] = useState<boolean>(false);
  const [choosedOption, setChoosedOption] = useState<string>(options[0].value);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef_2 = useRef<HTMLDivElement>(null);
  const [openFeature, setOpenFeature] = useState<string>()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToggleOption(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    const handleClickOutside_2 = (event: MouseEvent) => {
      if (dropdownRef_2.current && !dropdownRef_2.current.contains(event.target as Node)) {
        setToggleSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside_2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside_2);
    };
  }, [dropdownRef, dropdownRef_2]);

  return (
    <div>
      {/* HEADER 1 */}
      <div className="border-b z-10 flex justify-between h-header relative">
        {/* LEFT */}
        <div className="flex items-center">
          {/* LOGO */}
          <div className="z-40 mr-4 w-[105px] h-full flex justify-center items-center bg-primary ">
            <div className="h-[17px] w-[69px]">
              <img className="h-full w-full object-cover" src={logo} alt="" />
            </div>
          </div>
          {/* SEARCH BAR */}
          <div className="z-40 group flex h-[34px] items-center border-b-[1.5px] border-secondary focus-within:border-primary">
            <div >
              <HiSearch className="text-2xl text-secondary group-focus-within:text-primary mr-[10px]" />
            </div>
            <input
              type="text"
              className="h-full w-[284px] mr-2 outline-none p-2 bg-white"
              placeholder="Search"
              onFocus={() => setToggleSearch(true)}
            />
            <div ref={dropdownRef} className="relative w-[137px] z-50">
              <div
                onClick={() => {
                  setToggleOption(!toggleOption);
                }}
                className={`${toggleOption ? "text-primary" : "text-secondary"} cursor-pointer z-20 px-2 text-sm font-bold flex items-center justify-between `}
              >
                <span>{choosedOption}</span>
                <span
                  className={`${toggleOption
                    ? "transform rotate-180 duration-300"
                    : "transform rotate-0 duration-300"
                    }`}
                >
                  <PiCaretDownBold className="font-bold text-md" />
                </span>
              </div>
              {toggleOption && (
                <div className="shadow-md absolute top-8 left-0 flex-col w-full rounded-xl py-1 bg-white">
                  {options.map((item, index) => (
                    <div
                      onClick={() => {
                        setChoosedOption(item.value);
                        setToggleOption(false);
                      }}
                      key={index}
                      className={`${choosedOption === item.value
                        ? "bg-primary text-white first:rounded-t-md last:rounded-b-md"
                        : ""
                        } cursor-pointer hover:bg-third hover:text-secondary text-sm font-bold first:hover:rounded-t-md last:hover:rounded-b-md text-secondary px-2 py-1`}
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* TOGGLE WHEN CLICK INPUT SEARCH */}
          {toggleSearch && <div ref={dropdownRef_2} className=" flex  pt-20 pb-20 z-30 absolute top-0 left-0 w-full bg-pink-50">
            <div onClick={(e) => {
              e.stopPropagation
              setToggleSearch(false)
            }} className=" absolute top-5 right-5"><IoIosCloseCircle className="text-3xl" /></div>
            <div className=" pl-[120px] space-y-3 ">
              {trendingTopics.map((item, index) => (
                <div className=" text-base cursor-pointer leading-[22px] font-bold first:text-secondary text-primary" key={index}>{item.value}</div>
              ))}
            </div>
            <div className="pl-5">
              <div className=" text-base leading-[22px] font-bold text-secondary mb-8">Top store products</div>
              <div className="grid grid-cols-2 pr-5 gap-2">
                {items.slice(0, 4).map((item, index) => (
                  <div key={index} className="cursor-pointer group flex rounded-xl bg-white border w-[341px] h-20">
                    <div className=" w-[141px] relative ">
                      <img className="rounded-l-xl h-full w-full object-cover" src={item.img} alt="" />
                      <div className=" absolute top-0 left-0 w-full h-full group-hover:bg-gray-700 group-hover:bg-opacity-35 group-hover:rounded-l-xl z-50"></div>
                    </div>
                    <div className=" px-3 py-[6px] flex-1 grid content-between">
                      <div className=" text-sm font-bold text-secondary group-hover:text-primary">
                        {item.title}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="before:content-['|'] before:w-[2px] before:h-4 before:bg-[#3946A0] before:text-[#3946A0] before:mr-2 text-sm">{item.text} </div>
                        <div><FaRegHeart /></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>}
        </div>

        {/* RIGHT */}
        <div className="flex items-center space-x-7 px-5">
          <div className="flex items-center">
            <div className="h-[17px] w-[18px] mr-[6px]">
              <img className="h-full w-full object-cover" src={support} alt="support" />
            </div>
            <span className="text-sm text-secondary font-bold">Support</span>
          </div>
          <div className="flex items-center">
            <span><FaHeart className="text-secondary mr-[6px]" /></span>
            <span className="text-sm text-secondary font-bold">Wish List</span>
          </div>
          <div className="flex items-center">
            <span><FaCartShopping className="text-secondary mr-[6px]" /></span>
            <span className="text-sm text-secondary font-bold">Cart</span>
          </div>
          <div className="flex items-center">
            <span><FaUser className="text-secondary mr-[6px]" /></span>
            <span className="text-sm text-secondary font-bold">Log in / Sign up</span>
          </div>
          <div className="w-6 h-[15px]">
            <img className="h-full w-full object-cover rounded-sm" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="" />
          </div>
        </div>
      </div>
      {/* HEADER 2 */}
      <div className="relative ">
        <div className=" space-x-10 flex items-center justify-center  border-b h-[44px] ">
          {games.map((item, index) => (
            <div onClick={() => setOpenFeature(item.main)} key={index} className="flex ">
              <div className="h-4 w-4 mr-[6px]"><img className="h-full w-full object-cover" src={item.icon} alt="" /></div>
              <div className="text-[14px] leading-[14px] font-bold text-secondary">{item.main}</div>
              <div className="transform rotate-180 duration-300 ml-[8px]">
                <PiCaretDownBold className="font-bold text-md" />
              </div>
            </div>
          ))}
        </div>
        {openFeature ?
          <div className=" absolute top-[44px] left-0 w-full h-[305px] bg-red-500">
            {games.find(item => item.main === openFeature)?.Child?.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div> : ""
        }
      </div>
      {/* HEADER 1 */}
      <div></div>
    </div >
  );
};
