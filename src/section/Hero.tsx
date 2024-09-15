import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { HackerRoom } from "../components/HackerRoom";
import { Leva, useControls } from "leva";

const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        scale: {
            value: 2.5,
            min: 0,
            max: 10,
        }
    })

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generation">
          Hi, I am David <span className="fire-burning">🔥</span>
        </p>

        <p className="hero_tag text-gray_gradient text-center">
          Trying harder and harder
        </p>

        <div className="w-full h-full absolute inset-0">
            <Leva />
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HackerRoom
                position={[2, -8, 2]}
                rotation={[0, -Math.PI, 0]}
                scale={[0.1, 0.1, 0.1]}
              />


              <ambientLight intensity={1} />

              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
