/***********************User section******************* */

export const login = async (username, password, applyFunc) => {
	const url = "http://localhost:8090/api/user/login";
	const body = JSON.stringify({ username, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	if (res.ok) {
		const result = await res.json();
		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: result.token,
				id: result.user._id,
				username: result.user.username,
			})
		);
		console.log(`localStorage: `, localStorage);
		applyFunc(true);
	
	} else {
		applyFunc(false);
	}
};

export const register = async (username, email, password) => {
	const url = "http://localhost:8090/api/user/register";
	const body = JSON.stringify({ username, email, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const logout = async () => {
	const url = "http://localhost:8090/api/user/logout";
	const { token } = JSON.parse(localStorage.getItem("userData"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body: "", headers });
	const result = await res.json();
	localStorage.removeItem("userData");
	return result;
};
/************Character Section ***************** */
// export const getCharacters = async (applyFunc) => {
// 	const url = "http://localhost:8090/api/character";
// 	const res = await fetch(url);
// 	res.json().then((characters) => {
// 		applyFunc([...characters]);
// 	});
// };


/*******************Movie Section ********************* */
export const getSchoolObjects = async (applyFunc) => {
	const url = "http://localhost:8090/api/schoolobjects";
	const res = await fetch(url);
	res.json().then((schoolobjects) => {
		applyFunc([...schoolobjects]);
	});
};

export const addSchoolObject = async (description) => {
	const { id, token } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/schoolobjects";
	const body = JSON.stringify(description);
	console.log("body: ",body);
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	console.log("added schoolobject");
	return result;
};

/**********************Cart Section****************************/

// export const getCarts = async (applyFunc) => {
// 	const url = "http://localhost:8090/api/carts";
// 	const res = await fetch(url);
// 	res.json().then((carts) => {
// 		applyFunc([...carts]);
// 	});
// };

// export const addCart = async (cart) => {
	
// 	const data = JSON.parse(localStorage.getItem("userData"));
// 	const token = data.token;
// 	const url = "http://localhost:8090/api/carts";
	
// 	const body = cart.body;
// 	console.log(`addCart body: `, body);
// 	const headers = {
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${token}`,
// 	};
// 	const res = await fetch(url, { method: "POST", body, headers });
// 	const result = await res.json();
// 	return result;
// };

// export const deleteCart = () => {
// 	const data = JSON.parse(localStorage.getItem("userData"));
// 	const token = data.token;
// 	const url = "http://localhost:8090/api/carts";
// 	const headers = {
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${token}`,
// 	};
// 	fetch(url, { method: "DELETE", headers });
// };

/*******************Order Section ********************* */

// export const getOrders = async (applyFunc) => {
// 	const url = "http://localhost:8090/api/orders";
// 	const res = await fetch(url);
// 	console.log(`getOrders res; `, res);
// 	res.json().then((orders) => {
// 		applyFunc([...orders]);
// 	});
// };

// export const addOrders = async (body) => {
// 	const {  token } = JSON.parse(localStorage.getItem("userData"));

// 	const url = "http://localhost:8090/api/orders";
// 	//const item1 = JSON.stringify(item );
// 	//const userId1 = JSON.stringify( userId);
// 	body = JSON.stringify(body);
// 	console.log(`body: `, body);
// 	const headers = {
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${token}`,
// 	};
// 	const res = await fetch(url, {
// 		method: "POST",
// 		body,
// 		headers,
// 	});
// 	const result = await res.json();
// 	return result;
// };

/****************EditCart/Order***********************/
/* export const getEditReview = async (req, res) => {
	// parse the review id from the;
	console.log(req.params);
	let _id = req.params.id;
	// Search database for the review

	const course = await Course.findById(_id);

	res.render("editCourse.hbs", {
		isAuth,
		sessionUser: course.createdBy,
		course,
		_id,
	});
};
 
const postEditCourse = async (req, res) => {
	console.log(`courseSenrOver: `.course);
	let _id = req.params.id;
	const course = await Course.findById(_id);
	course.title = req.body.title;
	course.description = req.body.description;
	course.imageURL = req.body.imageURL;
	if (req.body.isPub == "on") {
		course.isPublic = true;
	} else {
		course.isPublic = false;
	}

	await course.save();
	res.redirect("/");
};

const getDelete = async (req, res) => {
	let _id = req.params.id;
	console.log("_id: ", _id);
	const course = await Course.findById(_id);
	await course.delete(_id);
	res.redirect("/");
};
*/
/**************************Reviews********************/
/* post to User and Movie  */
/* get user reviewsGiven   */
/* get movie reviews		*/
/*							*/

// export const getUser = async (userId) => {
// 	const userData = JSON.parse(localStorage.getItem("userData"));
// 	console.log(`userData: `, userData);
// 	return userData;
// };

// export const postEditReviews = async (req) => {
// 	console.log(`reviewsSentOver: `, req);

// 	var myHeaders = new Headers();
// 	const { id, token } = JSON.parse(localStorage.getItem("userData"));
// 	myHeaders.append("Content-Type", "application/json");
// 	myHeaders.append("Authorization", `Bearer ${token}`);

// 	var requestOptions = {
// 		method: "PUT",
// 		headers: myHeaders,
// 		body: JSON.stringify(req),
// 	};
// 	const { _id } = req;
// 	console.log(`PER _id: `, _id);

// 	fetch(`http://localhost:8090/api/user/${id}`, requestOptions)
// 		.then((response) => response.json())
// 		.then((result) => console.log(result.text))
// 		.then((answer) => {
// 			const { reviewsGiven } = req;
// 			console.log(`put; `, reviewsGiven);
// 			answer.reviewsGiven = reviewsGiven;
// 		});
// };

// export const postReviews = async (req) => {
// 	console.log(`reviewsSentOver: `, req.reviews);
// 	console.log(`movieSentOver: `, req);

// 	const { _id, reviews } = req;
// 	console.log(_id);
// 	console.log(`post reviews: `, reviews);
// 	var myHeaders = new Headers();
// 	const {  token } = JSON.parse(localStorage.getItem("userData"));
// 	myHeaders.append("Content-Type", "application/json");
// 	myHeaders.append("Authorization", `Bearer ${token}`);

// 	var requestOptions = {
// 		method: "PUT",
// 		headers: myHeaders,
// 		body: JSON.stringify(req),
// 	};

// 	console.log(`PER movie_id: `, _id);

// 	fetch(`http://localhost:8090/api/movie/${_id}`, requestOptions)
// 		.then((response) => response.json())
// 		.then((result) => console.log(result.text))
// 		.then((answer) => {
// 			const { reviews } = req;
// 			console.log(`Put; `, reviews);
// 			answer.reviews = reviews;
// 		});
// };

let WikiCollegeListTitle = [];
export const get_my_college_sections = async () => {
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

  export const get_table_in_state_page = async(statePage) => {
	  
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

	export const  get_schools_from_state_page = async(schools) => {
		
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
	  

	 export  const  get_my_data = async () => { 
	  
	  
	  
	  
	  
	  
	  
	  
	  
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

	export const make_list_from_college_list = async(school) => {
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
			  
				}
				}		  