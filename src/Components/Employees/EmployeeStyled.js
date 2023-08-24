import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 80px 0;

@media screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
}
@media (min-width:1800px) and screen {
    justify-content: center;
}

@media screen and (max-width:425px){
  margin:80px 0 20px;
}


`
const MainHead = styled.div`
width:400px;
height:420px;

img {
    width:400px;
height:420px;

}
@media (max-width:1000px) {
    width:90%;
    height:60%;
    img {
        width:90%;
        height:60%;
        
    }
}
@media (min-width:1800px) {
    width:50%;
    height:30%;
    img {
        width:50%;
        height:30%;
    }
}

`
const ParaDiv = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 50px;

@media (max-width:1000px) {
    margin: 0 0 0 10px;
}
`
const Textbar = styled.div`
display: flex;
flex-direction: row;
text-align: inherit;
    align-items: baseline;
p{
    font: normal normal normal 14px/20px Roboto;
    color:#000000;
    
}
img {
    width:10px;
    height:10px;
    margin:0 10px;
}
`

export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Textbar
}