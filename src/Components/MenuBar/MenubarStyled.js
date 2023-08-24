

import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
width:100%;
height:60px;
background-color:#ffffff;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;



`
const MainHead = styled.div`
margin: 0 10%;
h1{
    text-align: left;
font: normal normal medium 36px/329px Poppins;
letter-spacing: 0px;
color: #940D1B;
opacity: 1;
}
@media screen and (max-width:1000px) {
    display:none;
}

`
const MainHead1 = styled.div`
margin: 0 10%;
h1{
    text-align: left;
font: normal normal medium 36px/329px Poppins;
letter-spacing: 0px;
color: #940D1B;
opacity: 1;
display:flex;
cursor:pointer;
}
@media (min-width:1001px){
    display:none;
}

`
const ParaDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

a{
    text-align: left;
font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
padding:0 15px;
cursor:pointer;
// background-color: yellow;
}

@media screen and (max-width:1000px) {
    display:none;
    // display:flex;
flex-direction:column;
// align-items:flex-start;
justify-content:flex-start;
position:fixed;
top:50px;
left:0px;
height:100vh;
width:300px;
background-color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

a {
    width:300px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    // background-color: #940D1B;
    position:fixed;
}

}

`
const ParaDiv1 = styled.div`
display:none;
flex-direction:row;
align-items:center;
justify-content:center;
transition: 0.3s ease-in-out;

a{
    text-align: left;
font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
padding:0 15px;
cursor:pointer;
// background-color: yellow;
}

@media screen and (max-width:1000px) {
    
    display:flex;
flex-direction:column;
// align-items:flex-start;
justify-content:flex-start;
position:fixed;
top:50px;
left:0px;
height:100vh;
width:100%;

background-color:rgba(0,0,0,0.4);
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


a {
    width:300px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    // background-color: #940D1B;
    position:fixed;
}

}

`

const Cart = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-end;
margin:0 10%;
width:12%;
cursor:pointer;
// background-color:green;

img{
    width:19px;
    height:21px;
}

@media screen and (max-width:1000px) {
    // display:none;
}
`
const Drop = styled.div`
width:100px;
position:absolute;
top:100px;
display:flex;
flex-direction:column;
background-color:#ffffff;
align-items:center;
justify-content:center;
border:1px solid #940D1B;
p {
    font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
cursor:pointer;
margin:2px 0;
width:100px;
    text-align:center;
transition: 0.3s ease-in-out;
}
p:hover {
    color: #ffffff;
    background-color:#940D1B;
    width:100px;
    text-align:center;
}
@media screen and (max-width:1000px) {
    position:relative;
    top:60px;
    z-index:1;
    width:300px;
    background-color:#F4F5FA;
    p:hover{
        color: #ffffff;
    background-color:#940D1B;
    width:300px;
    text-align:center;

    }
}

`
const Tagbar = styled.div `
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
height:60px;
`
const Fullcontainer = styled.div`
display:none;
flex-direction:row;
align-items:center;
justify-content:center;
transition: 0.3s ease-in-out;

a{
    text-align: left;
font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
padding:0 15px;
cursor:pointer;
// background-color: yellow;
}

@media screen and (max-width:1000px) {
    
    display:flex;
flex-direction:column;
// align-items:flex-start;
justify-content:flex-start;
position:fixed;
top:50px;
left:0px;
height:100vh;
width:300px;
background-color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

a {
    width:300px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    // background-color: #940D1B;
    position:fixed;
}

}

`
// const Fullcontainer = styled.div `
// width: 100%;
// height:100vh;
// background-color:#f0f0f0;
// `

export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Cart,
    Tagbar,
    Drop,
    MainHead1,
    ParaDiv1,
    Fullcontainer
}
