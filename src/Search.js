import React from 'react';

const Search = () => {
	return (
		<form className='search-bar'>
			<input type='submit' value='Submit' name='submit' />
			<input type='text' name='text' placeholder='Enter address here...' />
		</form>
	);
};

export default Search;
