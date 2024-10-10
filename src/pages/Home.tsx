import HomeCard from "../components/HomeCard";
import ProfileImage from "../components/ProfileImage";
import { HOME } from "../constant";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-start gap-8 p-6 md:p-12 bg-[#c06fff08] border-b border-b-[#ffffff1a]">
        <ProfileImage
          background="#ffffff0d"
          border="#ffffff0d"
          src={HOME.PROFILE}
        />
        <div className="flex flex-col justify-between lg:flex-row text-white w-full gap-3">
          <p className="text-2xl max-w-[280px] md:max-w-[320px] lg:max-w-[400px] lg:text-[32px]">
            {HOME.INTRODUCTION}
          </p>
          <p className="text-[#ffffff80] font-medium leading-[112%] max-w-[400px] text-sm lg:max-w-[296px]">
            {HOME.SUMMARY}
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 px-8 py-6 gap-3">
        <HomeCard
          to="about"
          title="About"
          summary={HOME.ABOUT}
          icon={HOME.ABOUT_ICON}
          color={{
            background: "#ffc4270d",
            border: "#ffc42733",
            iconBackground: "#ffffff0d",
            bottomLine: "#ffc427",
          }}
          className="bg-[#ffc4271a] hover:bg-[#ffc42733] transition-all duration-500 w-full text-[#ffc427] border border-[#ffc4271a] relative flex flex-col gap-[14px] flex-1 justify-start items-start overflow-hidden p-6 rounded-xl"
        />
        <HomeCard
          to="portfolio"
          title="Portfolio"
          summary={HOME.PORTFOLIO}
          icon={HOME.PORTFOLIO_ICON}
          color={{
            background: "#bf6fff1a",
            border: "#bf6fff33",
            iconBackground: "#c06fff0d",
            bottomLine: "#c06fff",
          }}
          className="bg-[#bf6fff1a] hover:bg-[#bf6fff33] transition-all duration-500 w-full text-[#c06fff] border border-[#bf6fff1a] relative flex flex-col gap-[14px] flex-1 justify-start items-start overflow-hidden p-6 rounded-xl"
        />
        <HomeCard
          to="services"
          title="Services"
          summary={HOME.SERVICES}
          icon={HOME.SERVICES_ICON}
          color={{
            background: "#2ef1711a",
            border: "#2ef17133",
            iconBackground: "#2ef1710d",
            bottomLine: "#2ef171",
          }}
          className="bg-[#2ef1711a] hover:bg-[#2ef17133] transition-all duration-500 w-full text-[#2ef171] border border-[#bf6fff1a] relative flex flex-col gap-[14px] flex-1 justify-start items-start overflow-hidden p-6 rounded-xl"
        />
        <HomeCard
          to="contact"
          title="Contact"
          summary={HOME.CONTACT}
          icon={HOME.CONTACT_ICON}
          color={{
            background: "#20d7ff1a",
            border: "#20d7ff33",
            iconBackground: "#20d7ff0d",
            bottomLine: "#20d7ff",
          }}
          className="bg-[#20d7ff1a] hover:bg-[#20d7ff33] transition-all duration-500 w-full text-[#20d7ff] border border-[#bf6fff1a] relative flex flex-col gap-[14px] flex-1 justify-start items-start overflow-hidden p-6 rounded-xl"
        />
      </section>
    </>
  );
};

export default Home;
