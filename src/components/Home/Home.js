import React from 'react'
import styled from 'styled-components'
import homePic from '../../assets/img/home-md.jpg'

const Landing = styled.div`
  background: ${homePic}, 
    linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.2));
  height: 80%;
  width: 100%;
`;

export default function Home() {
  return (
    <Landing>
      <p>Hi</p>
    </Landing>
  )
}
