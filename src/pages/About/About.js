import React from "react";
import "./About.css";
import Team from "../../components/Team";
import { NavLink } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className="about">
				<div className="right-side">
					<div className="desc">
						<h3>ABOUT US</h3>
						<h1>
							We Offer Best <span> Crypto Solutions </span>For Your Profit
						</h1>
						<p>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even.
						</p>
					</div>
					<ul className="points">
						<li>Take a look at our round up of the best shows</li>
						<li>The app provides real-time updates on cryptocurrency prices</li>
						<li>To keep users informed about the cryptocurrency market.</li>
					</ul>
					<NavLink to="/coins">
						<button className="btn">Discover More</button>
					</NavLink>
				</div>
				<div className="img-container">
					<img src="https://live.themewild.com/cryptox/assets/img/about/01.png"  alt=""/>
				</div>
			</div>
			<Team />
		</>
	);
};

export default About;
