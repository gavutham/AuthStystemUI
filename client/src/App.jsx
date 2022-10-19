import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
	const [user, setUser] = useState(null);
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar user={user} setUser={setUser} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={user ? <Navigate to={"/"} /> : <Login setUser={setUser} />}
					/>
					<Route
						path="/signup"
						element={
							user ? <Navigate to={"/"} /> : <Register setUser={setUser} />
						}
					/>
					<Route
						path="/dashboard"
						element={user ? <Dashboard /> : <Navigate to={"/login"} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
