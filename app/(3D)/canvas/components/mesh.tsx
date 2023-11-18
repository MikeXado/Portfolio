"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
export default function Box() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}
