/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 hacker-room-new.glb -T 
Files: hacker-room-new.glb [34.62MB] > /Users/hsuwinlat/Desktop/jsm pj/threejscc-portfolio/public/models/hacker-room-new-transformed.glb [2.56MB] (93%)
*/


import { useGLTF, useTexture } from '@react-three/drei';

export const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        {/* <meshMatcapMaterial map={screenTxt} /> */}
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />

      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer_computer_mat_0.geometry}
        material={materials.computer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.server_server_mat_0.geometry}
        material={materials.server_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_stand_mat_0.geometry}
        material={materials.stand_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_mat_mat_mat_0.geometry}
        material={materials.mat_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm_arm_mat_0.geometry}
        material={materials.arm_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_tv_mat_0.geometry}
        material={materials.tv_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0.geometry}
        material={materials.table_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cables_cables_mat_0.geometry}
        material={materials.cables_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.props_props_mat_0.geometry}
        material={materials.props_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_ground_mat_0.geometry}
        material={materials.ground_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.peripherals_key_mat_0.geometry}
        material={materials.key_mat}
      /> */}
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');