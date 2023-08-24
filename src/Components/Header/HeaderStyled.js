
import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
width:100%;
height:50px;
background-color:#940D1B;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;



`
const SignDiv = styled.div`
display:flex;
flex-direction: row;
margin:0 10%;


p {
    font-size:14px;
    color:#ffffff;
    letter-spacing: 0px;
    margin:0 0 0 40px;
    cursor:pointer;
    
}
@media screen and (max-width:770px) {
    p{
        display: none;
    }
}
`
const AvtDiv = styled.div`
display:none;

@media screen and (max-width:770px) {
    display: flex;
    flex-direction: column;
}
`
const Numdiv = styled.div`
margin:0 10%;

p {
    font-size:14px;
    color:#ffffff;
    letter-spacing: 0px;
    cursor:pointer;
}
`
const SubDiv = styled.div`
width:100px;
// height:100px;
top:50px;
right:30px;
background-color: #ffffff;
position: absolute;
display : flex;
flex-direction:column;
border:1px solid #940D1B;
a {
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
a:hover {
    color: #ffffff;
    background-color:#940D1B;
    // width:100px;
    text-align:center;
}
`

export {
    HeadDiv,
    SignDiv, 
    Numdiv,
    AvtDiv,
    SubDiv
}
