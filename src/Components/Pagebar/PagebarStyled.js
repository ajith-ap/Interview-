

import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width:100%;
height:44px;

// background-color:yellow;


`
const MainHead = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: flex-start;
margin:0 10%;

width:65%;
p{
    text-align: left;
font: normal normal 300 12px/28px Poppins;
letter-spacing: 0px;
color: #940D1B;
opacity: 1;
padding:0 3px;
}

`
const ParaDiv = styled.div`
display:flex;
flex-direction:row;
align-items: flex-end;
justify-content: flex-start;
margin:0 10%;
width:35%;



`
const Round =styled.div`
width:15px;
height:15px;
background: #940D1B 0% 0% no-repeat padding-box;
opacity: 0.56;
border-radius:50px;`

export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Round
}
