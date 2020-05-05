import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Wrapper, Header, KeyCapCard } from './components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <KeyCapCard />
      </Wrapper>
    </>
  )
}