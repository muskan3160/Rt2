import React from "react";
import Search from "./Search";


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
         
            <div className="row">
              <div className="col-3" p-4>
                <Search/> 
            </div>
           </div>
           
      </React.Fragment>
    );
  }
}
export default App;