import {HeadDiv, MainHead, ParaDiv, Textbar} from './EmployeeStyled';
import Group from '../../Assets/Images/Group.png';
import Grouppoint from '../../Assets/Images/Group 446.svg';

const array = [
    {
        id:1,
        txt:'Listen to them. We give opportunities for them to express their views- personal and official.'
    },
    {
        id:2,
        txt:'Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.'
    },
    {
        id:3,
        txt:'Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.'
    },
    {
        id:4,
        txt:'The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.'
    },
    {
        id:5,
        txt:'Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.'
    }
]

function Employees() {
  return (
    <HeadDiv>
        <MainHead>
            <img src={Group} alt='Employees imgages'/>

        </MainHead>
        <ParaDiv>
        <h2>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</h2>
            {
                array?.map((item,i) => {
                    return (
                        <Textbar>
                            <img src={Grouppoint} alt='*'/>
                            <p>{item?.txt}</p>
                        </Textbar>
                    )
                })
            }

        </ParaDiv>
        
        

    </HeadDiv>
      
   
  );
}

export default Employees;
