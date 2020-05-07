import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: whitesmoke;
  color: black;
  font-weight: 300;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  padding: .5rem 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, .8);
    color: whitesmoke;
  }
`;

export default function SellerButton(props) {
  return (
    <Button>{props.seller}</Button>
  )
}