import React from "react";
import "../assets/workshop-styles.css";
import "../index.css";
import "../styles.css";

import NextPage from "./NextPage";
import DropdownLeft from "./DropdownLeft";
import Navigation from "./Navigation";
import Collegesearch from "./Collegesearch";
import SchoolBoxOnSearch from "./schoolBoxOnSearch";
import SchoolSearch from "./SchoolSearch";

import {addSchoolObject } from "../services";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services";

		  

const Home = ({schoolobjects}) => {	
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
let schoolObject =  `{"schoolImages":["http://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/150px-Harvard_University_coat_of_arms.svg.png",
"http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/220px-Harvard_University_logo.svg.png",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/A_Westerly_View_of_the_Colledges_in_Cambridge_New_England_by_Paul_Revere.jpeg/220px-A_Westerly_View_of_the_Colledges_in_Cambridge_New_England_by_Paul_Revere.jpeg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/John_Harvard_statue_at_Harvard_University.jpg/200px-John_Harvard_statue_at_Harvard_University.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rummell%2C_Richard_Harvard_University.jpg/220px-Rummell%2C_Richard_Harvard_University.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Harvard_Yard_at_Night_03.jpg/220px-Harvard_Yard_at_Night_03.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Massachusetts_Hall%2C_Harvard_University.JPG/220px-Massachusetts_Hall%2C_Harvard_University.JPG",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sanders_theater_2009y.JPG/220px-Sanders_theater_2009y.JPG",
"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Harvard_memorial_church_winter_2009.JPG/220px-Harvard_memorial_church_winter_2009.JPG",
"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/HarvardYard.jpg/220px-HarvardYard.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Harvard_Medical_School_HDR.jpg/220px-Harvard_Medical_School_HDR.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Widener_Library.jpg/220px-Widener_Library.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cornell_vs._Harvard_football_Oct_12%2C_2019.jpg/220px-Cornell_vs._Harvard_football_Oct_12%2C_2019.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/US_Navy_031029-N-6236G-001_A_painting_of_President_John_Adams_%281735-1826%29%2C_2nd_president_of_the_United_States%2C_by_Asher_B._Durand_%281767-1845%29-crop.jpg/95px-US_Navy_031029-N-6236G-001_A_painting_of_President_John_Adams_%281735-1826%29%2C_2nd_president_of_the_United_States%2C_by_Asher_B._Durand_%281767-1845%29-crop.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Quincy_Adams.jpg/98px-John_Quincy_Adams.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg/75px-Ralph_Waldo_Emerson_ca1857_retouched.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored_-_greyscale_-_straightened.jpg/83px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored_-_greyscale_-_straightened.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/President_Rutherford_Hayes_1870_-_1880.jpg/99px-President_Rutherford_Hayes_1870_-_1880.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Oliver_Wendell_Holmes_Jr_circa_1930-edit.jpg/82px-Oliver_Wendell_Holmes_Jr_circa_1930-edit.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Charles_Sanders_Peirce.jpg/89px-Charles_Sanders_Peirce.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/19/President_Theodore_Roosevelt%2C_1904.jpg/91px-President_Theodore_Roosevelt%2C_1904.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/12/WEB_DuBois_1918.jpg/92px-WEB_DuBois_1918.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Robert_Frost_NYWTS_4.jpg/92px-Robert_Frost_NYWTS_4.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/FRoosevelt.png/96px-FRoosevelt.png",
"http://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Helen_Keller_circa_1920_-_restored.jpg/94px-Helen_Keller_circa_1920_-_restored.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg/104px-Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/0/03/JROppenheimer-LosAlamos.jpg/87px-JROppenheimer-LosAlamos.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Samuelson.jpg/93px-Paul_Samuelson.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Leonard_Bernstein_by_Jack_Mitchell.jpg/93px-Leonard_Bernstein_by_Jack_Mitchell.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/92px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Pierre_Trudeau_%281975%29.jpg/86px-Pierre_Trudeau_%281975%29.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mary_Robinson_%282014%29.jpg/90px-Mary_Robinson_%282014%29.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Al_Gore%2C_Vice_President_of_the_United_States%2C_official_portrait_1994.jpg/96px-Al_Gore%2C_Vice_President_of_the_United_States%2C_official_portrait_1994.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ellen_Johnson-Sirleaf%2C_April_2010.jpg/90px-Ellen_Johnson-Sirleaf%2C_April_2010.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Benazir_Bhutto.jpg/90px-Benazir_Bhutto.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ben_Bernanke_official_portrait.jpg/96px-Ben_Bernanke_official_portrait.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/91px-George-W-Bush.jpeg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Official_roberts_CJ.jpg/96px-Official_roberts_CJ.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/85px-Bill_Gates_June_2015.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ban_Ki-Moon_Davos_2011_Cropped.jpg/108px-Ban_Ki-Moon_Davos_2011_Cropped.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Professor_Jennifer_Doudna_ForMemRS.jpg/80px-Professor_Jennifer_Doudna_ForMemRS.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/96px-President_Barack_Obama.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/96px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Louis_Agassiz_H6.jpg/93px-Louis_Agassiz_H6.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Danielle_Allen_2017.jpg/80px-Danielle_Allen_2017.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lawrence_Lessig_May_2017.jpg/92px-Lawrence_Lessig_May_2017.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Paul_Farmer_2011.jpg/86px-Paul_Farmer_2011.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jason_Furman_official_portrait.jpg/80px-Jason_Furman_official_portrait.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Kenneth_Galbraith_1982.jpg/89px-John_Kenneth_Galbraith_1982.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Henry_Louis_Gates_2014_%28cropped%29.jpg/69px-Henry_Louis_Gates_2014_%28cropped%29.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Asa_Gray_1870s.jpg/91px-Asa_Gray_1870s.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Seamus_Heaney_Photograph_Edit.jpg/85px-Seamus_Heaney_Photograph_Edit.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Oliver_Wendell_Holmes_Sr_c1879.jpg/95px-Oliver_Wendell_Holmes_Sr_c1879.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/94px-William_James_b1842c.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Timothy-Leary-Los-Angeles-1989.jpg/93px-Timothy-Leary-Los-Angeles-1989.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Henry_Wadsworth_Longfellow%2C_photographed_by_Julia_Margaret_Cameron_in_1868.jpg/87px-Henry_Wadsworth_Longfellow%2C_photographed_by_Julia_Margaret_Cameron_in_1868.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/James_Russell_Lowell_-_1855.jpg/92px-James_Russell_Lowell_-_1855.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/91/GregoryMankiw.jpg/79px-GregoryMankiw.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/9/91/102111_Pinker_344.jpg/100px-102111_Pinker_344.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sec._Robert_Reich.jpg/95px-Sec._Robert_Reich.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Arthur_M._Schlesinger%2C_Jr._1961.jpg/90px-Arthur_M._Schlesinger%2C_Jr._1961.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amartya_Sen.jpg/94px-Amartya_Sen.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg/91px-B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lawrence_Summers_2012.jpg/86px-Lawrence_Summers_2012.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Cass_Sunstein_%282008%29.jpg/120px-Cass_Sunstein_%282008%29.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Elizabeth_Warren_2016.jpg/82px-Elizabeth_Warren_2016.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Cornel_West_by_Gage_Skidmore.jpg/80px-Cornel_West_by_Gage_Skidmore.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Plos_wilson.jpg/120px-Plos_wilson.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Shing-Tung_Yau_Screenshot_%28cropped%29.png/112px-Shing-Tung_Yau_Screenshot_%28cropped%29.png","http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Clock_Tower_University_of_Puerto_Rico-San_Marcos-Harvard.jpg/220px-Clock_Tower_University_of_Puerto_Rico-San_Marcos-Harvard.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ivy_league_simple_logo.png/50px-Ivy_league_simple_logo.png"],"_id":"67624a3004a08661c4485d04","schoolname":"Harvard University","Established":"1636; 388 years ago (1636)[4]","President":"Alan Garber","Academicstaff":"~2,400 faculty members (and >10,400 academic appointments in affiliated teaching hospitals)[8]","Campus":"Midsize city[10], 209 acres (85 ha)","Website":"harvard.edu ","Type":"Private research university","Motto":"Veritas (Latin)[3]","Nickname":"Crimson","Mascot":"John Harvard","Sportingaffiliations":"NCAA Division I FCS – Ivy LeagueECAC HockeyNEISACWPAIRAEAWRCEARCEISA","Location":"Cambridge, Massachusetts, United States","Provost":"John F. Manning[7]","Students":"21,613 (fall 2022)[9]","Postgraduates":"14,373 (fall 2022)[9]","Colors":"Crimson, white, and black[11]","Newspaper":"The Harvard Crimson","Formernames":"Harvard College","Academicaffiliations":"","Accreditation":"NECHE","Forbes":"8","Founder":"Massachusetts General Court","schoolWikiPage":"https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Harvard_University","paragraphs":"Harvard University features prominently in the plots of multiple major films, including:","USNewsWorldReport":"3,1"}`;

let decipheredSchool = JSON.parse(schoolObject);
console.log(decipheredSchool.schoolname);


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
			this.Academicaffiliations = school.Academicaffiliations;
			this.Accreditation= school.Accreditation;
			this.Forbes=school.Forbes;
			this.Founder=school.Founder;
			this.MottoinEnglish=school.MottoinEnglish;
			this.Newspaper=school.Newspaper;
			this.schoolWikiPage= school.schoolWikiPage;
			this.schoolImages=school.schoolImages;
			this.paragraphs=school.paragraphs;
			this.USNewsWorldReport=school.USNewsWorldReport;



	  
		}
	}
	let WikiCollegeListTitle = [];
	const get_my_college_sections =async () =>{
		let count = 0;
		  
		console.log("running wikiCollegeListTitle");
	  
		await  fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Index_of_colleges_and_universities_in_the_United_States")
		.then(function(response) {
		  return response.json();
		})
		.then(function(response){
		  let html_code = response['parse']['text']["*"];
		  let parser = new DOMParser();
		  let html = parser.parseFromString(html_code, "text/html");
		  let list = html.getElementsByClassName("mw-heading mw-heading2");console.log(list);
		  
		  for (let aa = 0; aa< list.length-1; aa++) {
				let newItemList =list[aa].nextSibling.nextSibling.nextSibling.children[0].children;
			console.log(newItemList);
				   for (let bb = 0; bb <newItemList.length; bb++) { 
					console.log("newItemList[bb];",newItemList[bb].firstChild.href);
					if (newItemList[bb].firstChild.href !== undefined) {console.log(bb); WikiCollegeListTitle.push(newItemList[bb].firstChild.href);}
				}
		  }
		   
		});
	  
		for (let ac= 0; ac< WikiCollegeListTitle.length; ac++) {
			let schoolsab = WikiCollegeListTitle[ac];
			if (schoolsab !== undefined) {
				try {
			
					let schoolAddress = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+schoolsab.split(`http://localhost:3000/wiki/`)[1];
					console.log("schoolAddress:",schoolAddress);
					schoolAddressList.push(schoolAddress);
					count++;
					console.log("count: ",count);
					get_my_data(schoolAddress);
					
				
		
					}catch (e) {
						// statements to handle any exceptions
						console.log("no href for: ",schoolsab);
					   }

		}
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
			
			let schoolAddress = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="+schoolsab.split(`http://localhost:3000/wiki/`)[1];
			console.log("schoolAddress:",schoolAddress);
			schoolAddressList.push(schoolAddress);
			get_my_data(schoolAddress);
			
		

			}catch (e) {
				// statements to handle any exceptions
				console.log("no href for: ",schoolsab);
			   }
}
let schoolNumber =0;
async function get_schools_from_state_page(schools){
			// console.log("schoolsList: ",schools);
	
			for (let ab = 1; ab< schools.length; ab++) {
				getHref(schools[ab]);
				schoolNumber++;
				console.log("schoolNumber:",schoolNumber);
	}
	document.getElementById("collegesInfoButton").style.display= "none";
}
 let list = [];  
	let number = 0;


	const regex = /(?:\w+ )|(\w+, )/gm;
const get_my_data= async (url)=> { 
	try {		 
		  await fetch(url)
			.then(function(response) {
			  return response.json();
			})
			.then(async function(response){
			  let html_code = await response.parse.text["*"];
			  let parser = new DOMParser();
			  let html = parser.parseFromString(html_code, "text/html");
			  let newItem = {};
			  var tables = html.querySelectorAll(".infobox-label");
			  let schoolname1 = "schoolname";
			  Object.defineProperty(newItem,"schoolWikiPage", {value: url});
			  
			  let splitSchoolName = url.split("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=")[1].replaceAll("_"," ").toString();
			  Object.defineProperty(newItem,"schoolname", {value: splitSchoolName});
			  for (let x = 0; x < tables.length;x++) 
			  
			 try { let newKey = await tables[x].textContent.replaceAll(" ","").replaceAll("/","").replaceAll(".","").replaceAll(/\D\d+\D/gm, "").replaceAll("&","");  let newValue = ""; if (newItem.hasOwnProperty(newKey)) {console.log("hasOwnProperty");let oldValue = newItem[newKey] +","+ tables[x].nextSibling.textContent.split(".mw")[0]; newItem[newKey]= oldValue;} else {let newValue = tables[x].nextSibling.textContent.split(".mw")[0];  Object.defineProperty(newItem, newKey, {writable: true,value:newValue});}
		
		} catch (e) {
			console.log("error:",e);
		}
			  console.log("item: ", newItem);

	

/*********************************GET Paragraphs***********************************************/

		/**** set initial string for all paragraphs to be added to ****/
			let newItems1 ="";
		//****  set string variable ****/	
			let newP = "";
		//****  gets all paragraph items from html which is parsed html_code ****/	
			  var tables2 = html.getElementsByTagName("p"); 
			  for (let x = 0; x < tables2.length;x++) {

		/**** use regex to get rid of reference tags ie. [5] ****/		
				newP = tables2[x].innerText.replace(/\D\d+\D/gm, '').split(".mw")[0]; 

		/**** add paragraph to all paragrahs in string form ****/
		/**** note* strings from page as innerText incliuded \n breaks ****/		
				newItems1= newItems1+ " " + newP;}
		/**** create the property for newItem which is our school and adding a value to it ****/		
			Object.defineProperty(newItem, "paragraphs", {value:newP});

			
/********************************Get Images ******************************/

		/**** get all elements with description which has images in it for this page ****/		
			let getCollegePictures = html.getElementsByClassName("mw-file-description");

		/**** create empty array to push too for href (image addresses) ****/		
    		let hrefarray = [];

		/*** loop though getCollegPistures array ****/	
			for (let a =0 ; a < getCollegePictures.length; a++) {

		/**** find href element in <img> tags as src properties ****/		
    		let imageI = getCollegePictures[a].children[0].src; 
		/**** push to array of images ****/	
			hrefarray.push(getCollegePictures[a].children[0].src);
		}
		/**** create the property for newItem which is our school and adding a value to it ****/
			Object.defineProperty(newItem, "schoolImages", {value:hrefarray});
			
			let school = new SchoolObject(newItem) ;
			 
			  postSchoolObject(school,number);
			  newItem = {};


			  console.log("Number:",number);
			  number++;
		

			}
		);
	}
		 catch (e) {
			console.log("error:",e);
			// statements to handle any exceptions
			let splitSchoolName = url.split("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=")[1].replaceAll("_"," ");
			console.log("school :",splitSchoolName ," not added");
		 }
			  

		 window.onload = () => console.log('Script loaded!');	   
			  
		  };

	async function postSchoolObject(school,number) {
		console.log(number);
		// if (number <= 999) {
		let res = await addSchoolObject(school,number); 
		console.log("res: ",res._id);

	// }
			
	// else if ( number > 999 && number <= 1999) {
	// 	let res = await addSchoolObject1(school,number);console.log("res: ",res._id);
		  
	// } else if ( number > 1999 && number <= 2999) {
	// 	let res = await addSchoolObject2(school,number);console.log("res: ",res._id);
	// }
			
}
	
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
		async function get_index_list() {
			await  fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Index_of_colleges_and_universities_in_the_United_States")
			.then(function(response) {
			  return response.json();
			})
			.then(function(response){
			  let html_code = response['parse']['text']["*"];
			  let parser = new DOMParser();
			  let html = parser.parseFromString(html_code, "text/html");
			  let list = html.getElementsByClassName("mw-heading mw-heading2");
			  let listArr = []; 
			  let listFromArr = [];
			  for (let aa = 0; aa< list.length; aa++) {
					let newItemList =list[aa].nextElementSibling.nextElementSibling.children; 
					console.log("newItemList: ".newItemList);
			   		// for (let bb = 0; newItemList.length; bb++) { 
					// 	if (bb%2 == 0) {console.log(bb); listFromArr.push(newItemList[bb]);}
					// }
			  }
			  console.log("listFromArr: ",listFromArr);  
			});
		}
		window.onload = () => console.log('Script loaded!');
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
		<div><SchoolSearch schoolobjects={schoolobjects} isAuth={isAuth}/></div>
		{/* <SchoolBoxOnSearch schoolObject={decipheredSchool} /> */}
		<div style={{height:"80%"}}>
		<Collegesearch/>
		</div>

        </div> 
		
		
		 
	</main>
  </>
  )
}

export default Home;
