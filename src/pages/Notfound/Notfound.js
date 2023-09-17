import React from "react";
import './Notfound.css'
import { NavLink } from "react-router-dom";

const Notfound = () => {
	return (
		<>
			<div className="notFound">
				<p className="caveat"> Click the button to start earning your passive income</p>

				<NavLink to="/">
					<button className="btn"> Earn Now!</button>
				</NavLink>
			</div>
		</>
	);
};

export default Notfound;
