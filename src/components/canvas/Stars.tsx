import { random } from 'maath'
import { Suspense, useRef } from 'react'

import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

const Stars = (props: any) => {
  const ref = useRef()
  const spheres = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spheres} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.005}
          color='#f272c8'
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
export default StarsCanvas
