import React from 'react';

 function SchoolBoxOnSearch() {

  let dummySchool = '{"_id":"67524a563650eeb549211c84","schoolName":"Holy Apostles College and Seminary","location":"Cromwell","control":"Private(Catholic)","carnegieClassification":"Masters university","enrollment":"719","founded":"1956","schoolLink":"https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Holy_Apostles_College_and_Seminary"}';
  let parser = new DOMParser();
  let dummySchoolJson = JSON.parse(dummySchool);
console.log("dummySchoolJson:",dummySchoolJson.schoolLink);

componentDidUpdate(prevProps, prevState) {
let schoolPic = fetch(dummySchoolJson.schoolLink)
 
    .then(function(response) {
    console.log("Response: ",response);    
    return  response.json();

  })
  .then(function(response){
    let html_code = response.parse.text["*"];
    let parser = new DOMParser();
    let html = parser.parseFromString(html_code, "text/html");
    
    let getCollegePictures = html.getElementsByClassName("mw-file-description");
    
    let hrefarray = [] ;for (let a =0 ; a < getCollegePictures.length; a++) {
    let imageI = getCollegePictures[a].children[0].src; console.log("imageI: ",imageI); hrefarray.push(getCollegePictures[a].children[0].src);}
    
    let hrefArrayLength=hrefarray.length;
   
    let schoolPicRanNum = Math.floor(Math.random()*hrefArrayLength);
  

    let schoolPic1 = hrefarray[schoolPicRanNum];
   
  return schoolPic1;
  });
}
const {schoolName,location,control,carnegieClassification,enrollement,founded,schoolLink} = dummySchoolJson;
console.log(schoolName,location,control,carnegieClassification,enrollement,founded,schoolLink);
async function setSchoolPic() {
    
schoolPic = {
    backgroundImage:`url(${schoolPic})`};
  }

console.log("schoolPic: ",schoolPic);





  return (
    <div>
              <div className="col">
            <div className="MuiPaper-root MuiCard-root jss75 MuiPaper-elevation1 MuiPaper-rounded">
                <div className="MuiCardHeader-root jss76">
                    <div className="MuiCardHeader-content">
                        <span className="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">{schoolName}</span>
                        <span className="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock">{location}</span>
                    </div>
                </div>
                <div className="MuiCardMedia-root jss78" style={schoolPic}>
                // </div>
                <div className="MuiCardContent-root">
                    <div className="jss77">Harvard University is a private Ivy League research university in Cambridge, Massachusetts, established in 1636, whose history, influence, and wealth have made it one of the world's most prestigious universities.
                        <sup>
                            <sup>
                                {/* <a href={}>[source]</a> */}
                            </sup>
                        </sup>
                    </div>
                </div>
                <div className="MuiCardActions-root MuiCardActions-spacing">
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabIndex="0" type="button">
                        <span className="MuiButton-label">Add to List</span>
                        <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text" tabIndex="0" type="button">
                        <span className="MuiButton-label">harvard.edu</span>
                        <span className="MuiTouchRipple-root"></span>
                    </button>
                    <div style={{flexGrow: 1}}></div>
                </div>
                <div className="MuiCollapse-container MuiCollapse-hidden" style={{minHeight: "0px"}}>
                    <div className="MuiCollapse-wrapper">
                        <div className="MuiCollapse-wrapperInner">
                            <div className="MuiCardContent-root"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolBoxOnSearch
