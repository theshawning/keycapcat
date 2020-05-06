import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Wrapper, Header, KeyCapCardContainer, Greeting } from './components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    text-decoration: none;
    font-family: 'Roboto Condensed';
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

// FFEBCF - F1D1B5 - F0B7A4 - F18C8E - 305F72
