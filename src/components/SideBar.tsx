import { Link } from "react-router-dom";
import { EMAIL, FULL_NAME, IMAGE, TAG_LINE } from "../constant";
import SideBarLink from "./SideBarLink";

const SideBar = ({
  display,
  closeSidebar,
}: {
  display: "none" | "flex";
  closeSidebar: VoidFunction;
}) => {
  return (
    <div
      className={`${
        display === "none"
          ? "translate-x-full bg-[#0003]"
          : "translate-x-0 bg-[#00000073]"
      } custom-blur absolute right-0 overflow-hidden md:relative md:translate-x-0 transform transition-transform duration-500 ease-in-out flex flex-col md:w-[40%] lg:w-[25%] max-w-[380px] w-[100%] h-[100%] border-l border-[#FFFFFF1A] border-r text-white rounded-bl-2xl z-50`}
    >
      <div className="flex flex-col px-8 py-10 border-b border-[#ffffff1a] items-start gap-5">
        <Link
          to={"/"}
          className="flex max-w-[100%] p-1 relative justify-center items-center border border-[#ffffff0d] rounded-[50%] bg-[#FFFFFF0D]"
          onClick={closeSidebar}
        >
          <img src={IMAGE} className="w-[48px] h-[48px] block rounded-[100%]"></img>
          <div className="w-[10px] h-[10px] absolute rounded-[50%] bg-[#2ef171] top-auto right-1 bottom-1 left-auto animate-zoom-blink"></div>
        </Link>
        <div className="flex flex-col w-[100%]">
          <p className="block">{FULL_NAME}</p>
          <p className="block text-[#ffffff80]">{TAG_LINE}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-5 py-4 overflow-auto text-sm">
        <SideBarLink
          to="/about"
          color="#ffc427"
          text="About"
          counter={0}
          closeSidebar={closeSidebar}
        />
        <SideBarLink
          to="/portfolio"
          color="#c06fff"
          text="Portfolio"
          counter={2}
          closeSidebar={closeSidebar}
        />
        <SideBarLink
          to="/services"
          color="#2ef171"
          text="Services"
          counter={2}
          closeSidebar={closeSidebar}
        />
        <SideBarLink
          to="/contact"
          color="#20d7ff"
          text="Contact"
          counter={0}
          closeSidebar={closeSidebar}
        />
      </div>
      <div className="border-t border-[#ffffff1a] flex flex-col justify-start p-8 items-stretch">
        <Link
          to={EMAIL}
          className="bg-[#ffffff1a] hover:bg-[#ffffff4d] rounded-[10px] px-3 py-4 flex items-center justify-center text-[#ffffffa6] hover:text-white transition-colors duration-300 shadow-card"
        >
          <div>Send Mail</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
