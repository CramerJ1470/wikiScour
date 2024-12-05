import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../components/login/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import "../index.css";
import { register } from "../services";
import useInput from "../hooks/useInput";
import "../assets/workshop-styles.css";

const Register = () => {
	const passwordRef = useRef();

	const navigate = useNavigate();

	const {
		value: username,
		hasError: usernameInvalid,
		valid: usernameValid,
		changeHandler: usernameChangeHandler,
		blurHandler: usernameBlurHandler,
		reset: usernameReset,
	} = useInput((u) => u.trim().length > 5);

	const {
		value: email,
		hasError: emailInvalid,
		valid: emailValid,
		changeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(
		(email) =>
			email.trim().length !== "" &&
			email.includes("@") &&
			email.includes(".")
	);

	const {
		value: password,
		hasError: passwordInvalid,
		valid: passwordValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: passwordReset,} = useInput((password) => password.trim().length > 5);

	const {
		value: password2,
		hasError: password2Invalid,
		valid: password2Valid,
		changeHandler: password2ChangeHandler,
		blurHandler: password2BlurHandler,
		reset: password2Reset,
	} = useInput((p) => p === passwordRef?.current?.value);

	const formValid =
		usernameValid & emailValid & passwordValid && password2Valid;

	const submitHandler = async (e) => {
		e.preventDefault();
		if (!formValid) {
			return;
		}
		console.log(
			`username: ` +
				username +
				`email: ` +
				email +
				`password: ` +
				password
		);
		register(username, email, password);
		navigate("/login");
	};
	return (
		<div className="wholePage sectionTop">
			<div class="container">

			
<div className ="row col3"> 
<div className="col wid33"></div>
<div className="col"></div>
			<div className="wrapper formDiv">
				<div className="inner">
					<form onSubmit={submitHandler} noValidate>
						<h2>Registration Form</h2>
						<div className="form-group">
							<p> </p>
							<div className="form-wrapper">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									id="username"
									className="form-control tealshadow"
									onChange={usernameChangeHandler}
									value={username}
									autoComplete="off"
									onBlur={usernameBlurHandler}
								/>
								{usernameInvalid && (
									<p>Invalid username input</p>
								)}
							</div>

							<div className="form-wrapper">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									className="form-control tealshadow "
									onChange={emailChangeHandler}
									value={email}
									autoComplete="off"
									onBlur={emailBlurHandler}
								/>
								{emailInvalid && <p>Invalid email input</p>}
							</div>
							<div className="form-wrapper">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control tealshadow"
									id="password"
									onChange={passwordChangeHandler}
									value={password}
									ref={passwordRef}
								/>
								{passwordInvalid && (
									<p>Invalid Password input</p>
								)}
							</div>
							<div className="form-wrapper">
								<label htmlFor="password2">
									Confirm Password
								</label>
								<input
									type="password"
									className="form-control tealshadow"
									id="password2"
									onChange={password2ChangeHandler}
									value={password2}
								/>
								{password2Invalid && (
									<p>Invalid confirmed Password</p>
								)}
							</div>
						</div>

						<button className="regBut">Register Now</button>
						<p>
							Have an account?{" "}
							<a href="/login" className="link-info">
								Login here
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
		</div>
		</div>
	);
};

export default Register;
