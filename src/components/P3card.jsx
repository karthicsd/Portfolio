import { ImArrowRight2 } from "react-icons/im";
const P3card = (props) => {
  return (
    <div className="w-max">
      <div className="min-w-max py-10 px-5 md:py-20 md:px-10 min-h-max  shadow shadow-black bg-neutral-800 flex items-center justify-center ">
        <img
          src={props.image}
          alt=""
          className="h-[7em] md:h-[10em] lg:h-[15rem] shadow-lg shadow-black"
        />
      </div>
      <div>
        <p className="  font-noto text-[1.3rem] ys-exp:text-[1.7rem]  text-white">
          {props.name}
        </p>
        <div className=" h-[3rem] flex gap-3 hover:text-white items-center  font-poppins text-red-500 font-bold">
          <p className="tracking-wider font-poppins">KNOW MORE </p>
          <ImArrowRight2 className=" text-lg" />
        </div>
      </div>
    </div>
  );
};

export default P3card;
