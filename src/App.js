import * as THREE from 'three/src/Three'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Presentation from './components/presentation';
import { Slideset, Slide } from './components/slide';
import SlideInfo from './components/slide_info';

const Thing = ({ vertices, color }) =>
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
	</group>;

const App = () =>
	<Presentation>
		<Canvas>
		{/* <Thing vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} /> */}
		</Canvas>
		<Slideset i={0}>
			<Slide>
				<h1> Slide 1 </h1>
			</Slide>
			<Slide>
				<h1> Slide 2 </h1>
			</Slide>
		</Slideset>
		<SlideInfo />
	</Presentation>;

export default App;
