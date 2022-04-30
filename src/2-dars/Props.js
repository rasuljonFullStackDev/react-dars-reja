import React from "react";

const Props = ({name,age,all}) =>{
    return(
        <React.Fragment>
           <h1>My name is {name}</h1>
           <p>{age ? age : "topilmadi"}</p>
          <h1>  {all ? <div>
              {all.name1}
              {all.name2}
          </div> : "false"}</h1>
        </React.Fragment>
    )
}

export default Props;