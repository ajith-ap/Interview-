import {HeadDiv, MainHead, ParaDiv, Visionbar, Cupbar} from './VisionStyled';

const missionlist =[
  {
    id:1,
    det:"Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction."
  },
  {
    id:2,
    det:"Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents."
  },
  {
    id:3,
    det:"Share part of the profit to ensure the welfare of the employees, society & the environment."
  },
]
function Vision() {
  return (
    <HeadDiv>
        <MainHead>
          <Visionbar>
            <span>OUR VISION</span>
            <p>Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.</p>
           

          </Visionbar>
          <Cupbar>
         

          </Cupbar>

            
           
        </MainHead>
        <ParaDiv >
        <span>Our Mission</span>
        <p>Our mission is to put in effort wholeheartedly to:</p>
        {
          missionlist.map((item,i) => {
            return (
              <ul>
              <li>
               {item?.det}
              </li>
              </ul>
            )
          })
        }
            
        </ParaDiv>
       
        

    </HeadDiv>
      
   
  );
}

export default Vision;
