import React from 'react'
import styled from 'styled-components'

const Landing = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 3rem auto;
  margin-top: 6rem;
`;

export default function Greeting() {
  return (
    <Landing>
      <h2>Never miss another group buy!</h2>
      <p>Click a card below for more information.</p>
    </Landing>
  )
}
