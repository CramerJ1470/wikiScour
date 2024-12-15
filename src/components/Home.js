import React from "react";
import "../assets/workshop-styles.css";
import "../index.css";
import "../styles.css";

import NextPage from "./NextPage";
import DropdownLeft from "./DropdownLeft";
import Navigation from "./Navigation";
import Collegesearch from "./Collegesearch";
import SchoolBoxOnSearch from "./schoolBoxOnSearch";

import {addSchoolObject} from "../services";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";

		  

const Home = (schoolobjects) => {	
	const navigate = useNavigate();
	const { setIsAuth, isAuth } = useContext(AuthContext);

	console.log(isAuth);
	console.log(schoolobjects[256]);

	const logoutHandler = async () => {
		const res = await logout();
		console.log(res);
		setIsAuth(false);
		navigate("/");
	};


	class SchoolObject {
		constructor(school) {
			this.schoolname = school.schoolname;
			this.Established =school.Established;
			this.President= school.President;
			this.ReligiousAffiliation = school.Religiousaffiliation;
			this.Academicstaff=school.Academicstaff;
			this.Administrativestaff = school.Administrativestaff;
			this.Campus=school.Campus;
			this.Website=school.Website;
			this.Type=school.Type;
			this.Dean=school.Dean;
			this.Formername=school.Formername;
			this.Motto=school.Motto;
			this.Nickname=school.Nickname;
			this.Mascot=school.Mascot;
			this.Sportingaffiliations=school.Sportingaffiliations;
			this.Location=school.Location;
			this.Students=school.Students;
			this.Provost=school.Provost;
			this.Undergraduates=school.Undergradutes;
			this.Postgraduates=school.Postgraduates;
			this.Colors=school.Colors;
			this.Endowements=school.Endowments;
			this.Formernames=school.Formernames;
			this.Admitrate=school.Adminrate;
			this.SATTotal=school.SATTotal;	
			this.ACTComposite=school.ACTComposite;
			this.HighschoolGPAAverage=school.HighschoolGPAAverage;

	  
		}
	}
	let WikiCollegeListTitle = [];
	const get_my_college_sections =async () =>{
		
		  
		console.log("running wikiCollegeListTitle");
	  
		await fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Lists_of_American_universities_and_colleges")
		.then(function(response) {
		  return response.json();
		})
		.then(function(response){
		  let html_code = response['parse']['text']["*"];
		  let parser = new DOMParser();
		  let html = parser.parseFromString(html_code, "text/html");
		  let headings = html.getElementsByClassName("mw-heading2");
		   
		  for (let x = 0; x < 4; x++) 
			{let childLength = headings[x].nextElementSibling.nextElementSibling.children.length;   for (let j = 0; j <childLength; j++) {WikiCollegeListTitle.push(headings[x].nextElementSibling.nextElementSibling.children[j].firstChild.href)}};
		 })
	  
		for (let ac= 0; ac< WikiCollegeListTitle.length; ac++) {
		  let urlState = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+WikiCollegeListTitle[ac].split(`http://localhost:3000/wiki/`)[1];
		  get_table_in_state_page(urlState);
		}
	  };
	
	  async function get_table_in_state_page(statePage) {
		  console.log(statePage);
		await fetch(statePage)
		.then(function(response) {
			return response.json();
		  })
		
		.then(function(response){
		  let html_code = response["parse"]["text"]["*"];
		  let parser = new DOMParser();
		  let html = parser.parseFromString(html_code, "text/html");
		  let tbody = html.getElementsByTagName("tbody")[0];
		  let tbodyList = tbody.children;
		  let schools = tbodyList;
		  get_schools_from_state_page(schools) ;
		/*************************schools are the adresses of state pages***********************/
	  });
	 }
	
		let schoolObjectList = [];


let schoolAddressList = [];
	/*****************************get School Page address from state pages**********************/
async function getHref(schoolsab) {
		try {
			let urlSchool =schoolsab.getElementsByTagName("a")[0].href;
			let schoolAddress = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+urlSchool.split(`http://localhost:3000/wiki/`)[1];
			console.log("schoolAddress:",schoolAddress);
			schoolAddressList.push(schoolAddress);
			get_my_data(schoolAddress);
			
		

			}catch (e) {
				// statements to handle any exceptions
				console.log("no href for: ",schoolsab);
			   }
}
async function get_schools_from_state_page(schools){
			// console.log("schoolsList: ",schools);
	
			for (let ab = 1; ab< schools.length; ab++) {
				getHref(schools[ab]);
	}
	document.getElementById("collegesInfoButton").style.display= "none";
}
 let list = [];  
	let number = 0;
const get_my_data= async (url)=> { 
				 
		  fetch(url)
			.then(function(response) {
			  return response.json();
			})
			.then(function(response){
			  let html_code = response.parse.text["*"];
			  let parser = new DOMParser();
			  let html = parser.parseFromString(html_code, "text/html");
			  let newItem = {};
			  var tables = html.querySelectorAll(".infobox-label");
			  let schoolname1 = "schoolname";
			  Object.defineProperty(newItem,"schoolWikiPage", {value: url});
			  
			  let splitSchoolName = url.split("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=")[1].replaceAll("_"," ");
			  Object.defineProperty(newItem,"schoolname", {value: splitSchoolName});
			  for (let x = 0; x < tables.length;x++) {let newKey = tables[x].textContent.replaceAll(" ","").replaceAll("/","").replaceAll(".",""); let newValue = ""; if (newItem.hasOwnProperty(newKey)) {console.log("hasOwnProperty");let oldValue = newItem[newKey] +","+ tables[x].nextSibling.textContent.split(".mw")[0]; newItem[newKey]= oldValue;} else {let newValue = tables[x].nextSibling.textContent.split(".mw")[0]; Object.defineProperty(newItem, newKey, {value:newValue});}}
			  console.log("item: ", newItem);
			  let school = new SchoolObject(newItem) ;
			  
			  postSchoolObject(school);
			  newItem = {};
			  console.log("Number:",number);
			  number++;
			  

			   
			  
		  });

	async function postSchoolObject(school) {let res = await addSchoolObject(school);console.log("res: ",res._id);}
			
		
		  };
		  
		  
				
	
				async function make_list_from_college_list(school) {
					for (let aa = 0; aa < schoolObjectList.length; aa++) {
				  
					}
				  }
	
	
const samplePage = async() => {
	setIsAuth(true);
	navigate("/samplepage");
};
	  
	  
	  const stateHandler= async() => {
		get_my_college_sections();
		  };
	 
	  
		async function horsey() {console.log("horsey");}


  return (
    <>
	
	<main className="sectionTop">
	
		<h3 className="textshadow textdark">Fetch data from a wikipedia page using Fetch (javascript) to build an API (thank you Wikipedia!)</h3> 
		<div className="container1">
		<div className ="row col3"> 
				
				<div className="col">
				<div className ="flexbox1Elements2">
				{!isAuth ? (<>
    						<a className="dropdown-item nicebutton wid33 buttonshadow"type="button" href="/register">Register</a>
    						<a className="dropdown-item nicebutton wid33 buttonshadow" type="button" href="/login">Login</a>
							</>
				):(
    						<button className="dropdown-item nicebutton wid33 buttonshadow" type="button" onClick={logoutHandler}>Logout</button>
				)}
					</div>
					
      			</div>
				 
    			<div className="col">
				
				

<div className="body1">
<svg viewBox="0 0 425 300">
  <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
  <text   x="30">
    <textPath xlinkHref="#curve">
	MackCollegeSearch 
	</textPath>
	
  </text>
</svg>
</div>
					
					
				</div>
			

				 
				<div className="col">
				
					<div className="flexbox1Elements">
					{!isAuth ? (<>
					<h3 className="textshadow textdark">
						Please login to get data
						</h3>
						</>
					):(<>
					<button className="dropdown-item nicebutton buttonshadow" type="button" onClick={samplePage}>Sample Page</button>
     					<div className="dropdown show">
  							<a className="buttonshadow nicebutton btnpad" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   								Get Data Menu
  							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    							<button className="dropdown-item nicebutton buttonshadow" id="stateListButton" type="button" onClick={get_my_data}>Get state List data</button>
    							<button className="dropdown-item nicebutton buttonshadow "  id="collegesInfoButton" type="button" onClick={stateHandler}>Get Colleges Info</button>
    							<button className="dropdown-item nicebutton buttonshadow" id="filtersForColleges" href="#">College Filters</button>
								
  							</div>
						</div>
						
						</>
					)}
					</div>
    			
    		</div>
			

		</div>
		<SchoolBoxOnSearch/>
		<div style={{height:"80%"}}>
		<Collegesearch/>
		</div>
        </div> 
		
		
		 
	</main>
  </>
  )
}

export default Home;
