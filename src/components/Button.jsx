const Button = (props) => {
  return (
    <button className="text-white bg-red-800 font-poppins text-sm px-10 py-3  tracking-wider">
      {props.name}
    </button>
  );
};

export default Button;
