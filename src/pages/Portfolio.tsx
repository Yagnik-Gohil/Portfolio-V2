import { useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Tag from "../components/Tag";
import { PORTFOLIO } from "../constant";
import { useBackground } from "../context/background";

const Portfolio = () => {
  const { setBackground } = useBackground();

  useEffect(() => {
    // Update the background when the component mounts
    setBackground("linear-gradient(135deg, #c06fff, #9226e6 75%)");

    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);

  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 bg-[#c06fff08] border-b border-b-[#ffffff1a] gap-8 items-center">
        <div className="flex flex-col gap-4 items-start">
          <Tag
            background="#c06fff0d"
            border="#c06fff33"
            title="Portfolio"
            color="#c06fff"
          />
          <h2 className="text-white max-w-[280px] text-2xl md:text-[28px] md:max-w-[320px] lg:text-[32px] lg:max-w-[400px] font-medium leading-[112%]">
            {PORTFOLIO.TITLE}
          </h2>
        </div>
        <div className="flex items-start relative">
          <p className="text-[#ffffff80] font-medium leading-[112%] max-w-[400px] text-sm lg:max-w-[296px]">
            {PORTFOLIO.SUMMARY}
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 p-6 md:p-12 gap-5">
        {PORTFOLIO.LIST.map((item) => {
          return <PortfolioCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default Portfolio;
