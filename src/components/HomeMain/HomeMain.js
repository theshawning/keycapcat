import React from 'react'
import styled from 'styled-components'
import LinkBar from '../HomeLinkBars/LinkBar'
import keycapset from '../../assets/img/wood-set.jpg'
import keyboardpic from '../../assets/img/dark-keys-md.jpg'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  margin: 0 auto;
  max-width: 960px;

  @media (max-width: 960px) {
    width: 100%;
  }  
`;

export default function HomeMain(props) {
  return (
    <MainContainer>
      <LinkBar 
        backgroundImg={keycapset} 
        linkInfo='keycaps' 
        link='/keycaps' 
      />
      <LinkBar 
        backgroundImg={keyboardpic} 
        linkInfo='keyboards' 
        link='/keyboards' 
      />
    </MainContainer>
  )
}
