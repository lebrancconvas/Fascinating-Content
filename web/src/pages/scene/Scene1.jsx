import React from 'react';
import {Stage, Sprite} from '@inlet/react-pixi';

const Scene1 = () => {
	return (
		<div>
			<Stage>
				<Sprite image="../../assets/sprites/Warrior.png" x={100} y={100} />
			</Stage>
		</div>
	)
}

export default Scene1;