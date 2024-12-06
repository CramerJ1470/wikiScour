
import './App.css';
import "./assets/workshop-styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import SchoolObjectDetails from "./components/SchoolObjectDetails";
import SchoolObjectsHomePage from "./components/SchoolObjectsHomePage";
import React, { useEffect, useState ,useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { getSchoolObjects } from "./services";
import AuthContext from "./context/AuthContext";
import SchoolObjectsContext from "./context/SchoolObjectsContext";

function App() {
	const [schoolobjects, setSchoolObjects] = useState([]);
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		getSchoolObjects(setSchoolObjects);
	}, []);

	const updateSchoolObjects= () => {
		getSchoolObjects(setSchoolObjects);
	};


	return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
			<SchoolObjectsContext.Provider
				value={{ schoolobjects: schoolobjects, setSchoolObjects, updateSchoolObjects }}
			>
				
							<div className="App">
							
								<Routes>
									<Route
										path="/"
										element={<Home schoolobjects={schoolobjects} 
										 />}
									/>
									<Route
										path="/home"
										element={<Home schoolobjects={schoolobjects} />}
									/>
									{!isAuth ? (
										<>
											<Route path="/login" element={<Login />}/>
											<Route path="/register" element={<Register />}/>
										</>
									) : (
										<>
											<Route path="/logout" element={<Logout />}/>
											<Route path="/schoolobjects/:id" element={<SchoolObjectDetails schoolobjects={schoolobjects}/>}/>
											<Route path="/schoolobjectshomepage" element={<SchoolObjectsHomePage schoolobjects={schoolobjects}/>}/>
											<Route path="/samplepage" element={<SchoolObjectDetails/>}/>
										</>
									)}
								</Routes>

								<Footer />
							</div>
				
			</SchoolObjectsContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;