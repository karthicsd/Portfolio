import { IoMenuSharp } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
// import Page2 from "./Page2";
const Page1 = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "PROJECT", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
    { name: "OTHER PAGE", link: "/ " },
  ];
  let wid = screen.width;
  let [icon, setIcon] = useState(true);
  return (
    <>
      <div
        className={`  w-screen 1sm:h-[100vh] ${icon ? "" : "1sm:h-[150vh]"} ${
          icon && wid >= 532 ? "" : "1sm:h-[135vh] "
        } ${icon && wid >= 640 ? "" : "1sm:h-[98.5vh]"}`}
      >
        <header className=" w-screen h-min-[10vh]  bg-neutral-900">
          <div className="px-10 py-4  1sm:flex 1sm:items-center 1sm:justify-around 1sm:py-4 ">
            {/* image */}
            <div className="">
              <img
                src="https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg"
                className="h-10 rounded-lg  "
              />
            </div>
            {/* open and close  */}
            <div
              onClick={() => {
                setIcon(!icon);
              }}
              className="absolute right-8 top-5 1sm:hidden"
            >
              {icon ? (
                <IoMenuSharp className="text-4xl text-white" />
              ) : (
                <GrClose className="text-3xl mt-1 text-white" />
              )}
            </div>
            {/* list */}
            <ul
              className={`z-1 text-white  cursor-pointer text-[0.8rem] sm:text-[1rem] font-poppins mt-9  1sm:flex 1sm:gap-7 1sm:mt-0 ${
                icon ? "hidden " : "block "
              }`}
            >
              {links.map((e, index) => (
                <li
                  key={index}
                  className="mt-5 text-center shadow-sm shadow-white active:shadow-red-600  1sm:left-0 1sm:mt-0 1sm:shadow-none "
                >
                  <a src={e.link}>{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </header>
        {/* The below height is responsible for screeen size */}
        <body className=" h-[90.7vh] w-screen bg-neutral-900">
          <div className=" justify-center  1sm:flex ">
            {/* image */}
            <div
              className={` w-screen h-[60vh]  1sm:w-2/4 flex 1sm:h-[89.9vh] justify-center items-center  ${
                !icon && wid <= 532 ? " 1sm:h-[62.9vh]" : " "
              }${icon && 532 > wid <= 640 ? "" : ""}`}
            >
              <img
                src="https://images.pexels.com/photos/5721172/pexels-photo-5721172.jpeg"
                className={`h-[23rem] sm:h-[28rem]  p-5 ${
                  !icon && 532 >= wid <= 640 ? "h-[20rem] sm:mb-0" : ""
                }
                
                ${!icon && wid < 531 ? "h-[20rem]  sm:mb-0" : ""}`}
              />
            </div>
            {/* content */}
            <div className="w-2/4  flex flex-col justify-center items-start">
              <div
                className={`w-screen  text-center 1sm:text-left 1sm:w-[70%] p-2 ${
                  !icon && 532 >= wid <= 640 ? "h-[20rem]  sm:mb-0 " : ""
                }
                ${!icon && wid < 532 ? "h-[20rem]  sm:mb-0" : ""}`}
              >
                <h2 className=" font-poppins sm:text-[20px] font-extrabold text-red-500">
                  Hello Im Karthick
                </h2>
                <h1 className="text-[3rem] sm:text-[4rem] font-bold leading-[3.5rem] text-white">
                  Web Developer
                </h1>
                <p className="text-[12px] sm:text-[1rem] text-stone-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, tenetur corrupti at consequuntur a voluptate quo
                  architecto quidem quasi
                </p>
                <button
                  className={`text-white bg-red-800 font-poppins text-sm px-10 py-3 mt-7 tracking-wider ${
                    !icon && 532 >= wid <= 640 ? "px-7 py-2 mt-4" : ""
                  }`}
                >
                  ABOUT ME
                </button>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};
export default Page1;
