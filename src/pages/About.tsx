import { useEffect } from "react";
import ProfileImage from "../components/ProfileImage";
import Tag from "../components/Tag";
import { ABOUT, HOME } from "../constant";
import { useBackground } from "../context/background";
import Certificate from "../components/Certificate";

const About = () => {
  const { setBackground } = useBackground();

  useEffect(() => {
    // Update the background when the component mounts
    setBackground("linear-gradient(135deg, #ffe353, #ffc121 75%)");

    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);

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
          <h2 className="text-white max-w-[280px] text-2xl md:text-[28px] md:max-w-[320px] lg:text-[32px] lg:max-w-[400px] font-medium leading-[112%]">
            {ABOUT.INTRODUCTION}
          </h2>
          <p className="text-[#ffffff80] max-w-[360px] leading-[112%] text-sm">
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
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 border-b border-b-[#ffffff1a] gap-4">
        <div className="flex">
          <h2 className="text-white max-w-[184px] text-xl md:text-[32px] md:max-w-[400px] lg:text-2xl lg:max-w-[280px] leading-[112%]">
            {ABOUT.PASSION}
          </h2>
        </div>
        <div>
          <p className="text-[#ffffff80] leading-[112%] text-sm">
            {ABOUT.PASSION_SUMMARY_1}
            <br></br>
            <br></br>
            {ABOUT.PASSION_SUMMARY_2}
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 border-b border-b-[#ffffff1a] gap-4">
        <div className="flex">
          <h2 className="text-white max-w-[184px] text-xl md:text-[32px] md:max-w-[400px] lg:text-2xl lg:max-w-[280px] leading-[112%]">
            {ABOUT.SKILL}
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap text-[#ffffff80] leading-[112%] text-sm">
            {ABOUT.SKILL_LIST.map((skill) => {
              return (
                <div className="p-1" key={skill}>
                  <Tag
                    background="#ffc4270d"
                    border="#ffc42733"
                    title={skill}
                    color="#ffc427"
                    key={skill}
                    className="font-medium"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 gap-4">
        <div className="flex">
          <h2 className="text-white max-w-[184px] text-xl md:text-[32px] md:max-w-[400px] lg:text-2xl lg:max-w-[280px] leading-[112%]">
            {ABOUT.AWARD}
          </h2>
        </div>
        <div>
          <div className="flex flex-col text-[#ffffff80] leading-[112%] text-sm gap-2">
            {ABOUT.AWARD_LIST.map((award, index) => {
              return (
                <Certificate award={award} key={index} index={index + 1} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
