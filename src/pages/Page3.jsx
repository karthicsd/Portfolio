import Button from "../components/Button";
import P3card from "../components/P3card";
const Page3 = () => {
  return (
    <div className=" flex justify-center w-screen min-h-screen bg-gradient-to-b from-neutral-900 from-70% to-neutral-800 to-50% mt-[77rem] 3p3res:mt-[55rem]  2p3res:mt-[33rem] md:mt-[50rem] p3res:mt-[10rem]">
      <div className="mt-16 min-w-[68%]  min-h-max">
        {/* head */}
        <div className="flex flex-col -1sm:flex-row items-center justify-between ">
          <div>
            <h1 className="text-white  font-black font-poppins text-xl text-center -1sm:text-left -1sm:text-2xl md:text-3xl tracking-widest">
              FEATURED PROJECTS
            </h1>
            <p className="text-neutral-300 text-center -1sm:text-left text-[1rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing eli
            </p>
          </div>
          <div className="w-full flex justify-center -1sm:justify-end ">
            <Button name="VIEW ALL" />
          </div>
        </div>
        {/* content */}
        <div className="flex justify-center ">
          <div className=" min-h-max w-max mt-2 grid grid-cols-1 -1sm:grid-cols-2 md:grid-cols-2  auto-rows-auto gap-x-10">
            <P3card
              image="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg"
              name="The Vintage"
            />
            <P3card
              image="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg"
              name="The Vintage"
            />
            <P3card
              image="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg"
              name="The Vintage"
            />
            <P3card
              image="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg"
              name="The Vintage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
