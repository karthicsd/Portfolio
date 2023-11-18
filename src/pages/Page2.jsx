import Card from "../components/Card.jsx";
import Box from "../components/Box.jsx";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const Page2 = () => {
  return (
    <div className={` h-screen w-screen `}>
      {/* content */}
      {/* bg-gradient-to-r from-neutral-800 from-50% to-neutral-900 to-50% */}

      <div className=" flex flex-col py-20 gap-20 w-min-screen min-h-[100vh]  bg-gradient-to-r from-neutral-800 from-50% to-neutral-900 to-50% ">
        {/* top */}
        <div className="w-screen  flex flex-wrap justify-center gap-3">
          <Card
            image={<MdOutlineDeveloperMode />}
            description=" Lorem ipsum, dolor sit amet adipisicing elit. Voluptatum ."
            work="App Dev"
          />
          <Card
            image={<FaReact />}
            description=" Lorem ipsum, dolor sit amet adipisicing elit. Voluptatum ."
            work="Web Dev"
          />
          <Card
            image={<FaLaptopCode />}
            description=" Lorem ipsum, dolor sit amet adipisicing elit. Voluptatum ."
            work="Programmer"
          />
        </div>
        {/* bottom */}
        <div className="flex flex-wrap min-h-[18em] justify-center gap-4 ">
          <div className="w-[19em] h-[10em] flex flex-row ys-exp:flex-col items-center justify-center ys-exp:h-[18em] text-center">
            <h1 className=" font-noto text-[5rem] ys-exp:text-[7rem] text-red-500">
              0+
            </h1>
            <h2 className=" font-noto text-[1.5rem] ys-exp:text-[2rem] text-white">
              Years Experience
            </h2>
          </div>
          <div className="grid gap-3 grid-cols-2 md:gap-x-4  ">
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
