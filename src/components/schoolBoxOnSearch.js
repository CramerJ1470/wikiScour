import React from 'react';

 function SchoolBoxOnSearch({schoolObject}) {

 

const {schoolname,
    Established,
    President,
    Religiousaffiliation,
    Academicstaff,
    Campus,
    Website,
    Type,
    Dean,
    Formername,
    Motto,
    MottoinEnglish,
    Nickname,
    Mascot,
    Sportingaffiliations,
    Location,
    Provost,
    Students,
    Undergraduates,
    Postgraduates,
    Colors,
    Endowements,
    Chancellor,
    Parentinstitution,
    Newspaper,
    WSJCollegePulse,
    WashingtonMontly,
    Othername,
    Formernames,
    Admitrate,
    SATTotal,
    ACTComposite,
    HighschoolGPAAverage,
    Academicaffiliations,
    Accreditation,
    Forbes,
    Founder,
    schoolWikiPage,
    schoolImages,
    paragraphs,
    USNewsWorldReport} = schoolObject;


    let schoolPicRandom = Math.floor(Math.random()*schoolImages.length);

let schoolPic = {
    backgroundImage:`url(${schoolImages[schoolPicRandom]})`};
 

console.log("schoolPic: ",schoolPic);





  return (
    <>
    <div>
              <div className="col">
            <div className="MuiPaper-root MuiCard-root jss75 MuiPaper-elevation1 MuiPaper-rounded">
                <div className="MuiCardHeader-root jss76">
                    <div className="MuiCardHeader-content">
                        <span className="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">{schoolname}</span>
                        <span className="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock">{Location}</span>
                    </div>
                </div>
                <div className="MuiCardMedia-root jss78" style={schoolPic}>
                // </div>
                <div className="MuiCardContent-root">
                    <div className="jss77">{paragraphs}
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
    </>
  )
}

export default SchoolBoxOnSearch
