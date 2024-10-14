import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ICON, PORTFOLIO } from "../constant";
import { useBackground } from "../context/background";
import Tag from "../components/Tag";

const PortfolioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBackground } = useBackground();

  // Assuming the items in PORTFOLIO.LIST have an id field to match
  const data = PORTFOLIO.LIST.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate("/portfolio"); // Use "/portfolio" as the correct relative path
    }
    setBackground(`linear-gradient(135deg, ${data?.color}, ${data?.color} 75%)`);
    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [data, navigate, setBackground]); // Add data and navigate as dependencies to avoid stale closures

  return (
    <>
      {data && (
        <section className="flex flex-col p-6 gap-8 md:p-12 border-b border-[#ffffff1a]">
          <Link
            to="#"
            className="flex items-center gap-1 hover:gap-2 opacity-65 hover:opacity-100 transition-all duration-500"
            onClick={() => navigate(-1)}
          >
            <img src={ICON.BACK} className="w-4 h-4" />
            <p className="text-white">Back to Portfolio</p>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Tag
                  background="#ffffff0d"
                  border="#ffffff1a"
                  title={data.year}
                  color="#ffffffa6"
                />
                <Tag
                  background="#ffffff0d"
                  border="#ffffff1a"
                  title={data.type}
                  color="#ffffffa6"
                />
                {data.tags.map((tag) => {
                  return (
                    <Tag
                      background="#ffffff0d"
                      border="#ffffff1a"
                      title={tag}
                      color="#ffffffa6"
                      key={tag}
                    />
                  );
                })}
              </div>
              <h1 className="text-white text-2xl leading-[112%] lg:text-4xl">
                {data.name}
              </h1>
              <p className="text-[#ffffff80] text-sm leading-[112%]">
                {data.summary}
              </p>
            </div>
            <div className="flex lg:flex-col items-end gap-2 lg:absolute lg:right-0 lg:bottom-0">
              <Link
                to={"#"}
                className="text-[#ffffffa6] text-sm font-medium leading-[112%] border border-[#ffffff0d] bg-[#ffffff1a] px-4 py-3 rounded-[10px] hover:bg-[#ffffff4d] transition-all duration-300"
              >
                View Live
              </Link>
              <Link
                to={"#"}
                className="text-[#ffffffa6] text-sm font-medium leading-[112%] border border-[#ffffff0d] bg-[#ffffff1a] px-4 py-3 rounded-[10px] hover:bg-[#ffffff4d] transition-all duration-300"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
      )}
      {data && (
        <section className="flex flex-col p-6 gap-4 md:p-12">
         {data.gallery.map((path, index) => {
            return <img src={path} key={index} className="rounded-lg"/>
         })}
        </section>
      )}
    </>
  );
};

export default PortfolioDetails;
