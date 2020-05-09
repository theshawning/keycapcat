import React from 'react'
import styled from 'styled-components'
import Wrapper from '../Wrapper'
import cat from '../../assets/img/computer.png'

const Greeting = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 3rem;

  & p {
    font-size: 1.1rem;
  }
`;

const catStyle = {
  float: 'left',
  marginRight: '.5rem'
}

export default function HomeGreeting() {
  return (
    <Wrapper>
      <Greeting>
        <img style={catStyle} src={cat} alt="Cat with keyboard"/>
        <p>Hi! As the keyboarding hobby has grown rapidly over the past few years, the amount of vendors selling amazing gear has as well. The problem is that most of this awesome gear comes in the form of group buys, limited-time runs that are easy to miss if you are not aware they are running.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis voluptatum numquam rem, sequi id labore doloribus quibusdam doloremque quisquam.</p>
      </Greeting>
    </Wrapper>
    )    
}
