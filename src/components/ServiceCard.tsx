import Tag from "./Tag";

const ServiceCard = ({
  item,
}: {
  item: {
    ICON: string;
    TITLE: string;
    SUMMARY: string;
    TAGS: string[];
  };
}) => {
  return (
    <div className="flex flex-col gap-16 bg-[#2ef1710d] border border-[#2ef1710d] rounded-xl p-6 pb-8 relative overflow-hidden transition-all duration-500 hover:shadow-card">
      <div className="flex flex-col items-start gap-6">
        <div className="flex justify-center items-center rounded-xl p-4 md:p-5 bg-[#2ef1710d] border-[#2ef1710d]">
          <img src={item.ICON} className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        <div className="flex flex-col gap-2 max-w-80">
          <h2 className="text-[#2ef171] text-lg md:text-xl lg:text-2xl font-medium leading-[112%]">
            {item.TITLE}
          </h2>
          <p className="text-[#ffffff80] font-medium leading-[112%] max-w-[400px] text-sm lg:max-w-[296px]">
            {item.SUMMARY}
          </p>
        </div>
      </div>

      <div className="flex justify-start items-start flex-wrap gap-2 max-w-80">
        {item.TAGS.map((tag, index) => {
          return (
            <Tag
              background="#2ef1710d"
              border="#2ef17133"
              title={tag}
              color="#2ef171"
              key={index}
            />
          );
        })}
      </div>
      <div className="h-1 absolute right-0 bottom-0 w-full bg-[#2ef171]"></div>
      <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0">
        <div
          className="rounded-[100px] w-60 h-16 mt-[-32px] bg-[#2ef17133]"
          style={{ filter: "blur(50px)" }}
        ></div>
      </div>
    </div>
  );
};

export default ServiceCard;
