import {HeadDiv} from './VideobarStyled';
import { DefaultPlayer as Video } from 'react-html5video';
import introvideo from '../../Assets/Video/video216.mp4';
import 'react-html5video/dist/styles.css';

function Videobar() {
 

  return (
    <HeadDiv>
        <Video 
        
      
        >
            <source src={introvideo} type='video/webm'/>
        </Video>
        
       

    </HeadDiv>
      
   
  );
}

export default Videobar;