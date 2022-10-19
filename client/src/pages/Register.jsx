import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
	const [file, setFile] = useState(null);

	return (
		<div className="login">
			<h1 className="loginTitle">Choose an option to Register</h1>
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
					<div className="profileInputContainer">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							}
							alt=""
							className="profileImg"
						/>
						<label htmlFor="file">
							<i class="fa-solid fa-plus"></i>Upload your photo
						</label>
						<input
							className="profileInput"
							type="file"
							id="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>

					<input type="text" placeholder="Enter your First Name" />
					<input type="text" placeholder="Enter your Last Name" />
					<input type="email" placeholder="Enter your Email" />
					<input type="password" placeholder="Enter your Password" />
					<button className="submit">Register</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
