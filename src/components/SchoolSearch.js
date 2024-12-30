import React ,{ useContext }  from 'react';
import AuthContext from "../context/AuthContext";
import { Form } from "react-router";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Doit from "./Doit";


const SchoolSearch= ({schoolobjects}) => {
    const navigate = useNavigate();
    
console.log("SchoolSearch length:",schoolobjects.length);
let schools = schoolobjects;
    const { setIsAuth, isAuth } = useContext(AuthContext);
    const samplePage = async() => {
        setIsAuth(true);
        let school1 = document.getElementsByTagName("label")[0].nextElementSibling.value;
        let schoolPicked = {};
        for (let tt = 0; tt< schools.length; tt++) {if (schools[tt].schoolname == school1) {schoolPicked = schools[tt]; 
        navigate(`/samplepage/${schools[tt]._id}`);}}
        
    };

       


  return (<>
    <div>

     <label className="labelWhite">Choose your School from input</label>
<input type="text" list="schools"/>

<datalist  id="schools">
 {schools.map((school) => <option value={school.schoolname} id={school._id} key={school._id}></option>)} 
 
 </datalist>
<button onClick={samplePage}>Submit</button>
    </div>
    
    </>
  )
}

export default SchoolSearch
