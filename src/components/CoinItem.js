import React from "react";
import "./CoinItem.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const CoinItem = ({
	name,
	price,
	symbol,
	marketcap,
	volume,
	image,
	priceChange,
}) => {
	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{symbol}</p>
				</div>

				<div className="coin-data">
					<p className="coin-price">₹{price.toFixed(2)}</p>
					<p className="coin-volume">₹{volume.toLocaleString()}</p>
					{priceChange < 0 ? (
						<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
					) : (
						<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
					)}
					<span className={priceChange >= 0 ? "green" : "red"}>
						{priceChange >= 0 ? <FiArrowUp /> : <FiArrowDown />}
					</span>
					&nbsp;
					<p className="coin-marketcap">
						Mkt Cap: &nbsp; ₹{marketcap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CoinItem;
