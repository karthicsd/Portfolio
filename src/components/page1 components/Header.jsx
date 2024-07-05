function Header() {
  return (
    //page 1 - header
    <div className="min-h-12 w-full p-5 px-20">
      {/* Items Menu  */}
      <ul className="flex flex-1 flex-wrap gap-5 text-white font-light  justify-around items-center bg-indigo-800 min-w-full min-h-16 p-2 mt-2 rounded-3xl ">
        <li className=" h-10 w-24  flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          Home
        </li>
        <li className=" h-10 w-24 flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          About
        </li>
        <li className=" h-10 w-24 flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          Service
        </li>
        {/* circle */}
        <div>
          <li className="h-10 w-10 font-bold text-black bg-white  rounded-full flex items-center justify-center hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
            SK
          </li>
        </div>
        <li className=" h-10 w-24 flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          Project
        </li>
        <li className=" h-10 w-24 flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          Blog
        </li>
        <li className=" h-10 w-24 flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 ">
          Contact
        </li>
      </ul>
    </div>
  );
}
export default Header;
