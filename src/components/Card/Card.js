import React, { useState } from 'react'
import styled from 'styled-components'

import ExpandMoreIcon from 'mdi-react/ExpandMoreIcon'
import ExpandLessIcon from 'mdi-react/ExpandLessIcon'

import nautRender from '../../assets/img/gmk-nautilus-render.png'
import bushidoRender from '../../assets/img/gmk-bushido-render.png'
import m65b from '../../assets/img/rama-m65b.jpg'
import KeyCapCardExpansion from './CardExpansion'

const CardContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 2px 2px 8px black;
  display: flex;
  flex-direction: column;
  margin: .5rem;
  padding: 1rem;
  width: 90%;
  /* @media (min-width: 1000px) {
    width: 45%;
  } */
`;

const CardTitle = styled.h2`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor || 'white'};
  display: flex;
  padding: .8rem;
  text-transform: uppercase;
`;

const CardImgContainer = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  height: 17rem;
  width: 100%;
  @media (max-width: 750px) {
    height: 13rem;
  }  
  @media (max-width: 600px) {
    height: 11rem;
  }
  @media (max-width: 400px) {
    height: 8rem;
  }
`;

const CardFooter = styled.div`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  height: 3rem;
  justify-content: space-between;
  padding: 0 1rem;
`;

const iconStyle = {
  backgroundColor: 'rgba(255, 255, 255, .3)',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default function KeyCapCard(props) {
  const [cardExpanded, setCardExpanded ] = useState(false);
  function expandCard() {setCardExpanded(prev => !prev)};
  
  const { cardHeaderBg, cardFooterBg, textColor, name, startDate, endDate } = props;

  return (
    <CardContainer >
      <CardTitle backgroundColor={cardHeaderBg} textColor={textColor}>{name}</CardTitle>
      <CardImgContainer img={m65b}/>
      <CardFooter backgroundColor={cardFooterBg}>
        <p>Runs from {startDate} to {endDate}</p>
      {cardExpanded ? <ExpandLessIcon size={30} style={iconStyle} onClick={expandCard}/> : <ExpandMoreIcon size={30} style={iconStyle} onClick={expandCard}/>
      }
      </CardFooter>
      {cardExpanded && <KeyCapCardExpansion 
          backgroundColor={cardFooterBg}
          designer={props.designer}
          vendor={props.vendor} />
      }
    </CardContainer>
  )
}
