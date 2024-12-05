import React from "react";
import "../assets/workshop-styles.css";
import "../index.css";
import NextPage from "./NextPage";
import DropdownLeft from "./DropdownLeft";
import Navigation from "./Navigation";
import Collegesearch from "./Collegesearch";
import {addSchoolObject} from "../services";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";

		  

const Home = (schoolobjects) => {	
	const navigate = useNavigate();
	const { setIsAuth, isAuth } = useContext(AuthContext);

	const logoutHandler = async () => {
		const res = await logout();
		console.log(res);
		setIsAuth(false);
		navigate("/");
	};

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
		  let urlState = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+WikiCollegeListTitle[ac].split(`http://localhost:3000/wiki/`)[1]
		  get_table_in_state_page(urlState);
		}
	  }
	
	  async function get_table_in_state_page(statePage) {
		  
		fetch(statePage)
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
	  
		}
	  
		)}
	
		let schoolObjectList = [];
	
		async function get_schools_from_state_page(schools){
			
			for (let ab = 1; ab< schools.length; ab++) {
			let valueArray = []
			for (let z = 0; z < schools[ab].children.length; z++)  {
			  valueArray.push(schools[ab].children[z].innerText);}
			let hrefSchoolFirst = schools[ab].children[0].firstChild.href;
			if (hrefSchoolFirst ) {
			  let hrefSchool = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+hrefSchoolFirst.split(`http://localhost:3000/wiki/`)[1] ;
			  let newSchool = new SchoolObject(valueArray[0].trim(),valueArray[1].trim(),valueArray[2].trim(),valueArray[3].trim(),valueArray[4].trim(),valueArray[5].trim(),hrefSchool); schoolObjectList.push(newSchool);}
			else {console.log(`no wiki page for : ${valueArray[0]}`);let newSchool = new SchoolObject(valueArray[0].trim(),valueArray[1].trim(),valueArray[2].trim(),valueArray[3].trim(),valueArray[4].trim(),      
			  valueArray[5],""); schoolObjectList.push(newSchool);}
		   
		  
		  }
		  console.log("schoolObjectList:", schoolObjectList);
		  for (let sol = 0; sol < schoolObjectList.length-10;sol++) {
			addSchoolObject(schoolObjectList[sol]);
		  }
		  }
		  
	
		  const get_my_data= async ()=> { 
			
		  
		  
			let urls = ['https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Harvard%20University',"https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=St._Joseph's_University_(New_York)","https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Michigan_State_University","https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=State_University_of_New_York_at_Stony_Brook"];
			var url = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Harvard%20University';
			var url1 = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=St._Joseph's_University_(New_York)";
			var url2 = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Michigan_State_University";
		  
		  for (let loop = 0; loop < urls.length;loop++){
		  fetch(urls[loop])
			.then(function(response) {
			  return response.json();
			})
			.then(function(response){
			  let html_code = response["parse"]["text"]["*"];
			  let parser = new DOMParser();
			  let html = parser.parseFromString(html_code, "text/html");
			  var tables = html.querySelectorAll(".vcard");
			  let list =tables[0].children[1].children
			  console.log(list);
			  let listHTML ='';
			  console.log(list.length);
			  let valueArray = [];
			  let keyArray = [];
			  for (let z = 0; z < list.length; z++) {listHTML=listHTML+ list[z].innerHTML; console.log(list[z].childNodes[0].textContent ,": ",list[z].childNodes[1]);
		  let listOfKeysLevel0= ["Established", "President","Religious affiliation","Academic staff","Campus"];
		  let listOfKeysLevel1= ["Provost", "Website","Type","Dean"];
		  let listOfKeysLevel2 = ["Former name","Motto","Nickname","Mascot"]; //more than one answer with a <br> between
		  let listOfKeysLevel3 = ["Sporting affiliations"];
		  
		  //*********************items in 1st level of element ****************************//
			  if (listOfKeysLevel0.includes(list[z].childNodes[0].textContent)) {console.log(list[z].childNodes[0].textContent,":",list[z].childNodes[0].nextSibling.textContent);let newItem={}; Object.defineProperty(newItem, list[z].childNodes[0].textContent, {value:list[z].childNodes[0].nextSibling.textContent});valueArray.push(newItem);}
		  
		  //*********************items in 1st level of element ****************************//
		  if (listOfKeysLevel1.includes(list[z].childNodes[0].textContent)) {console.log(list[z].childNodes[0].textContent,":",list[z].children[1].innerText);let newItem={}; Object.defineProperty(newItem, list[z].childNodes[0].textContent, {value:list[z].children[1].innerText});valueArray.push(newItem);}
		  
		  if (listOfKeysLevel2.includes(list[z].childNodes[0].textContent)) {let formerNames =list[z].childNodes[1].innerHTML.toString().split("<br>"); let newItem={}; Object.defineProperty(newItem, list[z].childNodes[0].textContent, {value:formerNames}); console.log(list[z].childNodes[0].textContent,":",formerNames); valueArray.push(newItem);}
		  
		  if (listOfKeysLevel3.includes(list[z].childNodes[0].textContent)) {console.log(list[z].childNodes[0].nextSibling.children);let itemsArray = list[z].childNodes[0].nextSibling.children; console.log("itemsArray:",itemsArray); if (itemsArray.length > 1) {let itemsList = []; Array.from(itemsArray).forEach((loc) => {if (loc.localName === "a") {itemsList.push(loc.title); console.log(loc.title)}}) ; let innertextKey = list[z].childNodes[0].textContent; let innertextValue = itemsList; let newItem={}; Object.defineProperty(newItem, innertextKey, {value:innertextValue}); console.log(newItem); valueArray.push(newItem); } else {console.log(list[z].childNodes[0].children[0].title); 
			   let innertextKey = list[z].childNodes[0].textContent; let innertextValue = list[z].childNodes[0].children[0].title; let newItem={}; Object.defineProperty(newItem, innertextKey, {value:innertextValue}); console.log(newItem); valueArray.push(newItem); }
			}
		  
			
		  
		  
		  
		  /// ****************************************       ***************************************//
			  if (list[z].childNodes[0].textContent=== "Students" ) {let studentArray = list[z].nextSibling.textContent; console.log("studentArray:",studentArray); let       
				innertextKey = list[z].childNodes[0].textContent; let innertextValue = list[z].childNodes[1].textContent; let newItem={}; Object.defineProperty(newItem, innertextKey, {value:studentArray}); console.log(newItem);  valueArray.push(newItem);}
		  
			  if (list[z].childNodes[0].textContent=== "Location" ) {let locationArray = list[z].childNodes[0].nextSibling.firstChild.children; console.log("locationArray:", 
				locationArray); if (locationArray.length > 1) {let locationList = []; Array.from(locationArray).forEach((loc) => {if (loc.localName === "a") {locationList.push(loc.title); console.log(loc.title)}}) ; let innertextKey = list[z].childNodes[0].textContent; let innertextValue = locationList; let newItem={}; Object.defineProperty(newItem, innertextKey, {value:innertextValue}); console.log(newItem); valueArray.push(newItem); } else {console.log(list[z].childNodes[0].nextSibling.firstChild.children[0].title); 
			   let innertextKey = list[z].childNodes[0].textContent; let innertextValue = list[z].childNodes[0].nextSibling.firstChild.children[0].title; let newItem={}; Object.defineProperty(newItem, innertextKey, {value:innertextValue}); console.log(newItem); valueArray.push(newItem); }
			}
			  document.getElementById("display").innerHTML = listHTML;
			 
			  
			}
			console.log("valueArray:",valueArray);
		  })
		  
		  
				}};
	
				async function make_list_from_college_list(school) {
					for (let aa = 0; aa < schoolObjectList.length; aa++) {
				  
					}
				  }
	
		class SchoolObject {
					constructor(school, location,control, carnegieClassification,enrollment,founded,schoolLink) {
						  this.schoolName =  school;
						  this.location = location;
						  this.control = control;
						  this.carnegieClassification = carnegieClassification;
						  this. enrollment = enrollment;
						  this.founded= founded;
						  this.schoolLink = schoolLink;
				  
					};
					}

	  
	  
	  const stateHandler= async() => {
		get_my_college_sections();
		  };
	 
	  
		async function horsey() {console.log("horsey");}


  return (
    <>
	<main className="sectionTop">
		<h3 className="textshadow textdark">Fetch data from a wikipedia page using Fetch (javascript) to build an API (thank you Wikipedia!)</h3> 
		<div class="container1">
		<div className ="row col3"> 
				
				<div className="col">
				<div className ="flexbox1Elements2">
				{!isAuth ? (<>
    						<a class="dropdown-item nicebutton wid33 buttonshadow"type="button" href="/register">Register</a>
    						<a class="dropdown-item nicebutton wid33 buttonshadow" type="button" href="/login">Login</a>
							</>
				):(
    						<button class="dropdown-item nicebutton wid33 buttonshadow" type="button" onClick={logoutHandler}>Logout</button>
				)}
					</div>
					
      			</div>
				 
    			<div class="col">
				
				

<div class="body1">
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
			

				 
				<div class="col">
				
					<div className="flexbox1Elements">
					{!isAuth ? (<>
					<h3 className="textshadow textdark">
						Please login to get data
						</h3>
						</>
					):(<>
     					<div class="dropdown show">
  							<a class="buttonshadow nicebutton btnpad" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   								Get Data Menu
  							</a>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    							<button class="dropdown-item nicebutton buttonshadow" id="stateListButton" type="button" onClick={get_my_data}>Get state List data</button>
    							<button class="dropdown-item nicebutton buttonshadow "  id="collegesInfoButton" type="button" onClick={stateHandler}>Get Colleges Info</button>
    							<button class="dropdown-item nicebutton buttonshadow" id="filtersForColleges" href="#">College Filters</button>
  							</div>
						</div>
						</>
					)}
					</div>
    			
    		</div>
		</div>
	    
        </div> 
		<Collegesearch/>
		{/* <tr >
        <th scope="row" class="infobox-label addedin" id="mottoformats">Motto</th>
        <button onclick="getlist()">click me</button>
        <td class="infobox-data">
            <div class="plainlist">
                <ul>
                    <li>"Spartans Will."
                        <sup id="cite_ref-1" class="reference">
                            <a href="#cite_note-1">
                                <span class="cite-bracket">[</span>1<span class="cite-bracket">]</span>
                            </a>
                        </sup>
                        <sup id="cite_ref-2" class="reference">
                            <a href="#cite_note-2">
                                <span class="cite-bracket">[</span>2<span class="cite-bracket">]</span>
                            </a>
                        </sup>
                    </li>
                    <li>"Advancing Knowledge. Transforming Lives.
                        <sup id="cite_ref-3" class="reference">
                            <a href="#cite_note-3">
                                <span class="cite-bracket">[</span>3<span class="cite-bracket">]</span>
                            </a>
                        </sup>
                    </li>
                </ul>
            </div>
        </td>
    </tr> */}
	</main>
  </>
  )
}

export default Home;
