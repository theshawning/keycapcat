import React from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  )
}
