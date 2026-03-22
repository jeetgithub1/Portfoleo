import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/character.glb");
  return <primitive object={scene} scale={2} />;
}

export default function Character() {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
