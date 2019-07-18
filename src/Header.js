import React from "react";



function Header(props) {
return(
    <div className="header">
        <p className="header-text">{props.title}</p>
        <p>{props.date}</p>
        <p></p>
    </div>
)
}

export default Header;