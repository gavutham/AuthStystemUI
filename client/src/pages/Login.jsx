import React from "react";

const Login = () => {
	return (
		<div className="login">
			<h1 className="loginTitle">Choose a Login Method</h1>
			<div className="loginWrapper">
				<div className="loginLeft">
					<div className="loginButton google">
						<i className="fa-brands fa-google icon"></i> Google
					</div>
					<div className="loginButton facebook">
						<i class="fa-brands fa-facebook-f icon"></i> Facebook
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
