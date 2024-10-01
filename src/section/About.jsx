import React, { useRef, useEffect, useState } from "react";
import Button from "../components/Button";
import createGlobe from "cobe";
import Globe from "react-globe.gl";

const About = () => {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.07, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney, New South Wales
        { location: [-37.8136, 144.9631], size: 0.07 }, // Melbourne, Victoria
        { location: [-27.4698, 153.0251], size: 0.07 }, // Brisbane, Queensland
        { location: [-31.9505, 115.8605], size: 0.07 }, // Perth, Western Australia
        { location: [-34.9285, 138.6007], size: 0.07 }, // Adelaide, South Australia
        { location: [-42.8821, 147.3272], size: 0.07 }, // Hobart, Tasmania
        { location: [-12.4634, 130.8456], size: 0.07 }, // Darwin, Northern Territory
        { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
        { location: [21.0285, 105.8542], size: 0.07 }, // Hanoi, Vietnam
        { location: [10.8231, 106.6297], size: 0.07 }, // Ho Chi Minh City, Vietnam
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi -= 0.007;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('david.lltd.contact@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt=""
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m David Luu</p>
              <p className="grid-subtext">
                With 4+ years of experience, I have honed my skills in data
                engineering and web development, creating robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                and I am always looking to learn more.
              </p>
            </div>
          </div>
        </div>

        {/* Global */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <canvas
                width="326px"
                height="326px"
                ref={canvasRef}
                style={{
                  width: 326,
                  height: 326,
                  maxWidth: "100%",
                  aspectRatio: 1.5,
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Time zone flexibility
              </p>
              <p className="grid-subtext">
                I was born in Vietnam, and currently based in Sydney, Australia.
                <br />
                <br />
                I'm open to remote work worldwide but preferably in APAC region.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        
        {/* Coding passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                "Never stop learning and always try harder to be better" is my motto.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact copy */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                    david.lltd.contact@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;