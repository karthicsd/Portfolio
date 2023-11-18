import { ImArrowRight2 } from "react-icons/im";
// import { MdOutlineDeveloperMode } from "react-icons/md";

const cards = (props) => {
  // console.log(props.image);
  let x = props.image;
  return (
    <div className="text-white w-[15em] ys-exp:w-[20em] bg-neutral-800 h-max  shadow-md shadow-black p-14  hover:bg-red-700 group">
      <div className="text-[4rem] text-red-500  group-hover:text-white">
        {x}
      </div>
      <h1 className="mt-5 font-poppins font-black text-2xl ">{props.work}</h1>
      <p className="mt-5 font-poppins text-neutral-300 text-[14px]">
        {props.description}
      </p>
      <h2 className="flex gap-3 group-hover:text-white items-center mt-5 font-poppins text-red-500 font-bold">
        <p className="tracking-wider font-poppins">KNOW MORE</p>
        <ImArrowRight2 className=" text-lg" />
      </h2>
    </div>
  );
};

export default cards;
