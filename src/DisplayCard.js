import React from "react";

function DisplayCard(props){
    return(
        <div className="display-card">
       <p>{props.date}</p>
       <p>{props.pic}</p>
        </div>
    );
}
export default DisplayCard;