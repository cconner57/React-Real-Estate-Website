import React, { useState, useEffect } from 'react';
import Search from './Search';
import House from './House';

function App() {
	const [property, setProperty] = useState({
		properties: [],
		loading: false
	});

	useEffect(property => {
		setProperty({ ...property, loading: true });

		fetch(
			'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz17aul58b763_9hc6e'
		)
			.then(res => res.json())
			.then(res => setProperty({ properties: res, loading: false }));
	}, []);

	return (
		<div className='App'>
			<header>
				<h1>Premium Property Finder</h1>
				<p>Bringing premium property right to your finger tips</p>
			</header>
			<Search />
			<House loading={property.loading} properties={property.properties} />
		</div>
	);
}

export default App;
