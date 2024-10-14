import { useEffect } from "react";
import Tag from "../components/Tag";
import { ICON, SERVICES } from "../constant";
import { useBackground } from "../context/background";
import ServiceIcon from "../components/ServiceIcon";

const Services = () => {
  const { setBackground } = useBackground();

  useEffect(() => {
    // Update the background when the component mounts
    setBackground("linear-gradient(135deg, #2ef171, #10983f 75%)");

    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 bg-[#2ef17108] border-b border-b-[#ffffff1a] gap-8 items-center">
        <div className="flex flex-col gap-4 items-start">
          <Tag
            background="#2ef1710d"
            border="#2ef17133"
            title="Services"
            color="#2ef171"
          />
          <h2 className="text-white max-w-[280px] text-2xl md:text-[28px] md:max-w-[320px] lg:text-[32px] lg:max-w-[400px] font-medium leading-[112%]">
            {SERVICES.INTRODUCTION}
          </h2>
          <p className="text-[#ffffff80] max-w-[360px] leading-[112%] text-sm">
            {SERVICES.SUMMARY}
          </p>
        </div>
        <div className="flex items-start relative">
          <ServiceIcon
            background="#2ef171"
            border="#2ef1711a"
            src={ICON.DESKTOP}
            className="relative z-30"
          />
          <ServiceIcon
            background="#2ef17159"
            border="#2ef1711a"
            src={ICON.GEAR}
            className="absolute left-[65px] md:left-[90px] lg:left-[110px] z-20 backdrop-blur-3xl"
          />
          <ServiceIcon
            background="#2ef1711a"
            border="#2ef1711a"
            src={ICON.FLAG}
            className="absolute left-[130px] md:left-[180px] lg:left-[220px] z-10"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 gap-3">
        {SERVICES.LIST.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-16 bg-[#2ef1710d] border border-[#2ef1710d] rounded-xl p-6 pb-8 relative overflow-hidden"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex justify-center items-center rounded-xl p-4 md:p-5 bg-[#2ef1710d] border-[#2ef1710d]">
                  <img src={item.ICON} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="flex flex-col gap-2 max-w-80">
                  <h2 className="text-[#2ef171] text-lg md:text-[28px] lg:text-[32px] font-medium leading-[112%]">
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
        })}
      </section>
    </>
  );
};

export default Services;
