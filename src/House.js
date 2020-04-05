import React from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const House = ({ loading, properties }) => {
	if (loading) {
		return <Spinner />;
	} else {
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
	}
};

House.PropTypes = {
	properties: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

export default House;
