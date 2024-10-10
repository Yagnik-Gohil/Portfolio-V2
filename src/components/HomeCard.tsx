import { Link } from "react-router-dom";
import Tag from "./Tag";

const HomeCard = ({
  to,
  title,
  summary,
  icon,
  color,
  className,
}: {
  to: string;
  title: string;
  summary: string;
  icon: string;
  color: {
    border: string;
    background: string;
    iconBackground: string;
    bottomLine: string;
  };
  className: string;
}) => {
  return (
    <Link to={to} className={className}>
      <Tag background={color.background} border={color.border} title={title} />
      <h2 className="text-lg max-w-36 leading-[112%] font-medium lg:text-2xl lg:max-w-48">{summary}</h2>
      <div
        className="flex justify-center items-center absolute border p-[28px] md:p-8 rounded-[50%] top-auto right-[-16px] bottom-[-8px] md:right-[-14px] md:bottom-[-14px] lg:p-10 lg:right-[-16px] lg:bottom-[-24px] left-auto"
        style={{
          borderColor: color.iconBackground,
          background: color.iconBackground,
        }}
      >
        <img
          src={icon}
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        ></img>
      </div>
      <div
        className="h-1 absolute right-0 bottom-0 w-full"
        style={{ background: color.bottomLine }}
      ></div>
      <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0">
        <div
          className="rounded-[100px] w-60 h-16 mt-[-32px]"
          style={{ background: color.border, filter: "blur(50px)" }}
        ></div>
      </div>
    </Link>
  );
};

export default HomeCard;
