import { Link, Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { CLOSE, MENU } from "./constant";
import { useState } from "react";
import About from "./pages/About";

function App() {
  const [path, setPath] = useState(MENU);
  const [display, setDisplay] = useState<"none" | "flex">("none");

  // Get the current location
  const location = useLocation();

  // Map routes to background classes
  const bgClasses: { [key: string]: string } = {
    "/": "bg-home-gradient",
    "/about": "bg-about-gradient",
    "/portfolio": "bg-portfolio-gradient",
    "/services": "bg-services-gradient",
    "/contact": "bg-contact-gradient",
  };

  // Get the corresponding background class for the current route
  const bgClass = bgClasses[location.pathname] || "bg-home-gradient"; // Fallback to home-gradient

  const handleMenu = () => {
    if (path === MENU) {
      setPath(CLOSE);
      setDisplay("flex");
    } else {
      setPath(MENU);
      setDisplay("none");
    }
  };

  return (
    <div
      className={`${bgClass} h-dvh flex justify-center items-center px-6 py-5 md:p-12 select-none`}
    >
      <div className="bg-[#000000d9] w-[100%] h-[100%] rounded-2xl max-w-[1440px] max-h-[1080px] flex flex-col">
        <NavBar />
        <div className="flex overflow-hidden flex-1 relative rounded-b-2xl">
          <SideBar display={display}></SideBar>
          <div className="relative overflow-auto flex flex-1 flex-col justify-between w-[75%] h-[100%]">
            <div
              className="border border-[#ffffff0d] rounded-xl bg-[#ffffff1a] backdrop-blur-3xl cursor-pointer w-[40px] h-[40px] p-[10px] fixed flex md:hidden justify-center items-center z-50 top-[92px] right-[44px]"
              onClick={handleMenu}
            >
              <img
                src={path}
                className="w-[20px] h-[20px] opacity-65 pointer-events-none max-w-[100%] inline-block align-middle z-[2]"
              />
            </div>
            <div className="flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div className="flex justify-between items-center px-12 py-6 border-t border-[#ffffff1a] gap-12 text-xs leading-[112%] text-[#ffffff4d]">
              <div>© {new Date().getFullYear()}, All Rights Reserved</div>
              <Link
                to={"licenses"}
                className="hover:text-white transition-colors duration-300"
              >
                Licenses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
