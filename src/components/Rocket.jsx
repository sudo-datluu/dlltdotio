import React from "react";
import { useGLTF } from "@react-three/drei";

const Rocket = (props) => {
    const { nodes } = useGLTF('/models/rocket.glb');
  return (
    <group {... props} rotation={[-Math.PI / 2, 0, 0]} scale={0.7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/rocket.glb');
export default Rocket;
