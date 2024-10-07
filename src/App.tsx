import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-home-gradient h-dvh flex justify-center items-center">
      <div className="bg-[#000000d9] h-[90%] w-[90%] rounded-2xl 2xl:w-[75%] flex flex-col">
        <NavBar />
        <div className="flex overflow-hidden flex-1">
          <SideBar></SideBar>
          <div className="w-[75%]">
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
