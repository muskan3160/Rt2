import React from "react";

class Search extends React.Component {
    render() {
      return (
        <div>
        <div class="input-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
          />
           <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Breed-Type
        </button>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Animal-Type
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a> */}
         
        </div>
      </div>
       
           <button type="button" class="btn btn-primary mr-4">
          Submit
        </button>
          
        </div>
      </div>
      
      );
    }
 }
  
export default Search;