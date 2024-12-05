import React from "react";
import "../assets/workshop-styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";

const Logout = () => {
	const navigate = useNavigate();
	const { setIsAuth, isAuth } = useContext(AuthContext);

	const logoutHandler = async () => {
		const res = await logout();
		console.log(res);
		setIsAuth(false);
		navigate("/");
	};

	return (
		<>
			<section className="vh-10 sectionTop ">
				<div className="container-fluid  wholeLoginPage">
					<div className=" text-white fullWidth">
						<div className="d-flex fullwidth align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
							<button onClick={logoutHandler} id="logoutBtn">
								logout
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Logout;
