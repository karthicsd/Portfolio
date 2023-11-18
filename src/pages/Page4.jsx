/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import { FaHeart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
const Page4 = () => {
  return (
    <div className=" w-screen min-h-[80vh] bg-gradient-to-t from-neutral-900 from-60% to-neutral-800 to-50%">
      <div className=" min-h-[80vh] flex flex-col justify-between pt-20 items-center">
        {/* box */}
        <div className="px-2 text-center 3p4res:p-10 3p4res:text-left flex flex-col 2p4res:flex-row items-center justify-center w-[65%] h-[18rem] bg-neutral-800 shadow shadow-black">
          <div className=" 2p4res:w-[60%] mb-2">
            <h1 className="text-[1.3rem] leading-8 1sm:text-[2rem] 2p4res:text-[2.3rem] p4res:text-[3rem] font-bold 2p4res:leading-[3.5rem] text-white">
              Let's work together on your next project
            </h1>
            <p className="hidden 3p4res:block text-[12px] sm:text-[1rem] text-stone-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus minus repellendus, dolorum eius deserunt
            </p>
          </div>
          <div className=" w-[40%] flex items-center justify-center">
            <Button name="CONTACT" />
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col -1sm:flex-row items-center justify-around  w-screen h-[6rem] shadow shadow-white bg-neutral-800">
          <div className=" hidden -1sm:block">
            <img
              src="https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg"
              className="h-10 rounded-lg  "
            />
          </div>
          <div className="flex gap-8 text-xl -1sm:text-2xl items-center text-neutral-500">
            <RiInstagramFill />
            <SiGmail />
            <FaLinkedin />
          </div>
          <div className="flex gap-2 items-center">
            <FaHeart className="text-red-600 " />
            <p className="text-neutral-500">Created by Karthick</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
