import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
	return (
		<div className="navbar">
			<span className="logo">Auth Project</span>
			<ul className="list">
				<li className="listItem">
					<Link to={"/"} className="link">
						HOME
					</Link>
				</li>
				<li className="listItem">
					<Link to={"/dashboard"} className="link">
						DASHBOARD
					</Link>
				</li>
				{user ? (
					<li className="listItem">
						<Link onClick={() => setUser(null)} className="link">
							LOGOUT
						</Link>
					</li>
				) : (
					<>
						<li className="listItem">
							<Link to={"/login"} className="link">
								LOGIN
							</Link>
						</li>
						<li className="listItem">
							<Link to={"/signup"} className="link">
								SIGNUP
							</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default Navbar;
