"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./components/mesh";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <Canvas
      shadows
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
      }}
      camera={{
        position: [-6, 7, 7],
      }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}
