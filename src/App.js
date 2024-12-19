
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
import { getSchoolObjects,getSchoolObjects1, getSchoolObjects2 } from "./services";
import AuthContext from "./context/AuthContext";
import SchoolObjectsContext from "./context/SchoolObjectsContext";
import SchoolObjects1Context from "./context/SchoolObjects1Context";
import SchoolObjects2Context from "./context/SchoolObjects2Context";


function App() {
	const [schoolobjects, setSchoolObjects] = useState([]);
	const [schoolobjects1, setSchoolObjects1] = useState([]);
	const [schoolobjects2, setSchoolObjects2] = useState([]);
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		getSchoolObjects(setSchoolObjects);
	}, []);

	const updateSchoolObjects= () => {
		getSchoolObjects(setSchoolObjects);
	};
	useEffect(() => {
		getSchoolObjects1(setSchoolObjects1);
	}, []);

	const updateSchoolObjects1= () => {
		getSchoolObjects1(setSchoolObjects1);
	};
	useEffect(() => {
		getSchoolObjects2(setSchoolObjects2);
	}, []);

	const updateSchoolObjects2= () => {
		getSchoolObjects2(setSchoolObjects2);
	};



	return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
			<SchoolObjectsContext.Provider
				value={{ schoolobjects: schoolobjects, setSchoolObjects, updateSchoolObjects }}
			>
				<SchoolObjects1Context.Provider
				value={{ schoolobjects1: schoolobjects1, setSchoolObjects1, updateSchoolObjects1 }}
				>
					<SchoolObjects2Context.Provider
				value={{ schoolobjects2: schoolobjects2, setSchoolObjects2 ,updateSchoolObjects2 }}
				>
							<div className="App">
							
								<Routes>
									<Route
										path="/"
										element={<Home schoolobjects={schoolobjects} schoolobjects1={schoolobjects1} schoolobjects2={schoolobjects2} 
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
							</SchoolObjects2Context.Provider>
							</SchoolObjects1Context.Provider>
			</SchoolObjectsContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;