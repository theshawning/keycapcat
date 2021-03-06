import React, { useEffect } from 'react'
import firebase from './firebase'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { HomePage, KeycapPage, KeyboardPage } from './pages'

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
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/keycaps' component={KeycapPage} />
        <Route path='/keyboards' component={KeyboardPage} />
      </Switch>
    </>
  )
}