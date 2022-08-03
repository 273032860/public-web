import React from 'react'
import { Canvas} from 'react-three-fiber'
import Three from './Three'
import Modle from './Model'


function Nft() {
  return (
    <>
      <div className='scale-'>
      <Canvas>    
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Three position={[0,-4,-10]}/>
        {/* <Modle position={[0,-4,-10]}/> */}
        {/* <Three position={[-1.2, 0, 0]} />
        <Three position={[1.2, 0, 0]} /> */}
      </Canvas>,
      </div>
    </>
  )
}

export default Nft