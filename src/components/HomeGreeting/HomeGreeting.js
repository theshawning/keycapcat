import React from 'react'
import styled from 'styled-components'
import Wrapper from '../Wrapper'
import cat from '../../assets/img/computer.png'

const Greeting = styled.div`
  width: 100%;
  padding: 2rem;
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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quam officia magni natus saepe sed porro consequatur ipsum, ipsam fugiat culpa, quod odio quia? Commodi quasi incidunt aut. Earum illo, nihil eaque quos consequatur laudantium, molestias eius molestiae eveniet sint, minus suscipit. Eos ducimus quam nesciunt labore itaque dolore quidem.</p>
      </Greeting>
    </Wrapper>
    )    
}
