

import styled from "styled-components";
import colors from "../../Assets/Colors";

const HeadDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const MainHead = styled.div`
display:flex;
align-items: center;
justify-content: center;

h2 {
    font-size:30px;
    color: #940D1B;
text-transform: capitalize;
opacity: 1;
    
}
`
const ParaDiv = styled.div`
margin-bottom :40px;


p {
    color:#515151;
    text-align:center;
    font: normal normal normal 14px/30px Roboto;
}
@media screen and (max-width:700px){
    margin-bottom:10px;

}
`
const Round =styled.div`
width:15px;
height:15px;
background: #FFDCE7 0% 0% no-repeat padding-box;
opacity: 0.56;
border-radius:50px;

margin:40px 40px 0;
@media screen and (max-width:500px) {
    margin:40px 5px 0;
} `


export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Round
}
