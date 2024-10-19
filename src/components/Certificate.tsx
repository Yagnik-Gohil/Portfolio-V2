import { Link } from "react-router-dom";
import Tag from "./Tag";

const Certificate = ({
  award,
  index,
}: {
  award: {
    name: string;
    year: number;
    link: string;
  };
  index: number;
}) => {
  return (
    <Link
      to={award.link}
      className="group flex justify-between items-center p-4 bg-[#ffc4270d] rounded-xl font-medium relative overflow-hidden hover:bg-[#ffc42733] transition-all duration-500 hover:shadow-card"
      target="_blank"
    >
      <p className="text-[#ffc427]">{award.name}</p>
      <div className="flex items-center gap-2">
        <p>{award.year}</p>
        <Tag
          background="#ffc4270d"
          border="#ffc42733"
          title={"#" + String(index)}
          color="#ffc427"
          className="font-medium"
        />
      </div>
      <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0 opacity-0 group-hover:opacity-100">
        <div
          className="rounded-[100px] w-60 h-16 mt-[-32px] border-[#ffc42733]"
          style={{ background: "#ffc42733", filter: "blur(50px)" }}
        ></div>
      </div>
    </Link>
  );
};

export default Certificate;
