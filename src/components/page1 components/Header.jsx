function Header() {
  const headList = ["Home", "About", "Service", "Project", "Blog", "Contact"];
  return (
    //page 1 - header
    <div className="min-h-12 w-full p-5 px-20">
      {/* Items Menu  */}
      <ul className="sm:flex flex-1 flex-col hidden sm:flex-row mini:ml-0 flex-wrap gap-5 text-white font-light  justify-around items-center bg-indigo-800 min-w-full min-h-16 p-2 mt-2 rounded-3xl ">
        {headList.map((list, index) => (
          <li
            key={index}
            className=" h-10 w-24  flex justify-center items-center hover:bg-white hover:text-black hover:rounded-3xl hover:transition hover:ease-in-out hover:delay-150 "
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Header;
