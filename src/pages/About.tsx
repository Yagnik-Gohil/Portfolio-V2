import ProfileImage from "../components/ProfileImage";
import Tag from "../components/Tag";
import { ABOUT, HOME } from "../constant";

const About = () => {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 bg-[#ffc42708] border-b border-b-[#ffffff1a] gap-8 items-center">
        <div className="flex flex-col gap-4 items-start">
          <Tag
            background="#ffc4270d"
            border="#ffc42733"
            title="About"
            color="#ffc427"
          />
          <h2 className="text-white max-w-[280px] text-2xl md:text-[32px] md:max-w-[400px] font-medium leading-[112%]">
            {ABOUT.INTRODUCTION}
          </h2>
          <p className="text-[#ffffff80] max-w-[360px] leading-[112%]">
            {ABOUT.SUMMARY}
          </p>
        </div>
        <div className="flex items-start relative">
          <ProfileImage
            background="#ffc427"
            border="#ffc4271a"
            src={HOME.PROFILE}
            className="relative z-30"
          />
          <ProfileImage
            background="#ffc42759"
            border="#ffc4271a"
            src={HOME.PROFILE_2}
            className="absolute left-[65px] md:left-[90px] lg:left-[110px] z-20 backdrop-blur-3xl"
          />
          <ProfileImage
            background="#ffc4271a"
            border="#ffc4271a"
            src={HOME.PROFILE_3}
            className="absolute left-[130px] md:left-[180px] lg:left-[220px] z-10"
          />
        </div>
      </section>
    </>
  );
};

export default About;
