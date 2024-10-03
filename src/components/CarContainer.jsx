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

    // Limit the rotation based on scroll
    let limitedScrollY = Math.min(scrollOffset / 0.3, 1); // Clamps to max 1 for Y rotation
    let limitedScrollZ = Math.min((scrollOffset - 0.3) / 0.3, 1); // Z rotation between 0.3 and 0.6
    let limitedScrollX = Math.min((scrollOffset - 0.8) / 1, 1); // X rotation between 0.8 and 1

    if (meshes.Sketchfab_Scene) {
      // Rotate Y from 0 to 1.5 for scroll 0 to 0.3
      if (scrollOffset <= 0.3) {
        meshes.Sketchfab_Scene.rotation.y = limitedScrollY * 1.5;
      }
      // Rotate Z from 0 to 1.5 for scroll 0.3 to 0.6
      else if (scrollOffset <= 0.6) {
        meshes.Sketchfab_Scene.rotation.z = limitedScrollZ * 1.5;
        meshes.Sketchfab_Scene.position.y = limitedScrollZ * 0.5;
      }
      // Rotate X from 0 to 10 for scroll 0.8 to 1
      else if (scrollOffset >= 0.8) {
        meshes.Sketchfab_Scene.position.x = limitedScrollX * 60; // Final X rotation after 0.8
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
