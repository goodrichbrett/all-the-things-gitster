import React from 'react';
import BrettThing from '../../components/BrettThing/BrettThing';

const BrettsThings = (props) => {
	return (
		<>
			<h1>Brett's Things</h1>
			{props.brettsThings.map((thing, idx) => (
				<BrettThing key={idx} thing={thing} />
			))}
		</>
	);
};

export default BrettsThings;
