import { useEffect } from "react";
import { useBackground } from "../context/background";
import Tag from "../components/Tag";
import { LICENSES } from "../constant";
import ServiceIcon from "../components/ServiceIcon";

import book from "../assets/open-book.svg";
import folder from "../assets/folder.svg";
import paperclip from "../assets/paperclip.svg";

const Licenses = () => {
  const { setBackground } = useBackground();

  useEffect(() => {
    // Update the background when the component mounts
    setBackground("linear-gradient(135deg, #5a5a5a, #383838 75%)");

    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 bg-[#ffffff08] border-b border-b-[#ffffff1a] gap-8 items-center">
        <div className="flex flex-col gap-4 items-start">
          <Tag
            background="#ffffff0d"
            border="#ffffff1a"
            title="Information"
            color="#ffffffa6"
          />
          <h2 className="text-white max-w-[280px] text-2xl md:text-[28px] md:max-w-[320px] lg:text-[32px] lg:max-w-[400px] font-medium leading-[112%]">
            {LICENSES.TITLE}
          </h2>
          <p className="text-[#ffffff80] max-w-[360px] leading-[112%] text-sm">
            {LICENSES.SUMMARY}
          </p>
        </div>
        <div className="flex items-start relative">
          <ServiceIcon
            background="#ffffff4d"
            border="#ffffff1a"
            src={book}
            className="relative z-30 backdrop-blur-3xl"
          />
          <ServiceIcon
            background="#ffffff26"
            border="#ffffff1a"
            src={folder}
            className="absolute left-[65px] md:left-[90px] lg:left-[110px] z-20 backdrop-blur-3xl"
          />
          <ServiceIcon
            background="#ffffff1a"
            border="#ffffff1a"
            src={paperclip}
            className="absolute left-[130px] md:left-[180px] lg:left-[220px] z-10"
          />
        </div>
      </section>
      {LICENSES.LIST.map((item, index) => {
        return (
          <section
            className={`grid grid-cols-1 lg:grid-cols-2 p-8 gap-4 md:gap-3 px-6 pt-8 pb-10 md:px-10 ${
              index < LICENSES.LIST.length - 1
                ? "border-b border-b-[#ffffff1a]"
                : ""
            }`}
            key={index}
          >
            <h2 className="text-white max-w-[280px] text-lg md:text-xl lg:text-2xl md:text-[28px] md:max-w-[320px]  lg:max-w-[400px] font-medium leading-[112%]">
              {item.TITLE}
            </h2>
            <p className="text-[#ffffff80] max-w-[360px] leading-[112%] text-sm">
              {item.SUMMARY}
            </p>
          </section>
        );
      })}
    </>
  );
};

export default Licenses;
