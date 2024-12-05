import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import useInput from "../hooks/useInput";
import { login } from "../services";
import "../index.css";


const Login = () => {
	const { setIsAuth, isAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		value: username,
		hasError: usernameInvalid,
		valid: usernameValid,
		changeHandler: usernameChangeHandler,
		blurHandler: usernameBlurHandler,
		reset: usernameReset,
	} = useInput((username) => username.trim().length > 5);

	const {
		value: password,
		hasError: passwordInvalid,
		valid: passwordValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: passwordReset,
	} = useInput((password) => password.trim().length > 5);

	const formValid = usernameValid && passwordValid;

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(username, password);
		login(username, password, setIsAuth);
		localStorage.setItem("orders", "");
		console.log(localStorage.orders);
		navigate("/");
	};

	return (
		
		<section className="sectionTop">
			
		
			<div class="container">

			
				<div className ="row col3"> 
				<div className="col wid33"></div>
				<div className="col"></div>
				
				
				<div className="col1 ml-100  bg12">
					<div className="h-custom-2 px-5ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 ">
						<form className="rem23" onSubmit={submitHandler}>
							<h3 className="form-label mb-3 pb-3 text-white">
								Log in
							</h3>

							<div className="form-outline mb-4">
								<input
									type="text"
									id="username"
									className="form-control form-control-lg"
									onChange={usernameChangeHandler}
									onBlur={usernameBlurHandler}
									value={username}
								/>

								<label
									className="form-label"
									htmlFor="username"
								>
									Username
								</label>
								{usernameInvalid && (
									<p>please enter valid username</p>
								)}
							</div>

							<div className="form-outline mb-4">
								<input
									type="password"
									id="password"
									className="form-control form-control-lg"
									onChange={passwordChangeHandler}
									onBlur={passwordBlurHandler}
									value={password}
								/>

								<label
									className="form-label"
									htmlFor="password"
								>
									Password
								</label>
								{passwordInvalid && (
									<p>please enter valid username</p>
								)}
							</div>

							<div className="pt-1 mb-4">
								<button
									className="btn btn-info btn-lg btn-block"
									type="submit"
								>
									Login
								</button>
							</div>

							<p className="small mb-5 pb-lg-2">
								<a className="fpassword" href="#!">
									Forgot password?
								</a>
							</p>
							<p>
								Don't have an account?{" "}
								<a href="/register" className="link-info">
									Register here
								</a>
							</p>
						</form>
					</div>
					</div>
					<div className="col1"></div>
				</div>
			
			</div>
			
		</section>
		
	);
};

export default Login;
