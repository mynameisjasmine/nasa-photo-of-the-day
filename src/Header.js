import React from "react";
import styled from 'styled-components';

const HeaderStyle = styled.h2 `
color: green;
`;



function Header(props) {

    return(
    <div className="header">
    <HeaderStyle>{props.title}</HeaderStyle>
        <p className="header-text"></p>
        <p>{props.date}</p>
        
    </div>
)
}

export default Header;