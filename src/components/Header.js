import React from "react";
import virus from "../virus.svg";

function Header() {
	return (
		<div className='header'>
			<img src={virus} />
			<span className='header-text'>Covid-19 Tracker</span>
		</div>
	);
}

export default Header;
