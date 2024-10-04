import { Center, useGLTF, useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useAnimeContext } from "../context/AnimeContext";

const CarContainer = () => {
  const { content, setContent } = useAnimeContext();
  const carRef = useRef();
  const data = useScroll(); // This will give us scroll progress (0 to 1)
  const model = useGLTF("./car.glb");

  let meshes = {};
  model.scene.traverse((e) => {
    if (e instanceof THREE.Mesh || e instanceof THREE.Group) {
      meshes[e.name] = e;
    }
  });

  useFrame(() => {
    const scrollOffset = data.offset;

    let limitedScrollY = Math.min(scrollOffset / 0.3, 1);
    let limitedScrollZ = Math.min((scrollOffset - 0.3) / 0.3, 1);
    let limitedScrollX = Math.min((scrollOffset - 0.8) / 1, 1);
    if (meshes.Sketchfab_Scene) {
      if (scrollOffset <= 0.3) {
        meshes.Sketchfab_Scene.rotation.y = limitedScrollY * 1.5;
      } else if (scrollOffset <= 0.6) {
        meshes.Sketchfab_Scene.rotation.z = limitedScrollZ * 1.5;
        meshes.Sketchfab_Scene.position.y = limitedScrollZ * 0.5;
      } else if (scrollOffset >= 0.8) {
        meshes.Sketchfab_Scene.position.x = limitedScrollX * 60;
      }
    }

    // Update content visibility based on scroll position
    setContent((prevContent) => ({
      title: {
        ...prevContent.title,
        show: scrollOffset >= 0 && scrollOffset <= 0.3,
      },
      subtitle: {
        ...prevContent.subtitle,
        show: scrollOffset >= 0.3 && scrollOffset <= 0.6,
      },
      bigTitle: {
        ...prevContent.bigTitle,
        show: scrollOffset >= 0.6 && scrollOffset <= 1,
      },
    }));
  });

  useEffect(() => {
    const carMesh = carRef.current;

    // Set the initial position and scale for the reveal animation
    carMesh.scale.set(1, 1, 1);
    carMesh.position.set(0, 0, 1.1);

    // GSAP animation for reveal effect
    gsap
      .timeline()
      .fromTo(
        carMesh.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        carMesh.position,
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 1.2, duration: 1, ease: "power2.out" },
        "<"
      );
  }, []);

  return (
    <Center>
      <group ref={carRef}>
        <primitive object={model.scene} />
      </group>
    </Center>
  );
};

export default CarContainer;
