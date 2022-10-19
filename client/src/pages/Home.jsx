import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home">
				<div className="homeWrapper">
					<h1 className="homepageTitle">
						Welcome the the Auth System🔐 project.
					</h1>
					<h3 className="homepageMessage">
						Get into the <span>Dashboard</span> to have a 👁️glance👁️ at the
						insights.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
