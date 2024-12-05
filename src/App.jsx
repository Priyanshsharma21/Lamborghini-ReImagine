import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CarContainer from "./components/CarContainer";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="w-full h-full appMain">
      <Navbar />
      <div className="content w-full h-full">
        <Home />
        {/* <Canvas>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/spruit_sunrise_4k.exr",
            ]}
          />
          <ScrollControls pages={3}>
            <CarContainer />
          </ScrollControls>
        </Canvas> */}
      </div>
    </div>
  );
};

export default App;
