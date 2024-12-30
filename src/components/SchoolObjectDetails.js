import React ,{useContext} from 'react';
import { useParams } from "react-router-dom";

import "../index.css";




function SchoolObjectDetails({schoolobjects,isAuth}) {

let schools = schoolobjects;
const  {id}  = useParams();
let activeSchool = {};
for (let tt = 0; tt< schools.length; tt++) {console.log(schools[tt]._id,id); if (schools[tt]._id == id) {activeSchool = schools[tt];}}

const { schoolname,Established,President,Religiousaffiliation,Academicstaff,Campus,Website,Type,Dean,Formername,Motto,
    Nickname,Mascot,Sportingaffiliations,Location,Provost,Students,Undergraduates,Postgraduates,Colors,Endowements,Chancellor,
    Parentinstitution,MottoinEnglish,Newspaper,WSJCollegePulse,WashingtonMontly,Othername,Formernames,Admitrate,SATTotal,
    ACTComposite,HighschoolGPAAverage,Academicaffiliations,Accreditation,Forbes,Founder,schoolWikiPage,schoolImages,paragraphs,
    USNewsWorldReport,Logo } =activeSchool;

let keys = Object.keys(activeSchool);
let url = `http://${Website}`;
let useImage = "";

  // if (schoolImages) {let randomSchoolPicNum = Math.floor(Math.random() * schoolImages.length);useImage = schoolImages[randomSchoolPicNum]; }
if (schoolImages) {let randomSchoolPicNum = Math.floor(Math.random() * schoolImages.length);useImage = schoolImages[0]; }

return (
    <>
    <div className="sod">
     <table className="infobox vcard">
       <caption className="infobox-title fn org">{schoolname}</caption>
         <tbody>


{/****************************************Top Image hopefully logo/crest******************/} 
           <tr>
             <td colSpan="2" className="infobox-image lefttab">
               <span className="mw-default-size" typeof="mw:File/Frameless">
                 <a href="/wiki/File:Harvard_University_coat_of_arms.svg" className="mw-file-description">
                   <img alt="" src={useImage} decoding="async" width="150" height="146" className="mw-file-element"/>
                 </a>
               </span>
             </td>
           </tr>


{/*************************************map out only properties of school*******************/}
          {keys.map((item, index) =>  
          (<tr>
            <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>{item}</th>
            <td className="infobox-data">
            <p className="datafont">{activeSchool[item]}</p>
            {/* <a href="/wiki/Research_university" title="Research university">research university</a> */}
            </td>
          </tr>))
          }          

         </tbody>
       </table>
      </div>
    </>          
  );
};

export default SchoolObjectDetails
