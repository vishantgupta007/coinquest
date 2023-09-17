import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import "./Featured.css";
import { NavLink } from "react-router-dom";

const Featured = () => {
	const [data, setData] = useState(null);

	// const { img, name, id, current_price, image, price_change_percentage_24h } =
	//   data;

	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!data) return null; // To pass if there is error in url

	return (
		<div className="featured">
			<div className="container">
				{/* Left */}
				<div className="left">
					<h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
					<p>See all available assets: Crypto currencies and NFT's</p>

					<NavLink to="/coins">
						<button className="btn">See More Coins</button>
					</NavLink>
				</div>

				{/* Right */}
				<div className="right">
					{data.map((item) => (
						<div className="card">
							<div key={item.id} className="top">
								<img src={item.image} alt={item.name} />
								<div>
									<h5>{item.name}</h5>

									<p>₹ {item.current_price.toLocaleString()} </p>

									<div className="arrow">
										<span
											className={
												item.price_change_percentage_24h >= 0 ? "green" : "red"
											}
										>
											{item.price_change_percentage_24h >= 0 ? (
												<FiArrowUp />
											) : (
												<FiArrowDown />
											)}
										</span>
										<span
											className={
												item.price_change_percentage_24h >= 0 ? "green" : "red"
											}
										>
											{item.price_change_percentage_24h.toFixed(2)}%
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Featured;
