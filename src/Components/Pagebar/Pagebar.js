import {HeadDiv, MainHead, ParaDiv, Round} from './PagebarStyled';
import homeimg from '../../Assets/Images/lap.png';
import { FaHome } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
function Pagebar() {
  return (
    <HeadDiv>
        <MainHead>
            <FaHome size={15} color='#A4A4A4'/>
            <AiOutlineRight  size={10} color='#A4A4A4'/>
            <p>About Us</p>
            
           
        </MainHead>
        <ParaDiv>
            <Round></Round>
        </ParaDiv>

        

    </HeadDiv>
      
   
  );
}

export default Pagebar;