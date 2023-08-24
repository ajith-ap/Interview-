import {HeadDiv, MainHead, ParaDiv, Cart, Tagbar, Drop, MainHead1, ParaDiv1, Fullcontainer} from './MenubarStyled';
import cart from '../../Assets/Images/cart.jpeg';
import { CiSearch } from 'react-icons/ci'; 
import { AiFillCaretDown } from 'react-icons/ai'; 
import { AiFillCaretUp } from 'react-icons/ai'; 
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';
function Menubar() {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const menuItems = [
        { id: 'men', label: 'MEN',subdrop:['men 1', 'men 2','men 3','men 4'] },
        { id: 'women', label: 'WOMEN',subdrop:['Women 1', 'Women 2','Women 3','Women 4']  },
        { id: 'girls', label: 'GIRLS',subdrop:['girls 1', 'girls 2','girls 3','girls 4']  },
        { id: 'people', label: 'BOYS',subdrop:['boys 1', 'boys 2','boys 3','boys 4']  }
      ];

      const handleDropdownClick = (itemId) => {
        setVisible(itemId === visible ? null : itemId);
      };
  return (
    <HeadDiv>
        
        <MainHead>
            <h1>Logo</h1>
            
        </MainHead>
        <MainHead1>
            <h1 onClick={()=>setOpen(true)}>Logo</h1>
            
        </MainHead1>
        {
            open &&
       
        <ParaDiv1>
            <Fullcontainer>
             <Tagbar style={{justifyContent:'flex-end',width:280, cursor:'pointer'}} onClick={()=> setOpen(false)}> <BiArrowBack size={25} color='#940D1B'/></Tagbar>
            <Tagbar onClick={()=> setOpen(false)}> <a>HOME</a></Tagbar>
           
           {
            menuItems.map((item,index) => {
                return (
                    <Tagbar onClick={()=>handleDropdownClick(item.id)}>
                        <a >{item?.label}{ visible === item?.id ? <AiFillCaretUp style={{fontSize:10}}/> : <AiFillCaretDown style={{fontSize:10}}/>}</a>
                        {visible === item?.id &&  <Drop>
                            {
                                item?.subdrop.map((items,i) => {
                                    return (
                                        <p onClick={()=> setOpen(false)}>{items}</p>

                                    )
                                })
                            }
                
                
              </Drop>
              }
              </Tagbar>
                )
            })

           }
            
            </Fullcontainer>
            
        </ParaDiv1>
        
}

        <ParaDiv>
            <Tagbar> <a>HOME</a></Tagbar>
           
           {
            menuItems.map((item,index) => {
                return (
                    <Tagbar onMouseEnter={()=>handleDropdownClick(item.id)} onMouseLeave={()=>setVisible(false)} key={index}>
                        <a >{item?.label}{ visible === item?.id ? <AiFillCaretUp style={{fontSize:10}}/> : <AiFillCaretDown style={{fontSize:10}}/>}</a>
                        {visible === item?.id &&  <Drop>
                            {
                                item?.subdrop.map((items,i) => {
                                    return (
                                        <p>{items}</p>

                                    )
                                })
                            }
                
                
              </Drop>
              }
              </Tagbar>
                )
            })

           }
            

            
        </ParaDiv>
        <Cart>
            {show && <input placeholder='search' style={{outline: 'none',width:40, borderBottomWidth:1,borderRight:0,borderLeft:0,borderTop:0}}/>}
            <CiSearch style={{paddingRight:5, fontSize:20, color:'#A4A4A4'}} onClick={()=>setShow(!show)}/>
            <img src={cart}/>

        </Cart>

    </HeadDiv>
      
   
  );
}

export default Menubar;