import React, { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Search from "./components/Search";
import axios from "axios";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
	const [state, setState] = useState({
		country: "",
		confirmed: "",
		recovered: "",
		active: "",
		deaths: "",
	});

	const [error, setError] = useState(false);

	const [loading, setLoading] = useState(false);

	const getInfo = async (country) => {
		setLoading(true);

		setState({ country });

		await axios
			.get(`https://api.covid19api.com/total/dayone/country/${country}`)
			.then((res) => {
				let data = res.data;
				data = data[data.length - 1];

				const { Country, Confirmed, Recovered, Active, Deaths } = data;

				setState({
					country: Country,
					confirmed: Confirmed,
					recovered: Recovered,
					active: Active,
					deaths: Deaths,
				});

				setError(false);
				setLoading(false);
			})
			.catch((err) => setError(true));
	};

	const searchInfo = (country) => {
		country = country.toLowerCase().split(" ").join("-");
		getInfo(country);
	};

	return (
		<div className='App'>
			<Header />
			<Search searchInfo={searchInfo} />
			{state.country === "" ? (
				""
			) : error ? (
				<Error />
			) : loading ? (
				<Loading />
			) : (
				<Info info={state} />
			)}
		</div>
	);
}

export default App;
