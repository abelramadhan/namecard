"use client";

import { PropsWithChildren } from "react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-gray-100 overflow-hidden flex justify-center items-center">
      <div className="h-[800px] w-full">
        <Canvas camera={{ position: [-5, 0, -15], fov: 30 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              {props.children}
            </group>
            <Environment preset="studio" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    </div>
  );
}
