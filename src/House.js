import React from 'react';

const House = ({ loading, properties }) => {
	return (
		<div className='listings'>
			{properties.map((home, key) => (
				<div className='house' key={key}>
					<img src='' alt='' />
					<h3>{home.title}</h3>
					<h3>{home.price}</h3>
					<h5>{home.address}</h5>
					<h5>{home.description}</h5>
					<input type='button' value='Go To Property' />
				</div>
			))}
		</div>
	);
};

export default House;
