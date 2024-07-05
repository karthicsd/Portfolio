/* eslint-disable react/no-unescaped-entities */
function Body() {
  return (
    <div className=" min-h-[31rem]  w-full flex flex-wrap items-centerm gap-10 justify-around p-14">
      {/* left */}

      <div className="flex-1  flex flex-col gap-4 min-h-[27rem] items-start  justify-center p-2 text-start">
        <h1 className="pl-10 pr-10 text-3xl  flex flex-col ">
          <span className="">I'm </span>
          <span className=" text-blue-900 font-mono text-5xl mt-2 mb-2">
            Karthick S
          </span>
          <span>Software Developer </span>
        </h1>
        <p className="text-md text-justify mt-2 pl-10 pr-10">
          To pursue a challenging career with dedication and provide my
          efficiency to the fullest in a professional environment by accepting
          challenges, fulfilling the organizational goal and climb the ladder
          through continuous learning commitment.
        </p>
        <div className="mt-4 pl-10 flex justify-center gap-5 text-[0.9rem]">
          <button className="bg-slate-950 text-white px-5 py-2 rounded-md">
            About
          </button>
          <button className="bg-indigo-800 text-white px-5 py-2 rounded-md">
            Download CV
          </button>
        </div>
      </div>

      {/* right */}
      <div className="flex-1 flex  min-h-[27rem] items-center justify-center">
        {/* my image */}
        <div className="min-h-full min-w-[30rem] bg-purple-800 flex justify-end items-end  shadow-2xl shadow-gray-800 bg-my-image bg-cover bg-center rounded-lg rounded-br-[4rem]">
          <div className=" h-28 w-28 bg-indigo-800 border-[0.8rem] border-white rounded-full flex justify-center items-center">
            {/* arrow */}
            <div className="w-14 h-14 ">
              <img
                src="/Portfolio/src/assets/arrow_outward_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
                alt=""
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
