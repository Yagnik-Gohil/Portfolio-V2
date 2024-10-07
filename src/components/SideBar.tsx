import { Link } from "react-router-dom";
import { FULL_NAME, IMAGE, TAG_LINE } from "../constant";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <div className="w-[40%] bg-[#0003] md:w-[25%] max-w-[380px] flex flex-col h-[100%] border-r border-[#FFFFFF1A] text-white rounded-bl-2xl">
      <div className="flex flex-col px-8 py-10 border-b border-[#ffffff1a] items-start gap-5">
        <Link
          to={"/"}
          className="flex max-w-[100%] p-1 relative justify-center items-center border border-[#ffffff0d] rounded-[50%] bg-[#FFFFFF0D]"
        >
          <img src={IMAGE} className="w-[48px] h-[48px] block"></img>
          <div className="w-[10px] h-[10px] absolute rounded-[50%] bg-[#2ef171] top-auto right-1 bottom-1 left-auto animate-zoom-blink"></div>
        </Link>
        <div className="flex flex-col w-[100%]">
          <p className="block">{FULL_NAME}</p>
          <p className="block text-[#ffffff80]">{TAG_LINE}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-5 py-4 overflow-auto text-sm">
        <SideBarLink to="/about" color="#ffc427" text="About" counter={0} />
        <SideBarLink
          to="/portfolio"
          color="#c06fff"
          text="Portfolio"
          counter={2}
        />
        <SideBarLink
          to="/services"
          color="#2ef171"
          text="Services"
          counter={2}
        />
        <SideBarLink to="/contact" color="#20d7ff" text="Contact" counter={0} />
      </div>
      <div className="border-t border-[#ffffff1a] flex flex-col justify-start p-8 items-stretch">
        <Link
          to={"/"}
          className="bg-[#ffffff1a] hover:bg-[#ffffff4d] rounded-[10px] px-3 py-4 flex items-center justify-center text-[#ffffffa6] hover:text-white transition-colors duration-300" 
        >
          <div className=" ">Send Mail</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
