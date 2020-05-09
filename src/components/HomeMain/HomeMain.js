import React from 'react'
import styled from 'styled-components'
import LinkBar from '../HomeLinkBars/LinkBar'

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

export default function HomeMain() {
  return (
    <MainContainer>
      <LinkBar />
    </MainContainer>
  )
}
