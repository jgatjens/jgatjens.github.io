"use client";

import { Canvas } from "@react-three/fiber";

export const Clouds = () => (
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[1, 2, 5]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
);
