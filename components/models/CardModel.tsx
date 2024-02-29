"use client";

import { PropsWithChildren, ReactNode, useMemo, useRef } from "react";

import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Group, Object3DEventMap, MathUtils } from "three";
import { useMediaQuery } from "@uidotdev/usehooks";

const CARD_WIDTH_LG = 190;
const CARD_HEIGHT_LG = 130;

const CARD_WIDTH_SM = 130;
const CARD_HEIGHT_SM = 190;

const transformToScale = (
  widthPx: number,
  heightPx: number
): [number, number, number] => {
  return [widthPx * 0.025, -0.03, heightPx * 0.025];
};

export default function CardModel(props: {
  front: ReactNode;
  back: ReactNode;
  color: string;
}) {
  const group = useRef<Group<Object3DEventMap>>(new Group());
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  // Load model
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      (-3 + Math.sin(t / 3)) / 3,
      0.02
    );
  });

  const size = useMemo(() => {
    return isSmallDevice
      ? {
          width: CARD_WIDTH_SM,
          height: CARD_HEIGHT_SM,
        }
      : {
          width: CARD_WIDTH_LG,
          height: CARD_HEIGHT_LG,
        };
  }, [isSmallDevice]);

  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <Html
              style={{
                width: size.width,
                height: size.height,
              }}
              rotation-x={-Math.PI / 2}
              transform
              occlude={"blending"}
            >
              <div
                className="wrapper w-[200%] h-[200%]"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {props.front}
              </div>
            </Html>
          </mesh>
          <mesh position={[0, -0.05, 0]} scale={[-1, 1, -1]}>
            <Html
              style={{
                width: size.width,
                height: size.height,
              }}
              rotation-x={Math.PI / 2}
              transform
              occlude={"blending"}
            >
              <div
                className="wrapper w-[200%] h-[200%]"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {props.back}
              </div>
            </Html>
          </mesh>
          <mesh
            position={[0, -0.03, 0]}
            scale={transformToScale(size.width, size.height)}
          >
            <meshBasicMaterial color={props.color} />
            <boxGeometry />
          </mesh>
        </group>
      </group>
    </group>
  );
}
