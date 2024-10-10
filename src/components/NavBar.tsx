import { FULL_NAME } from "../constant";

const NavBar = () => {
  return (
    <div className="flex justify-center relative px-2 bg-[#0003] py-3 rounded-t-2xl border border-[#FFFFFF1A]">
      <div className="absolute left-6 flex gap-2 top-[18px]">
        <div className="h-[12px] w-[12px] rounded-[50%] bg-[#ffffff26] hover:bg-[#ffffff4d] transition-colors duration-300"></div>
        <div className="h-[12px] w-[12px] rounded-[50%] bg-[#ffffff26] hover:bg-[#ffffff4d] transition-colors duration-300"></div>
        <div className="h-[12px] w-[12px] rounded-[50%] bg-[#ffffff26] hover:bg-[#ffffff4d] transition-colors duration-300"></div>
      </div>
      <div>
        <p className="text-[#FFFFFF4d]">{FULL_NAME}</p>
      </div>
    </div>
  );
};

export default NavBar;
