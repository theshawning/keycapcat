import React from 'react'
import styled from 'styled-components'

const MenuBtn = styled.div`  
  height: 2.1875rem;
  width: 2.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: .625rem;
  cursor: pointer;
`;

const MenuBurger = styled.div`
  width: 1.875rem;
  height: 3px;
  background-color: #fff;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 1.875rem;
    height: 3px;
    background-color: #fff;
  }

  &::before {
    transform: translateY(-.5rem);
  }

  &::after {
    transform: translateY(.5rem);
  }
`;

export default function BurgerMenu(props) {
  return (
    <MenuBtn onClick={props.click}><MenuBurger /></MenuBtn>
  )
}
