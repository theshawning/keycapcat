import React from 'react'
import styled from 'styled-components'
import SellerButton from './SellerButton'
import nautCore from '../../assets/img/gmk-nautilus-core.jpg'

const CardFooterExpansion = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top: 1px solid white;
  height: max-content;
  padding: 1rem;
  cursor: initial;
`;

const SellerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1rem;
`;

const CoreImgContainer = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 300px;
  margin-bottom: 1rem;
  width: auto;
  @media (max-width: 750px) {
    height: 12rem;
  }  
  @media (max-width: 600px) {
    height: 10rem;
  }
  @media (max-width: 400px) {
    height: 8rem;
  }
`;

const Designer = styled.div`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;

  & a {
    color: white;
  }
`;

export default function KeyCapCardExpansion(props) {
  return (
    <CardFooterExpansion backgroundColor={props.backgroundColor}>
      <Designer>
        <p>Designed by: <a href="https://www.zambumon.com">{props.designer}</a></p>
      </Designer>
      <CoreImgContainer img={nautCore} />
      <SellerButtonContainer>
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
      </SellerButtonContainer>
    </CardFooterExpansion>
  )
}