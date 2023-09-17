import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Coin.css";
import CoinItem from "../../components/CoinItem";


function Coin() {
	const inputRef = useRef(null);
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		inputRef.current.focus();
		let cancelRequest = false;
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
			)
			.then((res) => {
				if (!cancelRequest) {
					// Check if the component is unmounted before updating state
					setCoins(res.data);
					console.log(res.data);
				}
			})
			.catch((error) => console.log(error));

		return () => {
			cancelRequest = true;
		};
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="coin-app">
			<div className="coin-search">
				<h1 className="coin-text">Search your Favorite Currency</h1>
				<form>
					<input
						ref={inputRef}
						className="coin-input"
						type="text"
						onChange={handleChange}
						placeholder="Search"
					/>
				</form>
			</div>
			{filteredCoins.map((coin) => {
				return (
					<CoinItem
						key={coin.id}
						name={coin.name}
						price={coin.current_price}
						symbol={coin.symbol}
						marketcap={coin.total_volume}
						volume={coin.market_cap}
						image={coin.image}
						priceChange={coin.price_change_percentage_24h}
					/>
				);
			})}
		</div>
	);
}

export default Coin;
