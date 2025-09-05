import React from "react";


import Cards from "./cards.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";


const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<main className="flex-grow-1">
				<div className="container my-4">
					<Jumbotron />
					<Cards />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;