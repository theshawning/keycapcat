import React from 'react'
import styled from 'styled-components'

const MenuBtn = styled.div`  
  align-items: center;
  display: flex;
  height: 2.1875rem;
  justify-content: center;
  margin-left: auto;
  margin-right: .625rem;
  width: 2.1875rem;
  cursor: pointer;
`;

const MenuBurger = styled.div`
  background-color: #fff;
  height: 3px;
  width: 1.875rem;

  &::before,
  &::after {
    content: '';
    background-color: #fff;
    height: 3px;
    position: absolute;
    width: 1.875rem;
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
