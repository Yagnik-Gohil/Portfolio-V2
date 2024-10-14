import { Link } from "react-router-dom";

const PortfolioCard = ({
  item,
}: {
  item: {
    id: string;
    image: string;
    name: string;
    type: string;
  };
}) => {

  return (
    <Link to={item.id} className="flex flex-col w-full gap-3 lg:gap-4 hover:p-2 hover:pb-3 transition-all duration-500 relative">
      <img src={item.image} className="rounded-lg" />
      <div className="flex flex-col lg:flex-row lg:justify-between gap-1 px-2">
        <p className="text-white leading-[112%]">{item.name}</p>
        <p className="text-[#ffffff80] font-medium leading-[112%] text-sm">
          {item.type}
        </p>
      </div>
      <div className="absolute bg-[#c06fff] opacity-0 hover:opacity-10 transition-all duration-500 border border-white rounded-[18px] inset-0 z-0">
      </div>
    </Link>
  );
};

export default PortfolioCard;
