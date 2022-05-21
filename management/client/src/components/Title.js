import React from 'react';
import styled from "styled-components";

function Title() {
    return (
        <TitleDiv>
            <p>Management&nbsp;&nbsp;Application</p>
        </TitleDiv>
    );
}
const TitleDiv = styled.div`
    background-color: #5D5D5D;
    color: aliceblue;
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    padding: 1px;
    margin: -20px;
`
export default Title;