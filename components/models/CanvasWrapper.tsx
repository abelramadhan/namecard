"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { PropsWithChildren, Suspense } from "react";

const CanvasWrapper = (props: PropsWithChildren) => {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 30 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          {props.children}
        </group>
        <Environment preset="studio" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default CanvasWrapper;
