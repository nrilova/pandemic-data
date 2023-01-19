import React from "react";




const Tracker3 = ({data: { active, deaths, recovered, updated } })=> {
    if(!active){
        return 'Loading...';
    }
        return (
              <div>
                <h1>Hi</h1>
              </div>
        );
    }

export default Tracker3;