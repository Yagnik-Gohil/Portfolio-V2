import { useEffect } from "react";
import Tag from "../components/Tag";
import { ICON, SERVICES } from "../constant";
import { useBackground } from "../context/background";
import ServiceIcon from "../components/ServiceIcon";
import ServiceCard from "../components/ServiceCard";
import TechnologyCard from "../components/TechnologyCard";

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
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 gap-3 border-b border-b-[#ffffff1a]">
        {SERVICES.LIST.map((item, index) => {
          return <ServiceCard item={item} key={index} />;
        })}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 border-b border-b-[#ffffff1a] gap-4">
        <div className="flex">
          <h2 className="text-white max-w-[240px] text-xl md:text-xl md:max-w-[400px] lg:text-2xl lg:max-w-[280px] leading-[112%]">
            {SERVICES.TECHNOLOGY_TITLE}
          </h2>
        </div>
        <div>
          <p className="text-[#ffffff80] leading-[112%] text-sm">
            {SERVICES.TECHNOLOGY_SUMMARY}
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 p-6 md:p-12 gap-3">
        {SERVICES.TECHNOLOGY.map((item, index) => {
          return <TechnologyCard item={item} key={index} />
        })}
      </section>
    </>
  );
};

export default Services;
