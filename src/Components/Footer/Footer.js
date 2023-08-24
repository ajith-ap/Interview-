import {HeadDiv, MainHead, ParaDiv, Subscribebar, Container, ParaDivs, Inputbox, SearchDiv, Button, SocialBar, Round, FirstDiv} from './FooterStyled';
import fastdelivery from '../../Assets/Images/fastdelivery.png';
import youtube from '../../Assets/Images/Icon metro-youtube2.svg'
import linkedin from '../../Assets/Images/Icon awesome-linkedin.svg'
import twitter from '../../Assets/Images/Icon awesome-twitter.svg'
import facebook from '../../Assets/Images/Icon awesome-facebook-f.svg'

function Footer() {
  return (
    <Container>

    
    <HeadDiv>
      {/* <FirstDiv> */}
        <MainHead>
        <img src={fastdelivery} alt='fast delivery'/>
        <p>Fast delivery in 3-5 Days</p>

            
            
        </MainHead>
        <ParaDiv>
            <span>QUICK LINKS</span>
            <p>Gift Card</p>
            <p>Lookbook 2021</p>
            <p>Privacy Policy</p>
            <p>Shipping & Refund</p>
           
        </ParaDiv>
        <ParaDivs>
        <span>COMPANY</span>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Pricing Plan</p>
            <p>Knowledge Base</p>
           
        </ParaDivs>
        {/* </FirstDiv> */}
        <Subscribebar>
        <span>NEWSLETTER</span>
        <p>Sign up & get all our latest updates and special offers</p>
        <SearchDiv>
        <Inputbox type="text"  placeholder='Enter Your Email address' />
        <Button>SUBSCRIBE</Button>

        </SearchDiv>
       <SocialBar>
        <Round><img src={youtube}/> </Round>
        
        <Round><img src={linkedin}/></Round>
        <Round><img src={twitter}/></Round>
        <Round><img src={facebook}/></Round>

       </SocialBar>
        

        </Subscribebar>
        
        

    </HeadDiv>
    <FirstDiv>
    <a>© 2021 Alba. All Rights Reserved.</a>
    </FirstDiv>
    </Container>
      
   
  );
}

export default Footer;
