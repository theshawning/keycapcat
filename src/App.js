import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Wrapper, Header, KeyCapCardContainer, Greeting } from './components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: 0;
    font-family: 'Roboto Condensed';
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-color: whitesmoke;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Greeting />
      <Wrapper>
        <KeyCapCardContainer />
      </Wrapper>
    </>
  )
}

// #FFEBCF - #F1D1B5 - #F0B7A4 - #F18C8E - #305F72
