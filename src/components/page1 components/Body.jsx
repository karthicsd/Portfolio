/* eslint-disable react/no-unescaped-entities */
function Body() {
  return (
    <div className=" min-h-[31rem] bg-slate-500 w-full flex items-centerm gap-10 justify-around p-14">
      {/* left */}

      <div className="flex-1 flex flex-col  bg-blue-400 min-h-[27rem] items-center justify-center p-2 text-start">
        <h1 className="">
          I'm <span>Karthick S</span>,Software Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          similique, rem repudiandae obcaecati repellat voluptatibus adipisci
          harum, iste aperiam quibusdam atque voluptates perferendis magnam
          eveniet quia quos dolore libero natus.
        </p>
      </div>
      {/* right */}
      <div className="flex-1 flex bg-yellow-50 min-h-[27rem] items-center justify-center">
        hello
      </div>
    </div>
  );
}
export default Body;
