import {HeadDiv, MainHead, ParaDiv, Round} from './HomeStyled';
import homeimg from '../../Assets/Images/lap.png'

function Home() {
  return (
    <HeadDiv>
        <MainHead>
            <Round></Round>
            <h2>Happiness Is Our Culture</h2>
        </MainHead>
        <ParaDiv>
            <p>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
        </ParaDiv>
        <img src={homeimg} alt="HomeImage" style={{width:'70%'}}/>
        

    </HeadDiv>
      
   
  );
}

export default Home;