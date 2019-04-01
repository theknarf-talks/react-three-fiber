import * as THREE from 'three/src/Three'
import React from 'react'
import { Canvas } from 'react-three-fiber'

function Thing({ vertices, color }) {
	return (
		<group ref={ref => console.log('we have access to the instance')}>
			<line>
				<geometry
					name="geometry"
					vertices={vertices.map(v => new THREE.Vector3(...v))}
					onUpdate={self => (self.verticesNeedUpdate = true)}
					/>
				<lineBasicMaterial name="material" color="black" />
			</line>
			<mesh
				onClick={e => console.log('click')}
				onHover={e => console.log('hover')}
				onUnhover={e => console.log('unhover')}>
				<octahedronGeometry name="geometry" />
				<meshBasicMaterial name="material" color="peachpuff" opacity={0.5} transparent />
			</mesh>
		</group>
	)
}

const App = () =>
	<Canvas>
		<Thing vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} />
	</Canvas>;

export default App;
