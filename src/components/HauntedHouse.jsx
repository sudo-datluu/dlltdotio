/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ConradJustin (https://sketchfab.com/ConradJustin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/haunted-house-halloween-e095f01020074750b34e2cceaed77229
Title: Haunted House (Halloween)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const HauntedHouse = (props) => {
  const { nodes, materials } = useGLTF('/models/haunted_house.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.00007184, -2138.64892578, 199.88496399]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.00689193}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_house_0.geometry}
              material={materials.house}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_house_0_1.geometry}
              material={materials.house}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_lights_0.geometry}
            material={materials.lights}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_rocko_merged_0.geometry}
            material={materials.rocko_merged}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models/haunted_house.glb')
export default HauntedHouse
