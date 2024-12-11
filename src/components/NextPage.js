import React from 'react'

function NextPage() {

	let WikiCollegeListTitle = [];
	const get_my_college_sections =async () =>{
		
		  
		console.log("running wikiCollegeListTitle");
	  
		await fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Lists_of_American_universities_and_colleges")
		.then(function(response) {
		  return response.json();
		})
		.then(function(response){
		  let html_code = response["parse"]["text"]["*"];
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
			  let newSchool = new SchoolObject(valueArray[0],valueArray[1],valueArray[2],valueArray[3],valueArray[4],valueArray[5],hrefSchool); schoolObjectList.push(newSchool);}
			else {console.log(`no wiki page for : ${valueArray[0]}`);let newSchool = new SchoolObject(valueArray[0],valueArray[1],valueArray[2],valueArray[3],valueArray[4],      
			  valueArray[5],""); schoolObjectList.push(newSchool);}
		   
		  
		  }
		  console.log("schoolObjectList:", schoolObjectList);
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
			  let list =tables[0].children[1].children;
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
		  }
	 
	  
		async function horsey() {console.log("horsey");}


  return (
    <>
    <h2 id="mainh2">SillyNFTier</h2> 
    <h3> 
        fetch data from a wikipedia page using Fetch (javascript) to build an API
    </h3> 
  
    <button type="button" onClick={horsey}> 
        Click Here 
    </button>
    <button onClick={stateHandler}>Click Here for college States </button>
  
  <button onClick={get_table_in_state_page}> 
    Click Here for colleges in State
  </button>
  
  <button onClick={get_schools_from_state_page}> 
    Click Here for get_schools_from_state_page
  </button>
  
    <div id="display" 
        > 
        fetched Content will display here. 
    </div>  
    </>
  )
}

export default NextPage
