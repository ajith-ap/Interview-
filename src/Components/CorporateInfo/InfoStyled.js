import styled from "styled-components";
import colors from "../../Assets/Colors";


const HeadDiv = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
h2 {
    margin:25px 0 35px;
}
`
const Container = styled.div`
display:flex;
flex-direction:column;
align-self: baseline;
margin:0 0 20px;

span {
    color:#000000;
    font: normal normal medium 18px/87px Roboto;
    letter-spacing: 0px;
    font-weight:600;
}
p {
    color:#000000;
    opacity:1;
    letter-spacing: 0px;
    font: normal normal normal 14px/30px Roboto;
}
`

export {
    HeadDiv,
    Container
   
}