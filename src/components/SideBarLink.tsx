import { Link } from "react-router-dom";

const SideBarLink = ({
  to,
  color,
  text,
  counter,
  closeSidebar,
}: {
  to: string;
  color: string;
  text: string;
  counter: number;
  closeSidebar: VoidFunction;
}) => {
  return (
    <Link
      to={to}
      className="flex px-[12px] py-[6px] justify-start items-center hover:bg-[#ffffff0d] rounded-lg group transition-colors duration-300"
      onClick={closeSidebar}
    >
      <div className="flex justify-start items-center flex-1 gap-[10px]">
        <div
          className="w-[4px] h-[4px] rounded-[50%] hidden group-hover:inline-block transition-all duration-300"
          style={{ backgroundColor: color }}
        ></div>
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          {text}
        </div>
      </div>
      {counter > 0 && (
        <div className="bg-[#ffffff1a] rounded-md px-[6px] py-[2px]">
          <div className="text-[#ffffffa6] text-sm">{counter}</div>
        </div>
      )}
    </Link>
  );
};

export default SideBarLink;
