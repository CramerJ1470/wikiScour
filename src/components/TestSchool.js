let school = {formerName: [
  "St. Joseph's College for Women (1916–1970)",
  "St. Joseph's College (1970–2022)"
],
Motto: [
  "<i>Esse non videri</i>",
  "(<i>To be, not to seem</i>)"
],
Type: "Private University",
Established: "1916",
ReligiousAffiliation: "Catholic" ,
President: "Donald R. Boomgaarden",
Provost: "Heather Barry",
Dean: ["Phillip Dehne","Eileen White"],
AcademicStaff:[{FullTime:164},{ PartTime:481}],
Students: [{Undergraduates: [{total: 3774},{Brooklyn: 980}, {LongIsland: 2568} ,{Online: 226}]},{PostGraduates:[{total:913},{Brooklyn: 177},{LongIsland: 481}, {Online: 255}]}],
Location: ["Brooklyn","Patchogue"],
Campus: [{Brooklyn: "Urban"},{longIsland: "Suburban"}],
Colors: ["Blue and Gold"],
Nickname: [{Brooklyn: "St. Joe's Brooklyn - Bears"},{LongIsland: "St. Joe's Long Island - Golden Eagles"}],
SportingAffiliations: ["National Collegiate Athletic Association","Division III (NCAA)","Skyline Conference"],
Mascot:[{Brooklyn: "Brooklyn - Vandy"},{LongIsland: "Long Island - Hot Wyngz"}],
Website: "http://www.sjny.edu",
CampusPictures: [
  "https://en.wikipedia.org/wiki/File:SJC_logo_CMYK_reduced_resolution.jpg",
  "https://en.wikipedia.org/wiki/File:Footprints_(1922)_(14781646544).jpg",
  "https://en.wikipedia.org/wiki/File:245_Clinton_Avenue_Burns_Hall_St._Joseph%27s_College.jpg"
]
};  
class IndividualSchool {
    constructor (array) {
      this.array=array;
    }
      makeArray() {

       
      
let o = {};
let length = Object.keys(this.array).length;
let keys = Object.keys(this.array);
for (let a =0; a < length; a++) {
   o[Object.keys(this.array)[a]]= this.array[keys[a]];
   this[Object.keys(this.array)[a]] = this.array[keys[a]];
}
return o;
    }
    }
    
let newSchool = new IndividualSchool(school);
console.log(newSchool.makeArray());
console.log("newSchool: ",newSchool.formerName);


  

