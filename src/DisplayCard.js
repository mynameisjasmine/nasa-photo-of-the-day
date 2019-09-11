import React from "react";
import styled from "styled-components"

const DispayStyle = styled.p `
 font-size: 1rem;
 font-weight: bold;
 margin-left: 60px;
 margin-right: 60px
 
`


function DisplayCard(props) {
   console.log("display card:", props) 
    return(
    <div className="display-card">
    
       
       <p>{props.pic}</p>
       <DispayStyle>{props.description}</DispayStyle>
       
        
    </div>
    );
}
export default DisplayCard;