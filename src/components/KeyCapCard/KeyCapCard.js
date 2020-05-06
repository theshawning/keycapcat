import React from 'react'
import styled from 'styled-components'
import nautRender from '../../assets/img/gmk-nautilus-render.png'
import bushidoRender from '../../assets/img/gmk-bushido-render.png'
import SellerButton from './SellerButton'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: .5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 2px 2px 8px black;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    width: 45%;
  }
`;

const CardTitle = styled.h2`
  display: flex;
  color: ${props => props.textColor || 'white'};
  padding: .8rem;
  background-color: ${props => props.backgroundColor};
  text-transform: uppercase;
`;

const CardImgContainer = styled.div`
  height: 16rem;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
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

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export default function KeyCapCard(props) {
  const { cardHeaderBg, cardFooterBg, textColor, name, startDate, endDate } = props;

  return (
    <CardContainer>
      <CardTitle backgroundColor={cardHeaderBg} textColor={textColor}>{name}</CardTitle>
      <CardImgContainer img={bushidoRender}/>
      <CardFooter backgroundColor={cardFooterBg}>
        <p>Runs from {startDate} to {endDate}</p>
      </CardFooter>
    </CardContainer>
  )
}
