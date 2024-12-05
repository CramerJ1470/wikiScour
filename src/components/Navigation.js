import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import "../assets/workshop-styles.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";
import Logo from "./Logo";


const Navigation = (schoolobjects) => {
	// const navigate = useNavigate();
	const { setIsAuth, isAuth } = useContext(AuthContext);


	// const logoutHandler = async () => {
	// 	const res = await logout();
	// 	console.log(res);
	// 	setIsAuth(false);
	// 	navigate("/");
	// };

	let navigationContent = (
		<>
		<div class="container">
  			<div class="row">
			  <div class="col">
			<Nav.Link href="/home">
				Home
			</Nav.Link>
			<Nav.Link chref="/login">
				Login
			</Nav.Link>
			<Nav.Link  href="/register">
				Register
			</Nav.Link>
			<Nav.Link
				
				href="/schoolobjects"
				schoolobjects = {schoolobjects}
			>
				School Objects
			</Nav.Link>
			</div>
			</div>
			</div>
			</>
	);
	if (isAuth) {
		navigationContent = (
			<>
		<div class="container">
  			<div class="row">
			  <div class="col">

				<Nav.Link className="linkText" href="/home">
					Home
				</Nav.Link>
				<Nav.Link className="linkText" href="/schoolobjects">
					School Objects
				</Nav.Link>
				<Nav.Link className="linkText" href="/logout">
					Logout
				</Nav.Link>
				</div>
			</div>
			</div>
			</>
		);
	}

	return (
		<>
			<Navbar >
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-navcontainer">
						<Nav className="linkText ms-auto">
							<Logo />
							{navigationContent}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
export default Navigation;
