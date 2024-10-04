import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import CarContainer from "./components/CarContainer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <Canvas>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/spruit_sunrise_4k.exr",
          ]}
        />
        <ScrollControls pages={4}>
          {" "}
          <CarContainer />
        </ScrollControls>
      </Canvas>

      <div className="w-full h-screen bg-black"></div>
    </div>
  );
};

export default App;
