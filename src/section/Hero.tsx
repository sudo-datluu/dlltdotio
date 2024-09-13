import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HauntedHouse from '../components/HauntedHouse'
import CanvasLoader from '../components/CanvasLoader'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generation'>Hi, I am David <span className='fire-burning'>🔥</span></p>

            <p className='hero_tag text-gray_gradient text-center'>Trying harder and harder</p>

            <div className="w-full h-full absolute inset-0">
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault position={[0.00007184, -2138.64892578, 199.88496399]}/>

                        <HauntedHouse/>

                        <ambientLight intensity={1} />

                        <directionalLight position={[10, 10, 5]} intensity={1} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Hero