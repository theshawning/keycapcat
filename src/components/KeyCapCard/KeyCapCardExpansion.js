import React from 'react'
import styled from 'styled-components'
import SellerButton from './SellerButton'

const CardFooterExpansion = styled.div`
  height: max-content;
  padding: 1rem;
  background-color: ${props => props.backgroundColor};
  border-top: 1px solid white;
  cursor: initial;
`;

const SellerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1rem;
`;

export default function KeyCapCardExpansion(props) {
  return (
    <CardFooterExpansion backgroundColor={props.backgroundColor}>

      <SellerButtonContainer>
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
      </SellerButtonContainer>
    </CardFooterExpansion>
  )
}