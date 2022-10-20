import React from "react";

const Dashboard = ({ user }) => {
	return (
		<div className="dashboard">
			<div className="dashboardWrapper">
				<div className="dashboardTop">
					<div className="dashboardLeftContainer">
						<img
							src={
								user.profilePic != ""
									? user.profilePic
									: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
							}
							alt="profile-img"
							className="dashboardImg"
						/>
					</div>
					<div className="dashboardRightContainer">
						<span className="dashboardWelcomeMessage">
							Welcome Back, {user.firstName} {user.lastName}
						</span>
						<span className="dashboardEmail">{user.email}</span>
					</div>
				</div>
				<div className="dashboardBottom">
					This is your profile insights📈 <br />
					<span>See more</span>↗️ about how the business💲 is going on.
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
