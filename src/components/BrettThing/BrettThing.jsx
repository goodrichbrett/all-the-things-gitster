import React from 'react';

const BrettThing = (props) => {
	return (
		<>
			<div class="card" style={{ width: '18rem' }}>
				<div class="card-body">
					<h5 class="card-title">{props.thing.name}</h5>
					<p class="card-text">{props.thing.attribute}</p>
					<a href="/" class="btn btn-primary">
						Go Back
					</a>
				</div>
			</div>
		</>
	);
};

export default BrettThing;
