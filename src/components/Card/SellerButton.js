import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
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
    background-color: rgba(0, 0, 0, .8);
    border: 1px solid whitesmoke;
    color: whitesmoke;
  }
`;

export default function SellerButton(props) {
  return (
    <Button>{props.seller}</Button>
  )
}