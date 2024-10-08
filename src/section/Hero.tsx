import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { HackerRoom } from "../components/HackerRoom";
import { Target } from "../components/Target";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {

  const isSmall = useMediaQuery( { maxWidth: 440  });
  const isMobile = useMediaQuery( { maxWidth: 768  });
  const isTablet = useMediaQuery( { minWidth: 768, maxWidth: 1024  });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am David <span className="fire-burning">🔥</span>
        </p>

        <p className="hero_tag text-gray_gradient text-center">
          Trying harder and harder
        </p>

        <div className="w-full h-full absolute inset-0">
            {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />

              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  position={sizes.deskPosition}
                  scale={sizes.deskScale}
                  rotation={[0, -Math.PI, 0]}
                />
              </HeroCamera>

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
