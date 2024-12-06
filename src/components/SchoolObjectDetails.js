import React ,{useContext} from 'react';
import "../index.css";




function SchoolObjectDetails(isAuth) {
  
  console.log("isAuth: ",isAuth);
  return (
    <>
  
    <div className="sod">
     <table className="infobox vcard">
       <caption className="infobox-title fn org">Harvard  University</caption>
         <tbody>
           <tr>
             <td colSpan="2" className="infobox-image">
               <span className="mw-default-size" typeof="mw:File/Frameless">
                 <a href="/wiki/File:Harvard_University_coat_of_arms.svg" className="mw-file-description">
                   <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/150px-Harvard_University_coat_of_arms.svg.png" decoding="async" width="150" height="146" className="mw-file-element" srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/225px-Harvard_University_coat_of_arms.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/300px-Harvard_University_coat_of_arms.svg.png 2x" data-file-width="301" data-file-height="293"/>
                 </a>
               </span>
               <div className="infobox-caption">
                 <a href="wiki/Heraldry_of_Harvard_University#Harvard_University_coat_of_arms" title="Heraldry of Harvard University">Coat of arms</a>
               </div>
             </td>
           </tr>
           <tr>
             <td colSpan="2"   className="infobox-full-data nickname">
               <a href="/wiki/Latin_language"   className="mw-redirect" title="Latin language">Latin</a>: 
               <i lang="la">Universitas Harvardiana
                 <sup id="cite_ref-1"   className="reference">
                   <a href="#cite_note-1">
                     <span className="cite-bracket">[</span>1
                     <span className="cite-bracket">]</span>
                   </a>
                 </sup>
                 <sup id="cite_ref-2" className="reference">
                   <a href="#cite_note-2">
                     <span className="cite-bracket">[</span>2
                     <span className="cite-bracket">]</span>
                   </a>
                 </sup>
               </i>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
               <div style={{display: "inline-block", lineHeight: "1.2em", padding: ".1em 0"}}>Former names</div>
             </th>
             <td className="infobox-data nickname">
               <a href="/wiki/Harvard_College" title="Harvard College">Harvard College</a>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Motto</th>
             <td className="infobox-data">
               <span title="Latin-language text">
                 <i lang="la">
                   <a href="/wiki/Veritas#Mottos" title="Veritas">Veritas</a>
                 </i>
               </span> (<a href="/wiki/Latin" title="Latin">Latin</a>)
               <sup id="cite_ref-3" className="reference">
                 <a href="#cite_note-3">
                   <span className="cite-bracket">[</span>3
                   <span className="cite-bracket">]</span>
                 </a>
               </sup>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
               <div style={{display: "inline-block",lineHeight: "1.2em", padding: ".1em 0"}}>Motto in&nbsp;English</div>
             </th>
             <td className="infobox-data">"Truth"</td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Type</th>
             <td className="infobox-data">
               <a href="/wiki/Private_university" title="Private university">Private</a>
               <a href="/wiki/Research_university" title="Research university">research university</a>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Established</th>
             <td className="infobox-data">1636
               <span className="noprint">; 388&nbsp;years ago</span>
               <span style={{display:"none"}}>&nbsp;(<span className="bday dtstart published updated">1636</span>)</span>
               <sup id="cite_ref-4" className="reference">
                 <a href="#cite_note-4">
                   <span className="cite-bracket">[</span>4
                   <span className="cite-bracket">]</span>
                 </a>
               </sup>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Founder</th>
             <td className="infobox-data">
               <a href="/wiki/Massachusetts_General_Court" title="Massachusetts General Court">Massachusetts General Court</a>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
               <a href="/wiki/Higher_education_accreditation" title="Higher education accreditation">Accreditation</a>
             </th>
             <td className="infobox-data">
               <a href="/wiki/New_England_Commission_of_Higher_Education" title="New England Commission of Higher Education">NECHE</a>
             </td>
           </tr>
           <tr>
             <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
               <div style={{display: "inline-block", lineHeight: "1.2em", padding: ".1em 0"}}>Academic affiliations</div>
             </th>
             <td className="infobox-data">
               <div className= "midstyles">
              
               <div className="hlist">
                 <ul>
                   <li>
                     <a href="/wiki/Association_of_American_Universities" title="Association of American Universities">AAU</a>
                   </li>
                   <li>
                     <a href="/wiki/Consortium_on_Financing_Higher_Education" title="Consortium on Financing Higher Education">COFHE</a>
                   </li>
                   <li>
                     <a href="/wiki/National_Association_of_Independent_Colleges_and_Universities" title="National Association of Independent Colleges and Universities">NAICU</a>
                   </li>
                   <li>
                   <a href="/wiki/University_of_the_Arctic" title="University of the Arctic">UArctic</a>
                 </li>
                 <li>
                   <a href="/wiki/Universities_Research_Association" title="Universities Research Association">URA</a>
                 </li>
                 <li>
                   <a href="/wiki/National_Space_Grant_College_and_Fellowship_Program" title="National Space Grant College and Fellowship Program">Space-grant</a>
                 </li>
               </ul>
             </div>
             </div>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/Financial_endowment" title="Financial endowment">Endowment</a>
           </th>
           <td className="infobox-data">$50.7 billion (2023)
             <sup id="cite_ref-BGendow_5-0" className="reference">
               <a href="#cite_note-BGendow-5">
                 <span className="cite-bracket">[</span>5
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
             <sup id="cite_ref-HFRendow_6-0" className="reference">
               <a href="#cite_note-HFRendow-6">
                 <span className="cite-bracket">[</span>6
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/University_president" className="mw-redirect" title="University president">President</a>
           </th>
           <td className="infobox-data">
             <a href="/wiki/Alan_Garber" title="Alan Garber">Alan Garber</a>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/Provost_(education)" title="Provost (education)">Provost</a>
           </th>
           <td className="infobox-data">
             <a href="/wiki/John_F._Manning" title="John F. Manning">John F. Manning</a>
             <sup id="cite_ref-7" className="reference">
               <a href="#cite_note-7">
                 <span className="cite-bracket">[</span>7
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <div style={{display: "inline-block", lineHeight: "1.2em", padding: ".1em 0"}}>Academic staff</div>
           </th>
           <td className="infobox-data">~2,400 faculty members (and &gt;10,400 academic appointments in affiliated teaching hospitals)
             <sup id="cite_ref-glance_8-0" className="reference">
               <a href="#cite_note-glance-8">
                 <span className="cite-bracket">[</span>8
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Students</th>
           <td className="infobox-data">21,613 (fall 2022)
             <sup id="cite_ref-CDS-B_9-0" className="reference">
               <a href="#cite_note-CDS-B-9">
                 <span className="cite-bracket">[</span>9
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/Undergraduate_education" title="Undergraduate education">Undergraduates</a>
           </th>
           <td className="infobox-data">7,240 (fall 2022)
             <sup id="cite_ref-CDS-B_9-1" className="reference">
               <a href="#cite_note-CDS-B-9">
                 <span className="cite-bracket">[</span>9
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/Postgraduate_education" title="Postgraduate education">Postgraduates</a>
           </th>
           <td className="infobox-data">14,373 (fall 2022)
             <sup id="cite_ref-CDS-B_9-2" className="reference">
               <a href="#cite_note-CDS-B-9">
                 <span className="cite-bracket">[</span>9
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Location</th>
           <td className="infobox-data adr">
             <div style={{display:"inline"}} className="locality">
               <a href="/wiki/Cambridge,_Massachusetts" title="Cambridge, Massachusetts">Cambridge</a>
             </div>, 
             <div style={{display:"inline"}} className="state">
               <a href="/wiki/Massachusetts" title="Massachusetts">Massachusetts</a>
             </div>, 
             <div style={{display:"inline"}} className="country-name">United States</div>
             <br></br>
             <span className="geo-inline spanstyles">
              
               <span className="plainlinks nourlexpansion">
                 <span style={{whiteSpace: "nowrap"}}>
                   <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/WMA_button2b.png/17px-WMA_button2b.png" srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/5/55/WMA_button2b.png/17px-WMA_button2b.png 1x, //upload.wikimedia.org/wikipedia/commons/thumb/5/55/WMA_button2b.png/34px-WMA_button2b.png 2x" className="wmamapbutton noprint" title="Show location on an interactive map" alt="" style={{padding: "0px 3px 0px 0px",cursor: "pointer"}}/>
                   <a className="external text" href="https://geohack.toolforge.org/geohack.php?pagename=Harvard_University&amp;params=42_22_28_N_71_07_01_W_region:US-MA_type:edu" style={{whiteSpace: "normal"}}>
                     <span className="geo-default">
                       <span className="geo-dms" title="Maps, aerial photos, and other data for this location">
                         <span className="latitude">42°22′28″N</span>
                         <span className="longitude">71°07′01″W</span>
                       </span>
                     </span>
                     <span className="geo-multi-punct">﻿ / ﻿</span>
                       <span className="geo-nondefault">
                       <span className="geo-dec" title="Maps, aerial photos, and other data for this location">42.37444°N 71.11694°W</span>
                       <span style={{display:"none"}}>﻿ / 
                         <span className="geo">42.37444; -71.11694</span>
                       </span>
                     </span>
                   </a>
                 </span>
               </span>
             </span>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Campus</th>
           <td className="infobox-data">Midsize city
             <sup id="cite_ref-10" className="reference">
               <a href="#cite_note-10">
                 <span className="cite-bracket">[</span>10
                 <span className="cite-bracket">]</span>
               </a>
             </sup>, 209 acres (85&nbsp;ha)
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Newspaper</th>
           <td className="infobox-data">
             <i>
               <a href="/wiki/The_Harvard_Crimson" title="The Harvard Crimson">The Harvard Crimson</a>
             </i>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/School_colors" title="School colors">Colors</a>
           </th>
           <td className="infobox-data">Crimson,&nbsp;white,&nbsp;and&nbsp;black
             <sup id="cite_ref-11" className="reference">
               <a href="#cite_note-11">
                 <span className="cite-bracket">[</span>11
                 <span className="cite-bracket">]</span>
               </a>
             </sup>
             <br></br>
       
             <span className="legend-color" style={{backgroundColor:"#A31F36"}}>&nbsp;</span>&nbsp;
             <span className="legend-color" style={{backgroundColor:"#FFFFFF"}}>&nbsp;</span>&nbsp;
             <span className="legend-color" style={{backgroundColor:"#2C2A29"}}>&nbsp;</span>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <a href="/wiki/Athletic_nickname" title="Athletic nickname">Nickname</a>
           </th>
           <td className="infobox-data">
             <a href="/wiki/Harvard_Crimson" title="Harvard Crimson">Crimson</a>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>
             <div style={{display: "inline-block", lineHeight: "1.2em", padding: ".1em 0"}}>Sporting affiliations</div>
           </th>
           <td className="infobox-data">
             <link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"/>
             <div className="hlist">
               <ul>
                 <li>
                   <a href="/wiki/NCAA_Division_I" title="NCAA Division I">NCAA Division I</a>
                   <a href="/wiki/NCAA_Division_I_Football_Championship_Subdivision" title="NCAA Division I Football Championship Subdivision">FCS</a>– 
                    <a href="/wiki/Ivy_League" title="Ivy League">Ivy League</a>
                  </li>
                 <li>
                   <a href="/wiki/ECAC_Hockey" title="ECAC Hockey">ECAC Hockey</a>
                 </li>
                 <li>
                   <a href="/wiki/New_England_Intercollegiate_Sailing_Association" title="New England Intercollegiate Sailing Association">NEISA</a>
                 </li>
                 <li>
                   <a href="/wiki/Collegiate_Water_Polo_Association" title="Collegiate Water Polo Association">CWPA</a>
                 </li>
                 <li>
                   <a href="/wiki/Intercollegiate_Rowing_Association" title="Intercollegiate Rowing Association">IRA</a>
                 </li>
                 <li>
                   <a href="/wiki/Eastern_Association_of_Women%27s_Rowing_Colleges" title="Eastern Association of Women's Rowing Colleges">EAWRC</a>
                 </li>
                 <li>
                   <a href="/wiki/Eastern_Association_of_Rowing_Colleges" title="Eastern Association of Rowing Colleges">EARC</a>
                 </li>
                 <li>
                   <a href="/wiki/Eastern_Intercollegiate_Ski_Association" title="Eastern Intercollegiate Ski Association">EISA</a>
                 </li>
               </ul>
             </div>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Mascot</th>
           <td className="infobox-data">
             <a href="/wiki/John_Harvard_(clergyman)" title="John Harvard (clergyman)">John Harvard</a>
           </td>
         </tr>
         <tr>
           <th scope="row" className="infobox-label" style={{paddingRight:"0.65em"}}>Website</th>
           <td className="infobox-data">
             <span className="url">
               <a rel="nofollow" className="external text" href="https://harvard.edu">harvard.edu</a>
             </span>
             <span className="mw-valign-text-top noprint" typeof="mw:File/Frameless">
               <a href="https://www.wikidata.org/wiki/Q13371#P856" title="Edit this at Wikidata">
                 <img alt="Edit this at Wikidata" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" decoding="async" width="10" height="10" className="mw-file-element" srcSet="//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/15px-OOjs_UI_icon_edit-ltr-progressive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/20px-OOjs_UI_icon_edit-ltr-progressive.svg.png 2x" data-file-width="20" data-file-height="20"/>
               </a>
             </span>
           </td>
         </tr>
         <tr>
           <td colSpan="2" className="infobox-full-data">
             <span className="mw-default-size" typeof="mw:File/Frameless">
               <a href="/wiki/File:Harvard_University_logo.svg" className="mw-file-description">
                 <img alt="Logotype of Harvard University" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/220px-Harvard_University_logo.svg.png" decoding="async" width="220" height="61" className="mw-file-element" srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/330px-Harvard_University_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/440px-Harvard_University_logo.svg.png 2x" data-file-width="600" data-file-height="165"/>
               </a>
             </span>
           </td>
         </tr>
       </tbody>
     </table>
     </div>
     </>          
  );
};

export default SchoolObjectDetails
