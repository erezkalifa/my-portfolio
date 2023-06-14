import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Logo3D = ({ modelPath }) => {
  const groupRef = useRef();

  const { nodes } = useLoader(GLTFLoader, modelPath);

  return (
    <group ref={groupRef}>
      <mesh geometry={nodes.mesh.geometry} material={nodes.mesh.material} />
    </group>
  );
};

export default Logo3D;
