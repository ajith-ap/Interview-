import styled from "styled-components";
import colors from "../../Assets/Colors";
import Group11 from '../../Assets/Images/Group11.png';
import Group12 from '../../Assets/Images/Group12.png';
import Group13 from '../../Assets/Images/Group13.png'

const HeadDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin:80px 0 55px;
@media screen and (max-width:1300px){
  flex-direction: column;
}

`
const MainHead = styled.div`
display: flex;
flex-direction: column;
width:48%;
height:440px;
// background-color:yellow;
  @media screen and (max-width:1300px){
 width:100%;
}
  @media (max-width:350px){
    height:480px;
}


`
const Visionbar = styled.div`
width:490px;
height:300px;
// position: relative;
  display: flex;
  flex-direction:column;
//   align-items:center;
  justify-content:center;
  background-image: url(${Group12});
 
  background-position: center;
  text-align: left;
  
P{
    text-align: left;
font: normal normal normal 14px/30px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
    margin:0 40px;

}
span{
    text-align: left;
font: normal normal medium 24px/199px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin:0 0 20px 40px;
}
@media (min-width:1300px) and (max-width:2000px){
  
   background-size: cover;
  }
  @media screen and (max-width:1300px){
 width:100%;
 border-radius: 0 100px 0 0;
 
}
@media screen and (max-width:450px){
  height:auto;
  padding:25px 0;
 }
   @media (min-width:2000px){
 width:100%;
}

`

const Cupbar = styled.div`
width:490px;
height:100px;
margin:20px 0 20px;
background-image: url(${Group11});
  background-size: cover;
  background-position: center;

  @media screen and (max-width:1300px){
 width:100%;
}
   @media (min-width:2000px){
 width:100%;
}
@media (max-width:350px){
  height:150px;
 }

`

const ParaDiv = styled.div`
width:50%;
height:400px; 
background-image: url(${Group13});
  // background-size: cover;
  background-position: center;
  // position: relative;
  display: flex;
  flex-direction:column;
//   align-items:center;
  justify-content:center;

  
P{
    text-align: left;
font: normal normal normal 14px/30px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
    margin:0 40px;

}
span{
    text-align: left;
font: normal normal medium 24px/199px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin:0 0 20px 40px;
}
li {
        text-align: left;
font: normal normal normal 14px/30px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
    margin:0 15px;
}
@media screen and (max-width:1300px){
  width:100%;
 }
@media screen and (max-width:500px){
  height:auto;
  padding:25px 0;
 }
 @media (min-width:1300px){
  height:420px;
   background-size: cover;
   p{
    margin:0 80px;
   }
    span{
    margin:0 80px;
   }
    li{
    margin:0 40px;
   }
  }

`

export {
    HeadDiv,
    ParaDiv, 
    MainHead,
    Cupbar,
    Visionbar
}