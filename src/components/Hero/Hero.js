import React from 'react'
import styled from 'styled-components'
import homePic from '../../assets/img/home-md.jpg'

const Landing = styled.header`
  align-items: center;
  background: linear-gradient(to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)), url(${homePic});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  min-height: 400px;
  overflow: hidden;
  width: 100%;
`;

const HeadingContainer = styled.section`
  background-color: rgba(255, 255, 255, .5);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;

const Heading = styled.h1`
  color: whitesmoke;
  font-size: 3rem;  
  letter-spacing: 1.5px;
  text-shadow: 2px 5px 10px rgba(0,0,0,.9);

  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
  @media (max-width: 310px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h2`
  color: whitesmoke;
  font-size: 1.8rem;
  font-weight: 300;
  text-shadow: 2px 3px 5px rgba(0,0,0,.9);

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.15rem;
  }
  @media (max-width: 310px) {
    font-size: 1rem;
  }
`;


export default function Hero() {
  return (
    <Landing>
      <HeadingContainer>
        <Heading>Keyboard Group Buy</Heading>
        <SubHeading>Never miss another group buy!</SubHeading>
      </HeadingContainer>
    </Landing>
  )
}
