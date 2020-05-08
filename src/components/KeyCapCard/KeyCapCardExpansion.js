import React from 'react'
import styled from 'styled-components'
import SellerButton from './SellerButton'
import { Button } from './SellerButton'
import nautCore from '../../assets/img/gmk-nautilus-core.jpg'

const CardFooterExpansion = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top: 1px solid white;
  height: max-content;
  padding: 1rem;
`;

const SellerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1rem;
`;

const Designer = styled.div`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  
  & button {
    background-color: rgba(255, 255, 255, .9);
    border: none;
    border-radius: 3px;
    border: 1px solid transparent;
    color: rgba(0, 0, 0, .8);
    font-weight: 400;
    font-size: .85rem;
    margin: .5rem .5rem;
    padding: .5rem 1rem;
    text-transform: uppercase;
    transition: all .15s ease-in-out;
    cursor: pointer;
  
    &:hover {
      background-color: rgba(0, 0, 0, .5);
      border: 1px solid whitesmoke;
      color: whitesmoke;
    }

    &:hover a {
      color: whitesmoke;
    }

    & a {
      color: rgba(0, 0, 0, .8);
    }
  }
`;

export default function KeyCapCardExpansion(props) {
  return (
    <CardFooterExpansion backgroundColor={props.backgroundColor}>
      <Designer>
        <p>Designed by: 
          <button>
            <a href="https://www.zambumon.com">{props.designer}</a>
          </button>  
        </p>
      </Designer>
      <SellerButtonContainer>
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
        <SellerButton seller='Novel Keys' />
      </SellerButtonContainer>
    </CardFooterExpansion>
  )
}

// saving this for later if needed
// const CoreImgContainer = styled.div`
//   background-image: url(${props => props.img});
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   height: 300px;
//   margin-bottom: 1rem;
//   width: auto;
//   @media (max-width: 750px) {
//     height: 12rem;
//   }  
//   @media (max-width: 600px) {
//     height: 10rem;
//   }
//   @media (max-width: 400px) {
//     height: 8rem;
//   }
// `;