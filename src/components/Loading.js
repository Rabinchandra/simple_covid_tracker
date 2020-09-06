import React from "react";
import loading from "../gif/loading.gif";

function Loading() {
	return (
		<div className='loading'>
			<img src={loading} />
		</div>
	);
}

export default Loading;
