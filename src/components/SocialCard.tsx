import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";

const SocialCard = ({
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
      className="group flex flex-col justify-center items-center bg-[#20d7ff0d] px-4 py-6 border border-[#ffffff0d] rounded-xl text-center relative overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-card"
      target="_blank"
    >
      {/* Icon and text container */}
      <div className="flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out lg:group-hover:translate-y-[-5px] lg:pt-3">
        {/* Icon */}
        <img
          src={linkedin}
          className="w-7 h-7"
          style={{
            filter:
              "invert(57%) sepia(89%) saturate(460%) hue-rotate(164deg) brightness(101%) contrast(99%)",
          }}
        />

        {/* Text that fades in and moves up */}
        <h2 className="text-xs text-[#20d7ff] leading-[112%] lg:opacity-0 translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-2 transition-all duration-300 ease-in-out">
          {item.NAME}
        </h2>
      </div>

      {/* Background blur effect */}
      <div className="flex flex-col items-center justify-start absolute top-0 right-0 left-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div
          className="rounded-[100px] w-40 h-12 mt-[-24px] border-[#20d7ff33]"
          style={{ background: "#20d7ff33", filter: "blur(50px)" }}
        ></div>
      </div>
    </Link>
  );
};

export default SocialCard;
