import React, { useRef,useState, Suspense, useEffect } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import './Color2'
import { useControls } from 'leva'
import { OrbitControls,PerspectiveCamera } from '@react-three/drei'
import video2end from '../imgs/video2end.jpeg'


function Flower() {
   //创建视频
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/video02.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  )

  // const texture = useLoader(THREE.TextureLoader, video1first) //导入图片
  
  const materialProps = useControls({
    uBig: { value: 0.2, min: 0, max: 1, step: 0.1 },
    utime: { value: 0.2, min: 0, max: 1, step: 0.1 },
    uBigx: { value: 4.0, min: 0, max: 10, step: 0.1 },
    uBigy: { value: 1.5, min: 0, max: 10, step: 0.1 },
    uspeed: { value: 0.1, min: 0.1, max: 4, step: 0.1 },
    ucoloroffset: { value: 0.08, min: 0, max: 4, step: 0.01 },
    ucolorM: { value: 5, min: 0, max: 10, step: 0.001 },
    color: '#186691',
    ucolor: '#9bd8ff',
  })
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()
  const mesh = useRef()

  useFrame((state, delta) => {
    console.log(mesh.current)
    //时间递增
    const a = state.clock.getElapsedTime()
    //4秒视频
    if (a < 4) {
      mesh.current.material = ref2.current
    }
    //后4秒shader
    if (a > 4) {
      mesh.current.material = ref.current
      ref.current.utime += 0.04
      ref.current.uspeed = a - 4
    }
    //时间归0
    if (a > 8) {
      state.clock.elapsedTime = 0
    }
  })
  //播放视频
  useEffect(() => void video.play(), [video])

 
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0,0,-700] }/>
      <ambientLight intensity={3.5} />
      <OrbitControls />
      <points ref={mesh} rotation={[Math.PI / 0.5, 0, 0]}>
        <planeBufferGeometry args={[480 / 2, 820 / 2, 480, 820]} ref={ref1} />
        {/* 视频材质 */}
        <meshBasicMaterial ref={ref2} toneMapped={false}>
          <videoTexture
            attach="map"
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
        {/* shader材质 */}
        <colorShiftMaterial
          ref={ref}
          {...materialProps}
          toneMapped={false}></colorShiftMaterial>
      </points>
      {/* <leva hidden/> */}
    </Suspense>
  )
}

export default Flower
