import { Link } from "react-router-dom";
import nodejs from "../assets/node-js.svg";

const TechnologyCard = ({
  item,
}: {
  item: {
    NAME: string;
    ICON: string;
    LINK: string;
  };
}) => {
  return (
    <Link
      to={item.LINK}
      className="group flex flex-col justify-center items-center bg-[#2ef1710d] px-4 py-6 sm:px-6 sm:py-12 border border-[#2ef1710d] rounded-xl text-center relative overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-card"
      target="_blank"
    >
      {/* Icon and text container */}
      <div className="flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out lg:group-hover:translate-y-[-5px] lg:pt-3">
        {/* Icon */}
        <img
          src={nodejs}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 ease-in-out lg:group-hover:translate-y-[-5px]"
          style={{
            filter:
              "invert(52%) sepia(91%) saturate(2948%) hue-rotate(97deg) brightness(101%) contrast(98%)",
          }}
        />

        {/* Text that fades in and moves up */}
        <h2 className="text-xs text-[#2ef171] leading-[112%] lg:opacity-0 translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          {item.NAME}
        </h2>
      </div>

      {/* Background blur effect */}
      <div className="flex flex-col items-center justify-start absolute top-0 right-0 left-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div
          className="rounded-[100px] w-40 h-12 mt-[-24px] border-[#2ef17133]"
          style={{ background: "#2ef17133", filter: "blur(50px)" }}
        ></div>
      </div>
    </Link>
  );
};

export default TechnologyCard;
