import React from "react";

const Login = () => {
	const google = () => {
		window.location.replace("http://localhost:5000/google/");
	};
	const facebook = () => {
		window.location.replace("http://localhost:5000/facebook/");
	};
	return (
		<div className="login">
			<h1 className="loginTitle">Choose a Login Method</h1>
			<div className="loginWrapper">
				<div className="loginLeft">
					<div className="loginButton google" onClick={google}>
						<i className="fa-brands fa-google icon"></i> Google
					</div>
					<div className="loginButton facebook" onClick={facebook}>
						<i className="fa-brands fa-facebook-f icon"></i> Facebook
					</div>
				</div>
				<div className="loginCenter">
					<div className="line" />
					<div className="or">OR</div>
				</div>
				<div className="loginRight">
					<input type="email" placeholder="Enter your Email" />
					<input type="password" placeholder="Enter your Password" />
					<button className="submit">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
