import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// import chui2 from '../mu.glb'
import { useFrame } from '@react-three/fiber'
import {OrbitControls,  PerspectiveCamera } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const gltf = useGLTF('/mu.glb')
  useFrame(({ camera }) => {
    group.current.rotation.y += 0.01
  })
  return (
    <>
      {' '}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls />
      <group ref={group} {...props} dispose={null}>
        <primitive object={gltf.scene} scale="1.5" />
      </group>
    </>
  )
}
useGLTF.preload('/mu.glb')
export default Model
