import React from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: #E91E63;
  position: fixed;
`;

const Logo = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-left: .5rem;
`;

export default function Header() {
  return (
    <Navbar>
      <Logo>KeyCapCat</Logo>
      <BurgerMenu />     
    </Navbar>
  )
}