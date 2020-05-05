import React from 'react'
import styled from 'styled-components'
import nautRender from '../../assets/img/gmk-nautilus-render.png'
import SellerButton from './SellerButton'

const CardContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 90%;
  margin: .5rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 8px black;
`;

const CardTitle = styled.h2`
  display: flex;
  color: ${props => props.textColor || 'white'};
  padding: .8rem;
  background-color: ${props => props.backgroundColor};
  text-transform: uppercase;
`;

const CardImgContainer = styled.div`
  height: 18rem;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

  @media (max-width: 850px) {
    height: 16rem
  }  
  @media (max-width: 750px) {
    height: 14rem
  }  
  @media (max-width: 600px) {
    height: 12rem
  }  
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  background-color: ${props => props.backgroundColor};
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
      <CardTitle backgroundColor='#005278' textColor='#fec900'>
        Gmk Nautilus</CardTitle>
      <CardImgContainer img={nautRender}/>
      <CardFooter backgroundColor='#233653'>
        <SellerButton seller='Dixie Mech' />
        <SellerButton seller='Candy Keys' />
        <SellerButton seller='Novel Keys' />
      </CardFooter>
    </CardContainer>
  )
}
