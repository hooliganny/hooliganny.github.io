import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { Group, Object3DEventMap } from "three";

const RotatableDisc = () => {
  const logo = new THREE.TextureLoader().load("/kikwi.webp");
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const { viewport } = useThree();

  useFrame(() => {
    const scale = Math.min(viewport.width, viewport.height) * 0.3;
    if (groupRef.current) {
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Front face with texture */}
      <mesh position={[0, 0, 0.05]}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial map={logo} side={THREE.DoubleSide} />
      </mesh>

      {/* Back face */}
      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial map={logo} side={THREE.DoubleSide} />
      </mesh>

      {/* Edge to add thickness, rotated to align with the circle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32, 1, true]} />
        <meshBasicMaterial color={new THREE.Color("#00635D")} />
      </mesh>
    </group>
  );
};

const InteractiveProfilePicture = () => {
  return (
    <Canvas>
      <RotatableDisc />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default InteractiveProfilePicture;
