import React, { useState } from "react";

const Search = ({ searchInfo }) => {
	const [country, setCountry] = useState("");

	const onSubmitBtnClicked = (e) => {
		e.preventDefault();
		searchInfo(country);
	};

	const onInput = (e) => {
		let val = e.target.value.split(" ");
		val.forEach((w, index) => (val[index] = sentenceCase(w)));
		e.target.value = val.join(" ");

		setCountry(val.join(" "));
	};

	const sentenceCase = (e) => {
		return e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase();
	};

	return (
		<div className='search-container'>
			<form onSubmit={onSubmitBtnClicked}>
				<button type='submit' className='submit'>
					<i className='fas fa-search'></i>
				</button>
				<input
					type='text'
					placeholder='Search country here...'
					onChange={onInput}
					spellCheck='false'
				/>
			</form>
		</div>
	);
};

export default Search;
