import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [activeSlide, setActiveSlide] = useState(false);

	const handleClick = () => {
		setActiveSlide(!activeSlide);
	};

	const menuClassName = activeSlide ? "nav-menu active" : "nav-menu";

	return (
		<div className="header">
			<div className="container">
				<h2>
					Coin<span className="primary">Quest</span>
				</h2>
				<ul className={menuClassName}>
					<NavLink to="/">
						<li>
							<a href="/"> Home</a>
						</li>
					</NavLink>
					<li>
						<NavLink to="/coins">
							<a href="/"> Featured</a>
						</NavLink>
					</li>
					<NavLink to="/about">
						<li>
							<a href="/"> About</a>
						</li>
					</NavLink>
					<li>
						<a href="/">Contact </a>
					</li>
				</ul>

				<div className="btn-group">
					<button className="btn nav-btn">Connect Wallet</button>
				</div>
				<div className="hamburger" onClick={handleClick}>
					{activeSlide ? (
						<FaTimes size={20} style={{ color: "#333" }} />
					) : (
						<FaBars size={20} style={{ color: "#333" }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
