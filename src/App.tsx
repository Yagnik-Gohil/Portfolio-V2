import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { CLOSE, MENU } from "./constant";
import { useState } from "react";

function App() {
  const [path, setPath] = useState(MENU);
  const [display, setDisplay] = useState<"none" | "flex">("none");

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
    <div className="bg-home-gradient h-dvh flex justify-center items-center px-6 py-5 md:p-12">
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
                className="w-[20px] h-[20px] opacity-65 select-none pointer-events-none max-w-[100%] inline-block align-middle z-[2]"
              ></img>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
