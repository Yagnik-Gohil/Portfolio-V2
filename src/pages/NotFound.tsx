import { Link } from "react-router-dom";
import Tag from "../components/Tag";
import { useBackground } from "../context/background";
import { useEffect } from "react";

const NotFound = () => {
  const { setBackground } = useBackground();

  useEffect(() => {
    // Update the background when the component mounts
    setBackground("linear-gradient(135deg, #5a5a5a, #383838 75%)");

    // Optionally, reset or change the background on unmount
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);

  return (
    <section className="flex flex-col flex-1 p-6 items-center justify-center bg-[#ffffff08] gap-4 text-center">
      <Tag
        background="#ffffff0d"
        border="#ffffff1a"
        title="Error"
        color="#ffffffa6"
      />
      <h2 className="text-white text-2xl leading-[112%]">Page Not Found</h2>
      <p className="text-[#ffffff80] font-medium leading-[112%] text-sm max-w-72">
        Oops! It looks like you've hit a dead end. Let's get you back on track.
      </p>
      <Link
        to={"/"}
        className="border border-[#ffffff0d] rounded-xl px-4 py-3 text-[#ffffffa6] bg-[#ffffff1a] hover:bg-[#ffffff4d] transition-all duration-300 text-sm leading-[112%]"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
