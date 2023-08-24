import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
display:flex;
flex-wrap: wrap;
width:100%;
align-items: center;
justify-content: space-between;
background-color:#242424;


@media screen and (max-width:900px){
    
    width:80%;
}

`
const MainHead = styled.div`
margin: 0 0 0 10%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
// border-right: 1.5px solid #707070;

img {
    
    width:74px;
    height:50px;
    margin: 0 6%;
}
p{
    font: normal normal normal 13px/33px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
@media screen and (max-width:450px) {
    width:100%;
    margin: 20px 0 0;
}


`
const ParaDiv = styled.div`
display:flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
margin:2% 0;
padding-left: 3%;
border-left: 1.5px solid #707070;

span{
    font: normal normal normal 15px/33px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    margin:0 0 17px;
}
p{
    font: normal normal normal 11px/10px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor:pointer;
}
p:hover {
    color: #6B6B6B;
}
@media screen and (max-width:450px) {
    border-left: 0px;
}

`
const Subscribebar = styled.div`
display:flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
margin: 0 10% 0 0;
span {
    font: normal normal normal 15px/33px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    text-align: left;
    margin:0 0 17px;
}
p{
    font: normal normal normal 11px/10px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
text-align: left;
cursor:pointer;
}
@media screen and (max-width:325px) {
    margin: 0 5% 0 0;
}

`
const Container = styled.div`
background-color:#242424;
// padding:0 0 20px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
// text-align: center;

a{
    font: normal normal normal 13px/10px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor:pointer;
margin:20px 0;
}
`
const ParaDivs = styled.div`
display:flex;
flex-direction: column;

span {
    font: normal normal normal 15px/33px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    margin:0 0 17px;
    text-align: left;
}
p{
    font: normal normal normal 11px/10px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
cursor:pointer;
opacity: 1;
text-align: left;
}
p:hover {
    color: #6B6B6B;
}
`
const Inputbox = styled.input`
width:230px;
height:38px;
border:0;
background-color:#ffffff;
text-align:center;
outline: 'none';
border:'none';
color: #242424;
@media (min-width:325px) and (max-width:376px){
    width:200px;
}

`

const SearchDiv = styled.div`
display:flex;
flex-direction:row;
margin:14px 0 0;
@media screen and (max-width:326px){
    flex-direction:column;
}
`
const Button = styled.button`
background-color:#6B6B6B;
font: normal normal medium 11px/33px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
border:0;
height:40px;

`
 const SocialBar = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:flex-end;
 `
const Round = styled.div`
width:20px;
height:20px;
border-radius:50px;
border: 1.5px solid #ffffff;
display:flex;
 align-items:center;
 justify-content:center;
 margin:10px 0 0 10px;
 cursor:pointer;
 :hover {
   transform:scale(1.5)
}
`
const FirstDiv = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
border-top: 1px solid #707070;
margin:10px 0 0;
`
export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Container,
    Subscribebar,
    ParaDivs,
    Inputbox,
    SearchDiv,
    Button, 
    SocialBar,
    Round,
    FirstDiv

}