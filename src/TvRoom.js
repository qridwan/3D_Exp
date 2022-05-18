import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import HeroPage from './HeroPage'
export default function TvModel({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tvRoom.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[6.6, -3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
        <group rotation={[-1.73, 91.76, -1.4]}>
          <group position={[-82.6, 278.11, 1137.73]} rotation={[0, -0.29, 0]}>
            <mesh geometry={nodes.screen_1_base_0.geometry} material={materials.base} />
          </group>
          <group position={[-985.9, 384.74, -121.91]} rotation={[Math.PI, 0, -Math.PI]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[-985.9, 384.74, 849.1]} rotation={[Math.PI, 0, -Math.PI]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_2_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_2_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[-985.9, 384.74, -859.07]} rotation={[Math.PI, 0, -Math.PI]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_3_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_3_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[986.32, 384.74, 840.41]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_4_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_4_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[986.32, 384.74, -867.76]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_5_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_5_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[986.32, 384.74, 103.26]}>
            <group position={[-6.1, 0, -11.44]}>
              <mesh geometry={nodes.Ebene_6_lampe_0.geometry} material={materials.lampe} />
            </group>
            <group position={[12.48, 0, 9.53]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.Ebene_1_6_lampe_0.geometry} material={materials.lampe} />
            </group>
          </group>
          <group position={[47.97, 133.26, 19.84]} rotation={[0, -0.99, 0]}>
            <group position={[57.82, -53.68, -32.04]}>
              <group position={[-0.03, -11.89, 0.09]} rotation={[Math.PI, 1.2, Math.PI]}>
                <mesh geometry={nodes['Deckfl��che_1_flaschenglas_0'].geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_flaschenglas_0.geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_flaschenglas_0_1.geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_flaschenglas_0_2.geometry} material={materials.flaschenglas} />
              </group>
              <mesh geometry={nodes.gbinglas_1_Mat_1.geometry} material={materials.material} />
            </group>
            <group position={[-8.82, -53.68, 61.77]}>
              <group position={[-0.03, -11.89, 0.09]} rotation={[Math.PI, 0.8, Math.PI]}>
                <mesh geometry={nodes['Deckfl��che_1_2_flaschenglas_0'].geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_2_flaschenglas_0.geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_2_flaschenglas_0_1.geometry} material={materials.flaschenglas} />
                <mesh geometry={nodes.glas_2_flaschenglas_0_2.geometry} material={materials.flaschenglas} />
              </group>
              <mesh geometry={nodes.gbinglas_Mat_1.geometry} material={materials.material} />
            </group>
            <group position={[30.47, -8.95, 17.5]} rotation={[0, 0.2, 0]}>
              <mesh geometry={nodes.Lathe_1_flaschenglas_0.geometry} material={materials.flaschenglas} />
              <mesh geometry={nodes.Lathe_Mat2_0.geometry} material={materials['Mat.2']} />
            </group>
            <group position={[30.47, 67.71, 17.5]}>
              <mesh geometry={nodes.Lathe_2_cork_0.geometry} material={materials.cork} />
            </group>
            <group position={[30.61, -30.52, -10.74]} rotation={[Math.PI, -0.54, -Math.PI]}>
              <mesh geometry={nodes.label_2_label_0.geometry} material={materials.label} />
            </group>
          </group>
          <group position={[-81.97, 130.73, 1089.38]}>
            <group position={[0, 0.4, 17.7]}>
              <group position={[0, 152.77, 0]}>
                <mesh geometry={nodes['Deckfl��che_1_3_base_0'].geometry} material={materials.base} />
              </group>
              <mesh geometry={nodes['Deckfl��che_2_base_0'].geometry} material={materials.base} />
              <mesh geometry={nodes.Loft_base_0.geometry} material={materials.base} />
            </group>
            <group position={[0, 2.68, -4.77]}>
              <mesh geometry={nodes.top_base_0.geometry} material={materials.base} />
            </group>
            <group position={[0, -126.49, -4.77]}>
              <mesh geometry={nodes.base_glow_0.geometry} material={materials.glow} />
            </group>
            <group position={[0, -60.74, -4.77]}>
              <mesh geometry={nodes.cube_cube_0.geometry} material={materials.cube} />
            </group>
          </group>
          <group position={[-82.23, 278.11, 1136.51]} rotation={[0, -0.29, 0]}>
            <group position={[0, -110.61, 0]}>
              <mesh geometry={nodes.frametv_2_base_0.geometry} material={materials.base} />
            </group>

            <mesh geometry={nodes.screen_screen_0.geometry}>
              <Html className="content-tv" rotation-y={179.5} position={[20, 56, 0]} transform scale={17} occlude>
                <div className="wrapper-tv">
                  <HeroPage />
                </div>
              </Html>
            </mesh>
          </group>
          <group position={[0, 493.23, 0]}>
            <mesh geometry={nodes.bodenroom_1_decke_0.geometry} material={materials.decke} />
          </group>
          <group position={[0, -0.5, 0]}>
            <mesh geometry={nodes.bodenroom_bodenroom_0.geometry} material={materials.bodenroom} />
          </group>
          <group position={[290.09, 51.7, 267.87]} rotation={[0, -0.96, 0]}>
            <group position={[-476.69, 0, 645.37]} rotation={[Math.PI, 1.53, -Math.PI]}>
              <group position={[4.67, 106.94, -248.01]}>
                <mesh geometry={nodes.Zylinder_Mat1_0.geometry} material={materials['Mat.1']} />
              </group>
              <group position={[34.63, 106.16, -284.66]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh geometry={nodes['Deckfl��che_1_6_logo_0'].geometry} material={materials.logo} />
              </group>
              <group position={[0.09, -53.47, 57.38]}>
                <group position={[4.86, 270.44, -137.28]} rotation={[-0.03, 0, 0]}>
                  <group position={[0, -242.68, 229.11]} rotation={[1.5, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes['Deckfl��che_1_7_Leather_01_0'].geometry} material={materials.Leather_01} />
                  </group>
                  <group position={[0, -102.72, -207.38]} rotation={[-0.02, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes['Deckfl��che_2_5_Leather_01_0'].geometry} material={materials.Leather_01} />
                  </group>
                  <mesh geometry={nodes.seat1_2_Leather_01_1.geometry} material={materials.Leather_01} />
                </group>
              </group>
              <group position={[0.09, -53.47, 57.38]}>
                <group position={[4.86, -3.16, -128.52]} rotation={[-0.03, 0, 0]}>
                  <group position={[0, 2.33, 202.76]} rotation={[2.63, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes['Deckfl��che_1_8_Mat1_0'].geometry} material={materials['Mat.1']} />
                  </group>
                  <group position={[0, 129.48, -208.37]} rotation={[2.86, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes['Deckfl��che_2_6_Mat1_0'].geometry} material={materials['Mat.1']} />
                  </group>
                  <mesh geometry={nodes.Sweep_1_2_Mat1_1.geometry} material={materials['Mat.1']} />
                </group>
              </group>
            </group>
            <group position={[116.81, 106.16, -341.1]} rotation={[Math.PI, -0.61, Math.PI]}>
              <mesh geometry={nodes['Deckfl��che_1_9_logo_0'].geometry} material={materials.logo} />
            </group>
            <group position={[114.3, 106.94, -295.52]} rotation={[0, 0.6, 0]}>
              <mesh geometry={nodes.Zylinder_1_Mat1_0.geometry} material={materials['Mat.1']} />
            </group>
            <group position={[-0.9, -53.47, 57.6]}>
              <group position={[208.31, 270.44, -212.35]} rotation={[-0.04, 0.6, 0.02]}>
                <group position={[0, -242.68, 229.11]} rotation={[1.5, 0, -Math.PI / 2]}>
                  <mesh geometry={nodes['Deckfl��che_1_4_Leather_01_0'].geometry} material={materials.Leather_01} />
                </group>
                <group position={[0, -102.72, -207.38]} rotation={[-0.02, 0, -Math.PI / 2]}>
                  <mesh geometry={nodes['Deckfl��che_2_2_Leather_01_0'].geometry} material={materials.Leather_01} />
                </group>
                <mesh geometry={nodes.seat1_Leather_01_1.geometry} material={materials.Leather_01} />
              </group>
            </group>
            <group position={[-0.9, -53.47, 57.6]}>
              <group position={[213.26, -3.16, -205.12]} rotation={[-0.04, 0.6, 0.02]}>
                <group position={[0, 2.33, 202.76]} rotation={[2.63, 0, -Math.PI / 2]}>
                  <mesh geometry={nodes['Deckfl��che_1_5_Mat1_0'].geometry} material={materials['Mat.1']} />
                </group>
                <group position={[0, 129.48, -208.37]} rotation={[2.86, 0, -Math.PI / 2]}>
                  <mesh geometry={nodes['Deckfl��che_2_3_Mat1_0'].geometry} material={materials['Mat.1']} />
                </group>
                <mesh geometry={nodes.Sweep_1_Mat1_1.geometry} material={materials['Mat.1']} />
              </group>
            </group>
          </group>
          <group position={[0, 247.23, 0]}>
            <mesh geometry={nodes.raum_wall1_0.geometry} material={materials.wall1} />
          </group>
          <group position={[0, 0, 33.74]}>
            <mesh geometry={nodes.teppich_Mat1_0.geometry} material={materials['Mat.1_0']} />
          </group>
          <group position={[0, -14.25, 39.43]}>
            <group position={[0, 74.25, 0]}>
              <mesh geometry={nodes['W��rfel_holz_1'].geometry} material={materials.holz} />
            </group>
            <mesh geometry={nodes['W��rfel_2_glass_0'].geometry} material={materials.glass} />
          </group>
          <group position={[-18.45, 88.57, -247.87]}>
            <group position={[218.83, 29.52, -4.27]} rotation={[1.42, 0, Math.PI]}>
              <mesh geometry={nodes.kissen_1_Leather_01_1.geometry} material={materials.Leather_01_0} />
            </group>
            <group position={[-181.17, 29.52, -4.27]} rotation={[1.42, 0, Math.PI]}>
              <mesh geometry={nodes.kissen_1_2_Leather_01_1.geometry} material={materials.Leather_01_0} />
            </group>
            <group position={[18.83, 29.52, -4.27]} rotation={[1.42, 0, Math.PI]}>
              <mesh geometry={nodes.kissen_1_3_Leather_01_1.geometry} material={materials.Leather_01_0} />
            </group>
            <group position={[-56.49, -88.57, 12.8]}>
              <group position={[74.58, 0, 0]}>
                <group position={[150, 95.28, 3.81]}>
                  <mesh geometry={nodes.korpus_1_Leather_03_1.geometry} material={materials.Leather_03} />
                </group>
              </group>
              <group position={[-224.46, 0, 0]}>
                <group position={[150, 95.28, 3.81]}>
                  <mesh geometry={nodes.korpus_1_2_Leather_03_1.geometry} material={materials.Leather_03} />
                </group>
              </group>
              <group position={[74.94, 0, 0]}>
                <group position={[0, 55, 0]}>
                  <group position={[320, 0, -10.03]}>
                    <mesh geometry={nodes.armlehne_Leather_03_1.geometry} material={materials.Leather_03} />
                  </group>
                </group>
              </group>
              <group position={[74.94, 0, 0]}>
                <group position={[0, 65, 0]}>
                  <mesh geometry={nodes.korpus_Leather_03_1.geometry} material={materials.Leather_03} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tvRoom.gltf')
