import React from 'react';
import { BgContainer, Logo, Button, Side, Title, Ad } from './AppStyles';
import bg from './assets/bg-landing.png';
import logo from './assets/emc-logo.png';
import { Global, css } from '@emotion/react';

function App() {

  const handleGetPremiumClick = () => {
    console.log(
      `%c
      < Happy coding! >
        
      :::      ::: :::  === :::===== :::  === :::====  :::  ===
      :::      ::: :::  === :::      :::  === :::  === :::  ===
      ===      === ===  === ======   ===  === ===  ===  ====== 
      ===      ===  ======  ===       ======  ===  ===  ====== 
      ======== ===    ==    ========    ==     ======  ===  ===
                                                          
    `,
      "font-family:monospace"
    );
  }

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;700&display=swap');
        `}
      />
      <BgContainer>
        <img src={bg} alt="background" />
      </BgContainer>
      <Side>
        <Logo src={logo} />
        <Title>Unlimited</Title>
        <Ad>Go premium be happy</Ad>
        <Button onClick={handleGetPremiumClick}>Get premium</Button>
      </Side>
    </>
  );
}

export default App;
