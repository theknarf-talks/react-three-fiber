import * as THREE from 'three/src/Three'
import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import Presentation from './components/presentation';
import { Slideset, Slide } from './components/slide';
import SlideInfo from './components/slide_info';
import Stamp from './components/2s_stamp';
import Location from './components/location';

const Thing = ({ vertices, color }) => {
	const [ materialColor, setMaterialColor ] = useState('peachpuff');

	return <group>
		<line>
			<geometry
				attach="geometry"
				vertices={vertices.map(v => new THREE.Vector3(...v))}
				onUpdate={self => (self.verticesNeedUpdate = true)}
				/>
			<lineBasicMaterial attach="material" color="black" />
		</line>
		<mesh
			onClick={() => setMaterialColor('peachpuff')}
			onPointerOver={() => setMaterialColor('grey')}
			onPointerOut={() => setMaterialColor('peachpuff')}>
			<octahedronGeometry attach="geometry" />
			<meshBasicMaterial attach="material" color={materialColor} opacity={0.5} transparent />
		</mesh>
	</group>;
};

const Link = ({ href }) =>
	<a href={href}>{ href }</a>;

const App = () =>
	<Presentation>
		<Stamp />
		<Canvas>
			<Thing vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} />
		</Canvas>
		<Slideset i={0}>
			<Slide>
				<h1> React Three Fiber </h1>
				<h2>
					<span role="img" aria-label="lightning">⚡</span>-talk by Frank Lyder Bredland
				</h2>
			</Slide>
			<Slide>
				<h1> Links </h1>
				<p> This talk: <Location asLink={true} /> </p>
				<p> GitHub: <Link href="https://github.com/theknarf-talks/react-three-fiber" /> </p>
				<p> React-three-fiber: <Link href="https://github.com/drcmda/react-three-fiber" /> </p>
			</Slide>
			<Slide>
				<h1> Examples </h1>
				<p><Link href="https://codesandbox.io/embed/m7q0r29nn9" /></p>
				<p><Link href="https://codesandbox.io/embed/jz9l97qn89" /></p>
				<p><Link href="https://codesandbox.io/embed/kky7yk087v" /></p>
				<p><Link href="https://codesandbox.io/embed/ly0oxkp899" /></p>
			</Slide>
		</Slideset>
		<Slideset i={1}>
			<Slide>
				<h1> Code </h1>
			</Slide>
		</Slideset>
		<footer>
			<Location />
			<SlideInfo />
		</footer>
	</Presentation>;

export default App;
