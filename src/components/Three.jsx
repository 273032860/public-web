import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferGeometry } from 'three'
import {OrbitControls,  PerspectiveCamera } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';




function Three(props) {
  // This reference gives us direct access to the THREE.Mesh object这个参考让我们可以直接接触到THREE。 网格物体
  const ref = useRef()
  // Hold state for hovered and clicked events悬停和单击事件保持状态
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame订阅这个组件到渲染循环，每帧旋转网格
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX返回视图，这些是在JSX中表示的常规Threejs元素
  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls/> */}
      <mesh
      
        {...props}
        ref={ref}
        scale={clicked ? 12 : 10}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
      {/* <mesh className='ml-40'>
        <sphereGeometry args={[1, 32, 32]} />
        <lineBasicMaterial color="#lea3d8" /> //线的材质
      </mesh> */}
    </>
  )
}

export default Three
