import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { DDSLoader } from 'three-stdlib'
import { useBounds } from '@react-three/drei'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

const NewTheatre = () => {
  const materials = useLoader(MTLLoader, 'movie_theatre.mtl')
  const obj = useLoader(OBJLoader, 'movie_theatre.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  const api = useBounds()
  console.log(obj)
  return  <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()} scale={2}>
  <primitive object={obj} scale={1} />
</group>
}

export default NewTheatre
