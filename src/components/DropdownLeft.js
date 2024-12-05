import React from 'react';
import "../assets/workshop-styles.css";
import "../index.css";

function DropdownLeft() {
  return (
    <div>
      <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Get Data Menu
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button class="dropdown-item nicebutton" id="stateListButton" href="#">Get state List data</button>
    <button class="dropdown-item nicebutton"  id="collegesInfoButton" href="#">Get Colleges Info</button>
    <button class="dropdown-item nicebutton" id="filtersForColleges" href="#">College Filters</button>
  </div>
</div>
    </div>
  )
}

export default DropdownLeft
