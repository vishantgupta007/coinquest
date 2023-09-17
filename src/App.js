import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Coin from "./pages/Coins/Coin";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Notfound from "./pages/Notfound/Notfound";
// import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="coins" element={<Coin />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
			<Footer />/
			{/* <ScrollToTop /> */}
		</BrowserRouter>
	);
};

export default App;
