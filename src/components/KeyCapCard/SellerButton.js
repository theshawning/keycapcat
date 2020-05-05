import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #00c7bb;
  color: white;
  text-transform: uppercase;
  font-family: 'Arial';
  border: none;
  border-radius: 5px;
  padding: .5rem;
  cursor: pointer;
`;

export default function SellerButton(props) {
  return (
    <Button>{props.seller}</Button>
  )
}