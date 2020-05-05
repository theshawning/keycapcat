import React from 'react'
import styled from 'styled-components'
import nautRender from '../assets/img/gmk-nautilus-render.png'

const CardContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 95%;
  padding: .5rem;
`;

const CardTitle = styled.h2`
  display: flex;
  color: #00c7bb;
  padding: .5rem 0;
  background-color: #005278;
  text-transform: uppercase;
  padding-left: 1rem;
  & p {
    margin-left: auto;
    color: #fec900;
    margin-right: 1rem;
  }
`;

const CardImgContainer = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  background-color: #233653;
  font-size: 1.2rem;
  color: #fff;

  & a {
    text-decoration: none;
    color: white;
    text-shadow: 1px 2px 5px black;
  }
`;

export default function KeyCapCard() {
  return (
    <CardContainer>
      <CardTitle>Gmk Nautilus<p>Designed by: Zambumon</p></CardTitle>
      <CardImgContainer img={nautRender}/>
      <CardFooter>
        PURCHASE AT:
        <a href="#">Dixie Mech</a>
        <a href="#">Novel Keys</a>
        <a href="#">Candy Keys</a>
      </CardFooter>
    </CardContainer>
  )
}
