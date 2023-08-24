import { useState } from 'react';
import { HeadDiv, SignDiv, Numdiv, AvtDiv, SubDiv } from './HeaderStyled';
import { AiOutlineUser } from 'react-icons/ai';

function Header() {

  const [show, setShow] = useState(false);
  return (
    <>

      <HeadDiv>
        <Numdiv>
          <p>Alba Helpline: 04829222776</p>
        </Numdiv>

        <SignDiv>
          <AvtDiv onClick={() => setShow(!show)}>
            <AiOutlineUser style={{ color: 'white', fontSize: 25 }} />
            {show &&
              <SubDiv>

                <a >Register</a>
                <a >Login</a>

              </SubDiv>
            }

          </AvtDiv>

          <p>Register</p>
          <p>Login</p>
        </SignDiv>

      </HeadDiv>
    </>


  );
}

export default Header;