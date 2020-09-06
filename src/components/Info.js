import React, { useEffect } from "react";

function Info({ info }) {
	const { country, confirmed, recovered, active, deaths } = info;

	return (
		<React.Fragment>
			<div className='country'>{country}</div>
			<div className='info'>
				<div className='info-card info-confirmed'>
					<h2>{confirmed}</h2>
					<small>Confirmed</small>
				</div>
				<div className='info-card info-recovered'>
					<h2>{recovered}</h2>
					<small>Recovered</small>
				</div>
				<div className='info-card info-active'>
					<h2>{active}</h2>
					<small>Active</small>
				</div>
				<div className='info-card info-deaths'>
					<h2>{deaths}</h2>
					<small>Deaths</small>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Info;
