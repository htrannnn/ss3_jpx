import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const form = (
	<div className="container align-items-center text-center mt-4">
		<div className="form-sign-in">
			<form>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
					className="mb-2"
					alt=""
					width="72"
					height="57"
				></img>
				<h3 className="text">Please sign in</h3>
				<div className="form-floating">
					<input type="email" className="form-control-lg border-primary border border-1 w-25" id="floating-email" placeholder="Email address"></input>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control-lg mt-1 border-primary border border-1 w-25"
						id="floating-password"
						placeholder="Password"
					></input>
				</div>
				<div className="mt-3 checkbox">
					<input type="checkbox" className="form-check-input me-2" />
					<label style={{ fontWeight: 400 }}>Remember me</label>
				</div>
				<button className="mt-2 btn btn-outline-primary w-25" type="submit">
					Sign in
				</button>
				<p className="mt-5 mb-3 text-muted">© 2017–2021</p>
			</form>
		</div>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(form);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
