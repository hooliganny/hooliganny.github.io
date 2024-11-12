import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Home = () => {
  const logo = new THREE.TextureLoader().load("/kikwi.webp");

  return (
    <Canvas>
      <mesh>
        <circleGeometry />
        <meshBasicMaterial map={logo} side={THREE.DoubleSide} />
      </mesh>
      <OrbitControls
        enableZoom={false}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={0}
        // maxAzimuthAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 2}
        // maybe make the angles limited, we will see
      />
      {/* <gridHelper /> */}
    </Canvas>
  );
};

export default Home;
