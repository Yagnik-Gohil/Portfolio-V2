import { FULL_NAME } from "../constant";

const NavBar = () => {
  return (
    <div className="flex justify-center relative px-2 bg-amber-950 py-3 rounded-t-2xl">
      <div className="absolute left-6 flex gap-2 top-[18px]">
        <div className="h-[12px] w-[12px] rounded-[50%] bg-white"></div>
        <div className="h-[12px] w-[12px] rounded-[50%] bg-white"></div>
        <div className="h-[12px] w-[12px] rounded-[50%] bg-white"></div>
      </div>
      <div>
        <p className="text-white">{FULL_NAME}</p>
      </div>
    </div>
  );
};

export default NavBar;
